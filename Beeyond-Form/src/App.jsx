import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/NewHome.jsx"
import Landing from "./components/Landing.jsx"
import EditHome from "./components/EditHome.jsx"
import SingleProject from "./components/singleProject.jsx"
import Dashboard from "./components/Dashboard.jsx"
import ExpandingDiv from "./components/ExpandingDiv.jsx"
import SynchronizedSections from "./components/singleProject.jsx"

function App() {
    
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/edit-home' element={<EditHome/>}/>
          <Route path='/single' element={<SynchronizedSections/>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
