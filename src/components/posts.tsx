import { SpanPrimary } from "./span-primary"
import posts from "../../public/posts.json"
import { Link } from "react-router-dom"

type Post = {
  title: string,
  date: string,
  path: string
}

export function Posts() {

  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="font-bold">Postagens<SpanPrimary>::</SpanPrimary></p>
        <div className="flex flex-col gap-2">
          {
            posts.map((post: Post) => {
              const slug = post.path.split("/").pop()?.replace(".md", "");

              return (
                <div className="flex justify-between items-center">
                  <Link
                    className="underline decoration-2 decoration-primary text-inherit"
                    to={`/posts/${slug}`}
                  >
                    {post.title}
                  </Link>
                  <p className="text-sm text-offline">{post.date}</p>
                </div>
              )
            })
          }
        </div>
      </div>
   </>
  )
}
