import Home from "./Pages/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Page404 from "./Pages/Page404/Page404"
import Contact from "./Pages/Contact/Contact"
import Work from "./Pages/Work/Work"
import Slide from "./Pages/Slide/Slide"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/about" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Slide />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
