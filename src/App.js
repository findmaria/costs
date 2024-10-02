import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router className="App">

      <NavBar />

      <Routes>
        <Route element={<Container customClass="min-height" />} >

          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newProject" element={<NewProject />} />

        </Route>

      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
