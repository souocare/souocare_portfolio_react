import React from 'react';
import './contacts.styles.scss';

const Contacts = () => {
  return (
    <div className="contacts-container" id="contact">
      <div className="contact-message">
        <h2>I’d love to hear from you!</h2>
        <a href="mailto:gcare.fonseca99@outlook.com" className="contact-button">
          GET IN TOUCH!
        </a>
      </div>

      <footer className="footer">
        © Copyright - Gonçalo Fonseca - {new Date().getFullYear()}
      </footer>

    </div>
  );
};

export default Contacts;
