import { Routes, Route, Navigate, HashRouter } from "react-router-dom"
import { Home } from "./pages/home"
import { Album } from "./pages/album"

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/album" element={ <Album />} />
        <Route path="*" element={ <Navigate to={"/"} />} />
      </Routes>
    </HashRouter>
  )
}

