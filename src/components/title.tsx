import { useEffect, useState } from "react"
import { SpanPrimary } from "./span-primary"
import randomChar from "../utils/random-char"

export function Title() {
  const [char, setChar] = useState<string>("")

  useEffect(() => {
    setChar(randomChar())
  }, [])

  return (
    <>
      <div className="flex justify-between items-end">
        <h1 className="text-2xl font-semibold leading-tight md:text-3xl">
          Hi<SpanPrimary>,</SpanPrimary> I&apos;m Celso Henrique <span className="text-primary">{ char }</span>
        </h1>
      </div>
      <p className="-mt-8 text-md italic text-offline" aria-label="Pronunciation">
        /ˈsɛw.su ẽˈʁi.kɪ/
      </p>
      <div className="flex flex-col gap-2">
        <p>
          I&apos;m a software developer pursuing a BSc in Mathematics at UFJF.
        </p>
        <p>
          I mostly work with Java, GO and TypeScript/JavaScript, with a strong interest in
          backend development and software architecture.
        </p>
        <p>
          I&apos;m passionate about mathematics, programming and solving challenging problems.
        </p>
      </div>
    </>
  )
}
