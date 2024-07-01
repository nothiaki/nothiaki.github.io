import { useState, useEffect } from "react"

type Article = {
  title: string,
  url: string
}

export function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=hiaki')
      .then((r) => r.json())
      .then((data: Article[]) => {
        setArticles(data);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        <p>Articles</p>
        {
          articles.map((article: Article) => (
            <p>
              <a className="underline" href={article.url}>{article.title}</a>
            </p>
          ))
        }

      </div>
    </>
  )
}
