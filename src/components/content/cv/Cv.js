import React from 'react';
import CV from './../../../assets/CV.pdf'

export default () => (
    <div id="cv-content" className="cv-section">
        <div className="cv__title__wrapper" data-aos="slide-right" data-aos-duration="1200">
            <h2 className="cv__title">CURRICULUM VITAE</h2>
        </div>
        <div className="cv-content" data-aos="slide-up" data-aos-duration="1200">
            <div className="cv-wrapper">
                <embed src={CV} width="800px" height="1200px"/>
            </div>
        </div>
    </div>
);