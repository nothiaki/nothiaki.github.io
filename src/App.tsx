import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/home"
import { Album } from "./pages/album"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Album />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

