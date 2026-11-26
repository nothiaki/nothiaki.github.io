import { SpanPrimary } from "./span-primary"

export function Projects() {

  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="font-bold">Projects<SpanPrimary>*</SpanPrimary></p>
        <div className="flex flex-col gap-2">
          <p>
            <a
              className="underline decoration-2 decoration-primary"
              href="https://github.com/blobtrtl3/trtl3" target="_blank"
            >Trtl3</a> is an S3-inspired object storage service focused on simplicity for
            developers building more capable applications. I also created SDKs in
            several languages to make it easy to integrate into any project.
          </p>
          <p>
            <a
              className="underline decoration-2 decoration-primary"
              href="https://github.com/nothiaki/cqrs-rating" target="_blank"
            >CQRS Rating</a> explores an architectural solution for a product-rating
            service struggling to keep up with demand. It implements CQRS (Command
            Query Responsibility Segregation), using PostgreSQL for writes and
            Elasticsearch for reads, connected through Kafka Connect and CDC
            (Change Data Capture).
          </p>
        </div>
      </div>
   </>
  )
}
