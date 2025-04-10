import React, { useState } from 'react';
import './otherinfo.styles.scss';

const OtherInfo = () => {
  const [expandedCV, setExpandedCV] = useState(false);

  return (
    <div className="otherinfo-container" id="other">
      <div className="section-title">
        <h1>Outras Informações</h1>
      </div>

      {/* Languages */}
        <div className="info-block">
        <h3>Languages</h3>
        <div className="language-list">
            <div className="language-item">
            <span>Portuguese (Native)</span>
            </div>
            <div className="language-item">
            <span>English</span>
            </div>
            <div className="language-item">
            <span>Spanish</span>
            </div>
        </div>
        </div>


      {/* CV */}
      <div className="info-block">
        <h3>Resume</h3>
        <p>You can view my resume in a fullscreen preview:</p>
        <button className="cert-button" onClick={() => setExpandedCV(true)}>
            Open Curriculum
        </button>

        {expandedCV && (
            <div className="pdf-modal-overlay" onClick={() => setExpandedCV(false)}>
            <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
                <iframe
                src="assets/GoncaloFonseca_EN_CV.pdf"
                title="Resume PDF"
                className="pdf-frame"
                ></iframe>
                <button className="close-button" onClick={() => setExpandedCV(false)}>
                &times;
                </button>
            </div>
            </div>
        )}
        </div>

      {/* Certifiations */}
      {/* <div className="info-block">
        <h3>Certificados</h3>

        <div className="sub-cert-block">
            <h4>Formações Académicas</h4>
            <p>Sou Licenciado em Bioinformática. Pode observar o currículo acima para mais detalhes.</p>
        </div>

        <div className="sub-cert-block">
            <h4>Cursos Online</h4>
            <p>Certificados de cursos da Udemy, Solyd e Curso em Vídeo. Incluem Python, SQL e Java.</p>
            <a className="cert-button" href="#certificados-online">Ver Certificados</a>
        </div>

        <div className="sub-cert-block">
            <h4>Formações Presenciais</h4>
            <p>Participações como o Android Training Program Portugal e certificado de Excel Intermédio.</p>
            <a className="cert-button" href="#formacoes-presenciais">Ver Certificados</a>
        </div>

        <div className="sub-cert-block">
            <h4>Outros Certificados</h4>
            <p>Certificados de participação em workshops, eventos, e um certificado de Inglês.</p>
            <a className="cert-button" href="#outros-certificados">Ver Certificados</a>
        </div>
    </div> */}


    </div>
  );
};

export default OtherInfo;
