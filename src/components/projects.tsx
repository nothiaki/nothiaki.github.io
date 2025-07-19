import { SpanPrimary } from "./span-primary"

export function Projects() {

  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="font-bold">Projetos<SpanPrimary>::</SpanPrimary></p>
        <div className="flex flex-col gap-2">
          <p>
            <a
              className="underline decoration-2 decoration-primary text-inherit"
              href="https://github.com/nothiaki/trtl3" target="_blank"
            >Trtl3</a> é um storage de arquivos (objetos) inspirado no s3 da AWS, mas com foco total na simplicidade.
            Junto a ele criei SDK's para várias linguagens para sua integração em qualquer projeto!
          </p>
          <p>
            <a
              className="underline decoration-2 decoration-primary text-inherit"
              href="https://github.com/nothiaki/cqrs-rating" target="_blank"
            >Cqrs Rating</a> é a simulação de uma resolução de um problema arquitetural onde temos um serviço
            de avaliação de produtos, que está tendo gargalos para realizar suas tarefas. Então implementei o padrão
            CQRS(Command Query Responsibility Segregation). O serviço de escrita utiliza PostgreSQL, enquanto
            a leitura é feita por meio do Elasticsearch, conectados via Kafka Connect usando CDC (Change Data Capture).
          </p>
        </div>
      </div>
   </>
  )
}
