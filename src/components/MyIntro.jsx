import "./MyIntro.css";
import Aditya_Img from "../images/MyImage.png";

const MyIntro = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="left-intro leads ">
          <h2>
            <i>
              Hi,my name is Aditya Verma and I am from Jammu and I am a recent graduate with a Bachelor of Technology in Electronics and Communication Engineering (ECE) and an overall
              CGPA of 7.5. I have  skills in HTML, CSS, JavaScript, and
              Python, and I am experienced in using the Django framework for web
              development. Recently, I have also learned React.js. My knowledge
              of these technologies allows me to contribute effectively to
              projects and deliver high-quality solutions.
            </i>
          </h2>
        </div>
        <div className="right-my-image">
          <img src={Aditya_Img} alt="Profile  Image" />
        </div>
      </div>
      <div className="about-section my-4">
        <center>
          <h2 style={{letterSpacing:"5px"}}>My Skills</h2>
          <div className="contents">
            <ul className="list-group">
              <li className="list-group-item active" aria-current="true">
                Web Development
              </li>
              <li className="list-group-item my-5">Html,Css,JavaScript,Bootstrap,React.js</li>
            </ul>
            <ul className="list-group ">
              <li className="list-group-item active" aria-current="true">
                Programming
              </li>
              <li className="list-group-item my-5 ">Python,Django,Sql</li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item active" aria-current="true">
                Development Tools
              </li>
              <li className="list-group-item my-5">Visiual Studio , Jupyter Notebook, Xampp, Pycharm, Arduino IDE, GitHub(Version Control System)</li>
            </ul>
          </div>
        </center>
      </div>
    </>
  );
};

export default MyIntro;
