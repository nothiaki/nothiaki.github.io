import { Articles } from "../components/articles"
import { Footer } from "../components/footer"
import { Projects } from "../components/projects"
import { Social } from "../components/social"
import { Title } from "../components/title"

export function Home() {
  return (
    <>
      <div className="min-h-screen bg-background text-text">
        <main className="px-12 pt-14 pb-4 flex flex-col gap-9 md:px-64 md:pt-24">
          <Title />
          <Articles />
          <Projects />
          <Social />
          <Footer />
        </main>
      </div>
    </>
  )
}

