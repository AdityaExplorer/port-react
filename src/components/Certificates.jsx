import Four_Sem_Traing_Img from '../images/Aditya Verma project_page-0001.jpg';
import Data_Science from '../images/DATA SCIENCE_page-0001.jpg';
import web_D from '../images/HTML AND CSS_page-0001.jpg';
import data_base from '../images/NEW SQL.jpg';
import Project_Display from '../images/PROJECT DISPLAY.jpg';
import VSI_IMG from '../images/VLSI.jpg';
import './Certificates.css';
import React, { forwardRef } from 'react';



const Certificates=forwardRef((props,ref) => {
    return (
        <div className="container" ref={ref} id="certificates">
            <center><h1 className="leads" >Certificates</h1></center>
            <div className="certificates-grid">
                {dataCertificates.map(data => (
                    <div key={data.id} className="certificate-card">
                        <img src={data.image} alt={data.title} className="certificate-image" />
                        <h5 className="certificate-title">{data.title}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
});


const dataCertificates=[
    {
        id:'1',
        image:Four_Sem_Traing_Img,
        title:'Four Trainig at ALLSoft Solution Mohali',
    },
    {
        id:'2',
        image:Data_Science,
        title:'Data Science',
    },
    {
        id:'3',
        image:web_D,
        title:'Html and Css',
    },
    {
        id:'4',
        image:data_base,
        title:'SQL',
    },
    {
        id:'5',
        image:Project_Display,
        title:'Participate in Project Dispaly Competiion',
    },
    {
        id:'6',
        image:VSI_IMG,
        title:'One day workshop on VLSI',
    },
];

export default Certificates;