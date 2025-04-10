import React, { useState, useEffect } from 'react';
import './projects.styles.scss';

const projects = [
  {
    title: "Portfolio Website (this website)",
    description: "This portfolio website is built using React while learning it, and showcases my projects, skills, and experiences. It serves as a platform to demonstrate my work and connect with potential employers or collaborators.",
    repo: "https://github.com/souocare/souocare_portfolio_react",
    previewImage: null,
    tech: ["React"]
  },
  {
    title: "Real-Time Portuguese Sign Language (LGP) Translator using AI (Master's Thesis Project)",
    description: "Developed as part of my Master's thesis, this mobile application translates Portuguese Sign Language (LGP) gestures into text in real-time. It integrates Convolutional Neural Networks (CNN) and MediaPipe for gesture recognition, leveraging TensorFlow Lite for optimized mobile deployment. The project aims to foster social inclusion by facilitating communication between deaf and hearing individuals.",
    repo: "https://github.com/souocare/thesis_portuguese_sign_language",
    previewImage: "assets/images/screenshot_app_recognition.png",
    tech: ["Python", "TensorFlow", "MediaPipe", "Flutter", "Flask"]
  },
  {
    title: "DailyNow App (Master's Project)",
    description: "DailyNow App is designed to be your all-in-one solution for staying informed and connected. Built with Flutter/Dart during the curricular unit Interactive Multimedia Applications during my Master's degree. It was designed to have lots of information in one application.",
    repo: "https://github.com/souocare/dailynow-daily-information-app",
    previewImage: "assets/images/dailynowapp.gif",
    tech: ["Flutter", "Figma"]
  },
  {
    title: "Web platform to send bulk advertisement SMS's (Master's Project)",
    description: "Built in ASP .NET 4.8, for the curricular unit Software Engineering during my Master's, to understand and describe the basic principles of systems development. It's unfinished, just made to complete the requirements of the CU.",
    repo: "https://github.com/souocare/adchime-bulk-advertising-messages-softwareeng-course",
    previewImage: null,
    tech: ["C#", ".NET", "SQL", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Telegram Bot",
    description: "Telegram Bot which shows daily information such as newspaper covers, weather, Covid-19 cases, and others.",
    repo: "https://github.com/souocare/bot-infodiaria-pt",
    previewImage: "https://camo.githubusercontent.com/05b118d3e0e7d570cce3960eb4dcccd6aeb5f9061d7728139c03869098b2e643/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f596e476f6f644b33556a6155584e4b7179762f67697068792e676966",
    tech: ["Python", "Telegram API"]
  }
];

const Projects = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    if (modalImage) {
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleEsc);
    };
  }, [modalImage]);

  return (
    <div className="projects-container" id="projects">
      <div className="projects-title">
        <h1>Projects</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.tech && (
                <p className="tech-line">
                  <strong>Tech/Tools used:</strong> {project.tech.join(', ')}
                </p>
              )}
            </div>

            <div className={`project-buttons ${!project.previewImage ? 'centered' : ''}`}>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                <img
                  src="assets/skills/git.svg"
                  alt="GitHub"
                  className="github-icon"
                />
                Repo
              </a>

              {project.previewImage && (
                <a
                  onClick={() => openModal(project.previewImage)}
                  className="project-button preview"
                >
                  Preview
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Project Preview" />
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
