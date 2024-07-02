import { Articles } from "../components/articles"
import { Projects } from "../components/projects"
import { Title } from "../components/title"

export function Home() {
  return (
    <>
      <div className="min-h-screen bg-background text-text">
        <main className="px-64 py-24 flex flex-col gap-9">
          <Title />
          <Articles />
          <Projects />
        </main>
      </div>
    </>
  )
}

