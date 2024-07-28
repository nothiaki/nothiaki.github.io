import { useEffect, useState } from "react"
import randomChar from "../utils/random-char"
import { Footer } from "../components/footer"

export function Album() {
  const [char, setChar] = useState("")

  useEffect(() => {
    setChar(randomChar())
  }, [])

  return (
    <>
      <div className="min-h-screen bg-background text-text">
        <main className="px-12 pt-14 pb-4 flex flex-col gap-9 md:px-32 md:pt-24 lg:px-64 lg:pt-24">
          <div className="flex justify-between items-end">
            <h1 className="text-2xl font-bold">Album <span className="text-primary">{ char }</span></h1>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              There's some of the photos that I like.
            </p>

            <div
              className="columns-2 gap-5 lg:gap-8 lg:columns-3
                xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8"
            >
              <img src="src/assets/album/01.jpg" loading="lazy" />
              <img src="src/assets/album/02.jpg" loading="lazy" />
              <img src="src/assets/album/03.jpg" loading="lazy" />
              <img src="src/assets/album/04.jpg" loading="lazy" />
              <img src="src/assets/album/05.jpg" loading="lazy" />
              <img src="src/assets/album/06.jpg" loading="lazy" />
              <img src="src/assets/album/07.jpg" loading="lazy" />
              <img src="src/assets/album/08.jpg" loading="lazy" />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  )
}

