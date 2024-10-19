import './Navbar.css';
import { FaGithub } from "react-icons/fa";
const Navbar=({selectedTab,setSelectedTab,onCertificateClick,onConatctClick })=>{
    return (
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom fixed-top">
      <div className="col-md-3 mb-2 mb-md-0">
        <h1 className='mx-3'>PortFolio</h1>
      </div>
      
      <ul className="nav nav-pills mb-auto">
        
        <li className="nav-item" onClick={() => setSelectedTab("Home")}>
          <a href="#" className={`nav-link ${selectedTab === "Home" ? 'active' : ''}`} aria-current="page">
            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg> */}
            Home
          </a>
        </li>
        <li onClick={() => setSelectedTab("Projects")}>
          <a href="#" className={`nav-link ${selectedTab === "Projects" ? 'active' : ''}`}>
            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#about"></use></svg> */}
            Projects
          </a>
        </li>
        <li>
          <a href="#" className={`nav-link ${selectedTab === "Certificates" ? 'active' : ''}`} onClick={onCertificateClick}>
            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#about"></use></svg> */}
            Certificates
          </a>
        </li>
        <li>
          <a href="#" className={`nav-link ${selectedTab === "Contact" ? 'active' : ''}`} onClick={onConatctClick}>
            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#about"></use></svg> */}
            Contact
          </a>
        </li>
  
      </ul>
      
      <div className="col-md-3 text-end icon" style={{marginRight:"30px",fontSize:"25px"}}>
        <a href="https://github.com/AdityaExplorer?tab=repositories" target='blank'><FaGithub /></a>
      </div>
    </header>
    
    );
  }
  
  export default Navbar;
  