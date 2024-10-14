import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import MyIntro from './components/MyIntro';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <MyIntro></MyIntro>
      <Projects></Projects>
      <Certificates></Certificates>
      <Footer></Footer>
    </>
  )
}

export default App
