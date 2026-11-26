import { SpanPrimary } from "./span-primary";

export function Social() { return (
    <>
      <div className="flex flex-col gap-4">
        <p className="font-bold">Socials<SpanPrimary>*</SpanPrimary></p>
        <div>
          <p>You can find me on</p>
          <div className="flex flex-row">
            <a
              className="underline decoration-2 decoration-primary"
              href="https://www.linkedin.com/in/hiaki/" target="_blank"
            >
              LinkedIn
            </a>
            ,
            <a
              className="underline decoration-2 decoration-primary"
              href="https://github.com/nothiaki" target="_blank"
            >
              GitHub
            </a>
            ...
          </div>
          <p>Or send me an email</p>
          <div className="flex items-center gap-1">
            <a
              className="underline decoration-2 decoration-primary"
              href="mailto:celsohenriqs@gmail.com" target="_blank"
            >
              celsohenriqs@gmail.com
            </a>
            .
          </div>
        </div>
      </div>
    </>
  )
}
