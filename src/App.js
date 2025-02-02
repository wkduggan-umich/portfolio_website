import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home'
import Contact from './pages/contact'
import Projects from './pages/projects'
import Footer from './components/footer'
import Project1 from './pages/projects/project1';

export default function MyApp() {
  return (
    <Router>
      <div className='main-content custom-background body-color h-100'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/project1" element={<Project1 />} />

          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}