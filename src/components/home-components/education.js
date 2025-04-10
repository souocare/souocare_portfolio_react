
import React from 'react';
import './education.styles.scss';

const educationData = [
  {
    institution: "Lisbon Institute of Engineering, Polytechnic Institute of Lisbon",
    degree: "Master's Degreee in Informatics and Multimedia Engineering ",
    date: "2022 - 2024",
    website: "https://www.isel.pt/en/curso/masters-degree/master-informatics-and-multimedia-engineering",
    description:
      "Deepened technical expertise in software engineering, large-scale data processing, and AI. Projects included a web platform for managing SMS campaigns (emphasizing software architecture) and the DailyNow mobile app in Flutter (focused on user experience and mobile dev). My thesis involved a real-time Portuguese Sign Language translator using CNNs, MediaPipe, and TensorFlow Lite. Gained practical experience in distributed computing, cybersecurity, computer vision, and interactive systems, reinforcing a solid grasp of secure, scalable, and intelligent solutions.",
  },
  {
    institution: "Barreiro School of Technology, Polytechnic Institute of Setúbal",
    degree: "Bachelor's Degree in Bioinformatics",
    date: "2017-2021",
    website: "https://www.estbarreiro.ips.pt/cursos/licenciaturas/lbi",
    description:
      "",
  }
];

const Education = () => {

    return (
        <div className="education-container" id="education">
          <div className="education-title">
            <h1>Education</h1>
          </div>
    
          <ul className="timeline-right">
            {educationData.map((item, index) => (
              <li key={index} className="timeline-item">
                <div className="timeline-header">
                  <div className="timeline-role">
                  <p>{item.degree} {" "}–{" "}
                    <a href={item.website} className='institution-link' target="_blank" rel="noopener noreferrer">
                        <strong>{item.institution}</strong>
                    </a>{" "}
                  </p>

                  </div>
                  <div className="timeline-date">{item.date}</div>
                </div>
                <p className="timeline-description">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      );

}

export default Education;