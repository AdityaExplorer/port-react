import './Navbar.css';

const Navbar=({selectedTab,setSelectedTab})=>{

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
        <li onClick={() => setSelectedTab("About")}>
          <a href="#" className={`nav-link ${selectedTab === "About" ? 'active' : ''}`}>
            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#about"></use></svg> */}
            About
          </a>
        </li>
  
      </ul>
      
      <div className="col-md-3 text-end">
        {/* Add any right-side content here */}
      </div>
    </header>
    
    );
  }
  
  export default Navbar;
  