import React, { useRef, useEffect } from "react";
import { ReactTyped } from "react-typed";
import "./Landing.styles.scss";

const Landing = () => {
    const spotlightRef = useRef(null);
    useEffect(() => {
        const spotlight = spotlightRef.current;
    
        const handleMouseMove = (e) => {
          const { clientX: x, clientY: y } = e;
    
          if (spotlight) {
            spotlight.style.background = `
              radial-gradient(
                circle 250px at ${x}px ${y}px,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.90) 80%
              )
            `;
          }
        };
    
        window.addEventListener("mousemove", handleMouseMove);
    
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }, []);
      

    return (
        <div className="landing-container">
            <video
                className="video-bg"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="assets/backgroundCodingVideo.mp4" type="video/mp4" />
            </video>

            <div className="dark-overlay" ref={spotlightRef}></div>


            <div className="overlay">
                <h1 className="name">Gonçalo Caré Fonseca</h1>
                <h2 className="title">{"<title  str='"}
                    <ReactTyped
                    strings={["Software Engineer", "Web Developer", "C# / Python / Flutter Dev"]}
                    typeSpeed={100}
                    loop
                    backSpeed={40}
                    cursorChar="'/>"
                    showCursor={true}
                    />
                </h2> 
                <a className="about-button" href="#aboutme">
                    About Me Below <span className="arrow">↓</span>
                    </a>

            </div>
        </div>
    );

}

export default Landing;
