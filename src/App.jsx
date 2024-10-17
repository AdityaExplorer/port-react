import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import MyIntro from "./components/MyIntro";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import { useState,useRef } from "react";
import AboutMe from "./components/AboutMe";


function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const certificateSectionRef = useRef(null);
  const conatctSectionRef=useRef(null);
  // Function to handle scrolling
  const scrollToCertificates = () => {
    if (certificateSectionRef.current) {
      certificateSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContact=()=>{
    if(conatctSectionRef.current){
      conatctSectionRef.current.scrollIntoView({behavior:'smooth'})
    }
  }

  return (
    <>
      <div className="app-container">
        <Navbar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          onCertificateClick={scrollToCertificates} 
          onConatctClick={scrollToContact}
        ></Navbar>
        <div className="content">
        {selectedTab === "Home" ? (
          <>
            <MyIntro />
            <Certificates ref={certificateSectionRef} />
          </>
        ) : (
          <>
          <AboutMe></AboutMe>
          <Projects />
          </>
        )}
      </div>

        <Footer ref={conatctSectionRef} ></Footer>
      </div>
    </>
  );
}

export default App;
