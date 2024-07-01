export function Title() {
  const arr: string[] = [":)", ";)", ":D", ":P", "<3", ">_"];
  const char = arr[Math.floor(Math.random() * arr.length)];
  const status = "primary"

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Hey<span className="text-primary">,</span> I<span className="text-primary">'</span>
          m Celso Henrique <span className="text-primary">{ char }</span>
        </h1>
        <h1>online<span className={`text-${status} text-2xl`}>•</span></h1>
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
