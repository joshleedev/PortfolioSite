import React from 'react';
import CV from './../../../assets/CV.pdf'

export default () => (
    <div className="cv-content">
        <div className="cv-wrapper">
            <embed src={CV} width="800px" height="1200px"/>
        </div>
        <div className="cv-error">
            <h2 className="cv-error__title">Having trouble?</h2>
            <p className="cv-error__message">Download my CV here.</p>
        </div>
    </div>
);