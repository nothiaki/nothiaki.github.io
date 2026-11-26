export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <div className="flex flex-col py-6 font-bold">
        <p>&copy; Celso Henrique 2024 - {currentYear}</p>
      </div>
    </>
  )
}
