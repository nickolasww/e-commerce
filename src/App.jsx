import HomePage from './pages/Home/partials/index'
import Register from './pages/Register/partials/index'
import Login from './pages/Login/partials/index'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About/partials/index'

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
