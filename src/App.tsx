import { Routes, Route, Navigate, HashRouter } from "react-router-dom"
import { Home } from "./pages/home"

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="*" element={ <Navigate to={"/"} />} />
      </Routes>
    </HashRouter>
  )
}

