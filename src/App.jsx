import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/partials/index"
import About from "./pages/about/partials/index"
import Register from "./pages/register/partials/index"
import Login from "./pages/login/partials/index"

function App() {

  return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
  )
}

export default App
