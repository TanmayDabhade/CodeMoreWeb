import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Learn from './Learn'
// import Community from './unfinished/Community'
import Underprogress from './components/underprogress/Underprogress'
import LearnAdv from './LearnAdv'
// import ProjectsPage from './ProjectView'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn-adv" element={<LearnAdv />} />
        {/* <Route path="/community" element={<Community />} /> */}
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        <Route path="/underprogress" element={<Underprogress />} />
      </Routes>
    </Router>
  )
}