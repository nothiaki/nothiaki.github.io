export default function randomChar() {
  const arr: string[] = [":)", ";)", ":D", ":P", "<3", ">_"]
  return arr[Math.floor(Math.random() * arr.length)]
}
