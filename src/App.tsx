import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/home"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

