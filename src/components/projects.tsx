import { useState, useEffect } from "react"
import { SpanPrimary } from "./span-primary"

type Repository = {
    name: string,
    html_url: string,
    homepage?: string
}

export function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])

  useEffect(() => {
    fetch("https://api.github.com/users/nothiaki/repos")
      .then((r) => r.json())
      .then((data: Repository[]) => {
        setRepos(data)
      })
  }, [])

  return (
    <>
      <div className="flex flex-col gap-4">
        <p>Projects<SpanPrimary>::</SpanPrimary></p>
        {
          repos.map((repository: Repository) => {
            if(["21CardsMagic", "idempotency", "KinvoBackendChallenge", "LoginCrud",
            "nothiaki.github.io", "nvim", "PointsOfInterest"].includes(repository.name)) {
              return (
                <p>
                  <SpanPrimary>*</SpanPrimary>
                  <a className="underline" href={repository.html_url} target="_blank">{repository.name}</a>
                </p>
              )
            }

            return
          })
        }
      </div>
   </>
  )
}
