import './Navbar.css';

function Navbar() {


    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom fixed-top">
      <div className="col-md-3 mb-2 mb-md-0">
      <h1 className='mx-3'>PortFolio</h1>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 ">Home</a></li>
        <li><a href="#" className="nav-link px-2">Resume</a></li>
        {/* <li><a href="#" className="nav-link px-2">Contact</a></li> */}
        {/* <h2>Think Again If You Think You Know Me</h2> */}
      </ul>

      <div className="col-md-3 text-end">
      
      </div>
    </header>
    );
  }
  
  export default Navbar;
  