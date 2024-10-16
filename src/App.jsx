import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import MyIntro from './components/MyIntro';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const[selectedTab,setSelectedTab]=useState("Home")
 
  
  return (
    <>
      <div className="app-container">
        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Navbar>
        <div className="content">
            {selectedTab === "Home" ? (
                <>
                  <MyIntro />
                  <Projects />
                  <Certificates />
                </>
              ) : (
                <MyIntro />
              )}
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
