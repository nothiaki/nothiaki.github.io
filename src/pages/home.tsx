import { Footer } from "../components/footer"
import { Posts } from "../components/posts"
import { Projects } from "../components/projects"
import { Social } from "../components/social"
import { Title } from "../components/title"

export function Home() {
  return (
    <>
      <div className="min-h-screen bg-background text-text">
        <main className="px-6 pt-14 pb-4 flex flex-col gap-6 md:px-32 md:pt-24 lg:px-64 lg:pt-24">
          <Title />
          <Posts />
          <Projects />
          <Social />
          <Footer />
        </main>
      </div>
    </>
  )
}

