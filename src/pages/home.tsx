import { Footer } from "../components/footer"
import { Projects } from "../components/projects"
import { Social } from "../components/social"
import { Title } from "../components/title"
import { Write } from "../components/write"

export function Home() {
  return (
    <>
      <div className="min-h-screen bg-background text-text">
        <main className="mx-auto flex w-full max-w-[640px] flex-col gap-10 px-6 py-16 md:py-24">
          <Title />
          <Write />
          <Projects />
          <Social />
          <Footer />
        </main>
      </div>
    </>
  )
}
