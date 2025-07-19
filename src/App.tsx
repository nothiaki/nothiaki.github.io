import { Routes, Route, Navigate, HashRouter } from "react-router-dom"
import { Home } from "./pages/home"
import { Post } from "./pages/post"

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/posts/:slug" element={ <Post /> } />
        <Route path="*" element={ <Navigate to={"/"} />} />
      </Routes>
    </HashRouter>
  )
}

