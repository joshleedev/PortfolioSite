import React from 'react';
import TextLoop from 'react-text-loop';

import SiteLogo from './../../../assets/imgs/site-logo.png';

export default () => (
    <div className="landing-content" id="landing-content">
        <img className="landing-content__img" src={SiteLogo}/>
        <h1 className="landing-text-wrapper">     
            <TextLoop className="animated-text">
                <span> </span>
                <span className="animated-text">Software</span>
                <span className="animated-text">Creative</span>
                <span className="animated-text">JavaScript</span>
                <span className="animated-text">Passionate</span>
                <span className="animated-text">React</span>
                <span className="animated-text">Node.js</span>
            </TextLoop>{" "}
            Developer
        </h1>
    </div>
);