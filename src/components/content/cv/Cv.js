import React from 'react';
import CV from './../../../assets/CV.pdf'

export default () => (
    <div id="cv-content" className="cv-section">
        <div className="cv__title__wrapper">
            <h2 className="cv__title">CURRICULUM</h2>
            <h2 className="cv__title-highlight">VITAE</h2>
        </div>
        <div className="cv-content">
            <div className="cv-wrapper">
                <embed src={CV} width="800px" height="1200px"/>
            </div>
            <div className="cv-error">
                <h3 className="cv-error__title">Having trouble?</h3>
                <p className="cv-error__message">
                    Download my CV 
                    <a className="cv-error__link" href={CV} download> here</a>
                </p>
                <p className="cv-error__meessage">
                    View in a new
                    <a className="cv-error__link" href={CV}> tab</a>
                </p>
            </div>
        </div>
    </div>
);