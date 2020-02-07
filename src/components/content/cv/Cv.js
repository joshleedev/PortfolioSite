import React from 'react';
import CV from './../../../assets/CV.pdf'

export default () => (
    <div id="cv-content" className="cv-content">
        <div className="cv-wrapper">
            <embed src={CV} width="800px" height="1200px"/>
        </div>
        <div className="cv-error">
            <h2 className="cv-error__title">Having trouble?</h2>
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
);