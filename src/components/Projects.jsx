import './Projects.css'
import ECE_Component_Img from '../images/EceComImage.png';
import Data_Manage_Imd from '../images/dataManImage.png';

const Projects=()=>{
    return(
        <div className="container my-3">
            <h2 className='head'>Projects</h2>
            <div className="project-section">
        <div className="project-grid">
            {projectData.map(item => (
            <div key={item.id} className="card">
                {item.image && <img src={item.image} alt={item.title} className="card-img" />}
                <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
                <p className="card-tech">Technologies: {item.tech}</p>
                <a href={item.liveDemoLink} target="_blank" rel="noopener noreferrer">{item.liveDemoLink}</a>
                </div>
            </div>
    ))}
  </div>
</div>
        </div>

    )
}



const projectData=[
    {
        id:'1',
        image:ECE_Component_Img,
        title:'ECE_COMPONENT_BOOKING',
        desc:' A user-friendly platform for Electronics and Communication Engineering (ECE) that allows users to shop for essential components and related books.',
        tech:'Html,Css,Javascript and GitHUb',
        liveDemoLink:'https://adityaexplorer.github.io/ECE_Component_Booking/'

    },
    {
        id:'2',
        image:Data_Manage_Imd,
        title:'Data Management',
        desc:' Developed a data management website with proper authentication, allowing users to create a single account to securely upload and display important documents, including files and images',
        tech: 'Html, Css, Javascript, Django, Sql and GitHUb',
        liveDemoLink:'https://github.com/AdityaExplorer/Data-Management'

    },
    {
        id:'3',
        title:'Pan Card Verfication',
        desc:'Developed a PAN Card verification system using Python and API integration to validate and retrieve user identity details.',
        tech: 'Python',
        liveDemoLink:'https://github.com/AdityaExplorer/Pan_Card_Verification'

    },
    {
        id:'4',
        title:'Hologram Device',
        desc:'Designed and built a hologram device using Arduino Nano, displaying 2D animations and the text ECE with visual effects',
        tech: 'Arduino Nano,Arduino IDE',
        liveDemoLink:'https://github.com/AdityaExplorer/Pan_Card_Verification'

    },

]

export default Projects;