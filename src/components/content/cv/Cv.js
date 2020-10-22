import React from 'react';
import CV from './../../../assets/CV.pdf';

export default () => (
    <div id="cv-content" className="cv-section" data-aos="fade">
        <div className="cv__title__wrapper" data-aos="fade-right" data-aos-duration="1200" data-aos-anchor-placement="top-center" data-aos-once="true" data-aos-delay="200">
            <h2 className="cv__title">CURRICULUM VITAE</h2>
        </div>
        <div className="cv-content">
            <div className="cv-wrapper" data-aos="fade-up" data-aos-duration="1200" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-delay="200">
                <embed src={CV} width="800px" height="1200px"/>
            </div>
        </div>
    </div>
);