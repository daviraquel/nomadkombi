import { HashRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Crew } from "./pages/Crew"
import { Media } from "./pages/Media"
import { Partners } from "./pages/Partners"
import { UnderConstruction } from "./pages/UnderConstruction"

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/media" element={<Media />} />
        <Route path="/partners" element={<UnderConstruction />} />
        <Route path="/underdev" element={<UnderConstruction />} />
      </Routes>
    </HashRouter>
  )
}
