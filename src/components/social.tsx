import { SpanPrimary } from "./span-primary";

export function Social() { return (
    <>
      <div className="flex flex-col gap-4">
        <p className="font-bold">Redes Sociais<SpanPrimary>::</SpanPrimary></p>
        <div>
          <p>Você pode me encontrar no</p>
          <div className="flex flex-row">
            <SpanPrimary>
              <a className="underline" href="https://www.linkedin.com/in/hiaki/" target="_blank">Linkedin</a>
            </SpanPrimary>
            ,
            <SpanPrimary>
              <a className="underline" href="https://github.com/nothiaki" target="_blank">GitHub</a>
            </SpanPrimary>
            ...
          </div>
          <p>Ou me mande um email</p>
          <div className="flex items-center gap-1">
            <SpanPrimary>
              <a className="underline" href="mailto:celsohenrique367@gmail.com" target="_blank">
                celsohenrique367@gmail.com
              </a>
            </SpanPrimary>
            !
          </div>
        </div>
      </div>
    </>
  )
}
