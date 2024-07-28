import { SpanPrimary } from "./span-primary";

export function Social() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <p>Social<SpanPrimary>::</SpanPrimary></p>
        <p>
          <SpanPrimary>*</SpanPrimary>
          <a className="underline" href="https://github.com/nothiaki" target="_blank">GitHub</a>
          <SpanPrimary> *</SpanPrimary>
          <a className="underline" href="mailto:celsohenrique367@gmail.com" target="_blank">celsohenrique367@gmail.com</a>
          <SpanPrimary> *</SpanPrimary>
          <a className="underline" href="https://www.linkedin.com/in/hiaki/" target="_blank">Linkedin</a>
          <SpanPrimary> *</SpanPrimary>
          <a className="underline" href="https://www.pixme.bio/hiaki" target="_blank">Pixme</a>
        </p>
      </div>
    </>
  )
}
