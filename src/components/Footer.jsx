const Footer=()=>{
    return (
<>
      <div className="container">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter1"
              type="text"
              className="form-control"
              placeholder="Email address"
              fdprocessedid="b3lqko"
            />
            <button
              className="btn btn-primary"
              type="button"
              fdprocessedid="r1a2m"
            >
              Send Email
            </button>
          </div>
        </form>
      </div>
    <center>
    <ul className="nav justify
    -content-center border-bottom pb-3 mb-3 ">
      <h3 style={{color:"rgba(0,0,0,0.6)"}}>
        <marquee behavior="20" direction="left">This website is created by Aditya Verma.</marquee>
      </h3>
    </ul>
    </center>
    </>
    )
}
export default Footer;