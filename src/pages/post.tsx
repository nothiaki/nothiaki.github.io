import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import { Footer } from "../components/footer"
import posts from "../../public/posts.json"

type Post = {
  title: string,
  date: string,
  path: string
}

export function Post() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  const post: Post = posts.find((post) =>
    post.path.split("/").pop()?.replace(".md", "") === slug
  ) as Post;

  useEffect(() => {
    fetch(post.path)
      .then((res) => res.text())
      .then(setContent);
  }, [slug]);

  return (
    <>
      <header className="p-2 absolute">
        <Link
          className="underline decoration-2 decoration-primary text-inherit font-bold"
          to={"/"}
        >&lt;</Link>
      </header>
      <div className="min-h-screen bg-background text-text">
        <main className="px-12 pt-14 pb-4 flex flex-col gap-6 md:px-32 md:pt-24 lg:px-64 lg:pt-24">
          <div className="flex justify-between items-center flex gap-4">
            <Link
              className="underline decoration-2 decoration-primary text-inherit font-bold"
              to={`/posts/${slug}`}
            >
              {post.title}
            </Link>
            <p className="text-sm text-offline">{post.date}</p>
          </div>
          <ReactMarkdown
            children={content}
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          />
          <Footer />
        </main>
      </div>
    </>
  );
}

