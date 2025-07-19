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
      <div className="flex items-end gap-x-2">
        <div className="w-20 h-20 relative rounded">
          <img src="/assets/pfp.jpg" className="w-20 h-20 rounded" />
          <img
            src="https://flagcdn.com/br.svg"
            alt="brasil"
            className="absolute right-0 bottom-0 w-6 rounded"
          />
        </div>
      </div>
      <div className="flex justify-between items-end">
        <h1 className="text-2xl font-bold">
          Olá<SpanPrimary>,</SpanPrimary> me chamo Celso Henrique <span className="text-primary">{ char }</span>
        </h1>
        
      </div>
      <div className="flex flex-col gap-2">
        <p>
          Sou desenvolvedor de software, e graduando em Ciências Exatas na UFJF!
        </p>
        <p>
          As tecnologias que mais uso são Java, e TypeScript/JavaScript.
          Tenho grande interesse em desenvolvimento back-end e soluções arquiteturais.
        </p>
        <p>
          Sou apaixonado por programação e matemática e faço alguns posts nesse blog, falando sobre temas que acho curiosos, sinta-se livre para ler!
        </p>
      </div>
    </>
  )
}
