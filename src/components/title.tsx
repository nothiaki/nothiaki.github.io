import { useEffect, useState } from "react"
import { SpanPrimary } from "./span-primary"
import randomChar from "../utils/random-char"

type Reply = {
  data: {
    "discord_status": string
  },
  success: string
}

export function Title() {
  const [char, setChar] = useState<string>("")

  const [ reply, setReply ] = useState<Reply>({ data: { discord_status: "" }, "success": "" })

  useEffect(() => {
    setChar(randomChar())

    fetch("https://api.lanyard.rest/v1/users/641064892711043082")//discord id is public dont worry
      .then((r) => r.json())
      .then((data: Reply) => {
        setReply(data)
      })
  }, [])

   const status = () => {
    let color = ""

    switch (reply.data.discord_status) {
      case "online":
        color = "text-primary"
        break
      case "idle":
        color = "text-idle"
        break
      case "offline":
        color = "text-offline"
        break
      default:
        color = "text-text"
    }

    return (
      <h1>
        <span className={`${color} text-xl`}>*</span>
        {reply.data.discord_status}
      </h1>
    )
  }

  return (
    <>
      <div className="flex justify-between items-end">
        <h1 className="text-2xl font-bold">
          Hey<SpanPrimary>,</SpanPrimary> I<SpanPrimary>'</SpanPrimary>
          m Celso Henrique <span className="text-primary">{ char }</span>
        </h1>
        
        {status()}
      </div>
      <div className="flex flex-col gap-4">
        <p>
          I'm a fullstack developer from Brasil, and I'm in the third year of high school.
        </p>
        <p>
          My main stacks are TypeScript, Golang and PostgreSQL. I am dedicated to refining my skills in web
          development, focusing on creating applications with good performance and scalability.
        </p>
      </div>
    </>
  )
}
