import { useState, useEffect } from "react"
import { SpanPrimary } from "./span-primary"

type Article = {
  title: string,
  url: string
}

export function Articles() {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=hiaki")
      .then((r) => r.json())
      .then((data: Article[]) => {
        setArticles(data)
      })
  }, [])

  return (
    <>
      <div className="flex flex-col gap-4">
        <p>Articles<SpanPrimary>::</SpanPrimary></p>
        {
          articles.map((article: Article) => (
            <p>
              <SpanPrimary>*</SpanPrimary>
              <a className="underline" href={article.url} target="_blank">{article.title}</a>
            </p>
          ))
        }
      </div>
    </>
  )
}
