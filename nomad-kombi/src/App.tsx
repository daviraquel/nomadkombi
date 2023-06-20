import { HashRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Crew } from "./pages/Crew"

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/crew" element={<Crew />} />
      </Routes>
    </HashRouter>
  )
}
