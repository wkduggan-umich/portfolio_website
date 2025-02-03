import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home'
import Projects from './pages/projects'
import Windmill from './pages/projects/windmill'
import Autograder from './pages/projects/autograder'
import MNIST from './pages/projects/mnist'
import PersonalPortfolio from './pages/projects/peronsal-portfolio'
import MMCPP from './pages/projects/mm-cpp'

export default function MyApp() {
  return (
    <Router>
      <div className='main-content custom-background body-color h-100'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/mnist" element={<MNIST />} />
          <Route path="/projects/personal-portfolio" element={<PersonalPortfolio />} />
          <Route path="/projects/hsat-autograder" element={<Autograder />} />
          <Route path="/projects/michigan-mentors-cpp" element={<MMCPP />} />
          <Route path="/projects/windmill" element={<Windmill />} />
        </Routes>
      </div>
    </Router>
  );
}