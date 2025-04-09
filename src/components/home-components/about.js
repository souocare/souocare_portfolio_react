import React, { useRef, useEffect, useState } from 'react';
import './about.styles.scss';

const About = () => {
    const leftRef = useRef();
    const [leftHeight, setLeftHeight] = useState(null);
  
    useEffect(() => {
      if (leftRef.current) {
        setLeftHeight(leftRef.current.offsetHeight);
      }
    }, []);
    const languages = [
        { name: "Python", icon: "assets/skills/python.svg" },
        { name: "C#", icon: "assets/skills/csharp.svg" },
        { name: "SQL", icon: "assets/skills/sql.svg" },
        { name: "HTML/CSS/Javascript", icon: "assets/skills/htmlcssjs.svg" },
        { name: "Flutter/Dart", icon: "assets/skills/flutter.svg" },
        { name: "PowerBI", icon: "assets/skills/powerbi.svg" },
    ];

    return (
        <div className='about-container' id='aboutme'>
            <div className='about-title'>
                <h1>About Me</h1>
            </div>

            <div className='about-content'>
                <div className='about-left' ref={leftRef}>
                    <img src='assets/me.jpg' alt='Gonçalo Fonseca' className='profile-image' />
                    <p className='about-text'>
                    Hi! I’m from Lisbon, Portugal. I’m a full-stack developer with experience in both backend (C#, Python, SQL) and frontend (HTML/CSS/JS, Flutter and some React), always eager to learn more. I also have some experience using PowerBI for data anaylsis and visualization.<br/>

                    I’m a passionate software engineer who loves building clean and scalable apps. I enjoy solving problems through code and have a strong curiosity for new technologies. Over time, I’ve worked on a variety of projects—from automation scripts in Python and database management to Web Apps and Mobile apps and data analysis tools.<br/>

                    I value teamwork and believe knowledge grows when it's shared. I'm always looking for new challenges and opportunities to grow as a software engineer by learning new languages, frameworks, or tools that help me become more versatile.<br/>

                    Feel free to get in touch!
                    </p>
                </div>

                <div
                    className='about-right'
                    style={{ height: leftHeight ? `${leftHeight}px` : "auto" }}
                    >
                    <div className='languages-carousel'>
                        {languages.map((lang, index) => (
                            <div key={index} className='language-item'>
                                <img src={lang.icon} alt={lang.name} className='language-icon' />
                                <span>{lang.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
