import './MyIntro.css'
import Aditya_Img from '../images/MyImage.png';


const MyIntro=()=>{
    return(
        <div className="container-fluid">
            <div className="left-intro leads ">
                <h2><i>I am a recent graduate with a Bachelor of Technology in Electronics and Communication Engineering (ECE) and an overall SGPA of 7.5. I have strong skills in HTML, CSS, JavaScript, and Python, and I am experienced in using the Django framework for web development. Recently, I have also learned React.js. My knowledge of these technologies allows me to contribute effectively to projects and deliver high-quality solutions.</i></h2>
            </div>
            <div className="right-my-image">
                <img src={Aditya_Img} alt="Profile  Image" />
            </div>
        </div>
    )
}

export default MyIntro;