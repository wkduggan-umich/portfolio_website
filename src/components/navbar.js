import { Link } from 'react-router-dom'
import '../styles/nav.css';

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark pt-5" style={{ height: "8vh" }}>
          <div className="container-fluid">
            <div className='me-auto d-flex align-items-center ms-3'>
              <div className="text-content border-end pe-3 border-3 me-4">
                  <h1 className='nav-name-text'>Will Duggan</h1>
              </div>
              <div className="fs-4 gap-4 d-flex">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/projects">Projects</Link>
                  <a className="nav-link" href="https://drive.google.com/file/d/1TRbq0PLogsTIyCBT8u7UytKOYvoliGed/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                  {/* <Link className="nav-link" to="/">Contact</Link> */}
              </div>
            </div>
          </div>
        </nav>
    );
}