import { useEffect, useState } from "react"

type Reply = {
  data: {
    "discord_status": string
  },
  success: string
}

export function Title() {
  const arr: string[] = [":)", ";)", ":D", ":P", "<3", ">_"]
  const [char, setChar] = useState<string>("")

  const [ reply, setReply ] = useState<Reply>({ data: { discord_status: "" }, "success": "" })

  useEffect(() => {
    const char = arr[Math.floor(Math.random() * arr.length)]
    setChar(char)

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
      default:
        color = "text-text"
    }

    return (
      <h1>
        {reply.data.discord_status}
        <span className={`${color} text-4xl`}>•</span>
      </h1>
    )
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Hey<span className="text-primary">,</span> I<span className="text-primary">'</span>
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