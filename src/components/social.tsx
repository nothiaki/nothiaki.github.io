import { SpanPrimary } from "./span-primary";

export function Social() { return (
    <>
      <div className="flex flex-col gap-4">
        <p className="font-bold">Redes Sociais<SpanPrimary>::</SpanPrimary></p>
        <div>
          <p>Você pode me encontrar no</p>
          <div className="flex flex-row">
            <a
              className="underline decoration-2 decoration-primary text-inherit"
              href="https://www.linkedin.com/in/hiaki/" target="_blank"
            >
              Linkedin
            </a>
            ,
            <a
              className="underline decoration-2 decoration-primary text-inherit"
              href="https://github.com/nothiaki" target="_blank"
            >
              GitHub
            </a>
            ...
          </div>
          <p>Ou me mande um email</p>
          <div className="flex items-center gap-1">
            <a
              className="underline decoration-2 decoration-primary text-inherit"
              href="mailto:celsohenrique367@gmail.com" target="_blank"
            >
              celsohenrique367@gmail.com
            </a>
            !
          </div>
        </div>
      </div>
    </>
  )
}
