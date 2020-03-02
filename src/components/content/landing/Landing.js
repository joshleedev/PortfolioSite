import React from 'react';
import TextLoop from 'react-text-loop';

import SiteLogo from './../../../assets/imgs/site-logo.png';

export default () => (
    <div className="landing-content" id="landing-content">
        <img className="landing-content__img" src={SiteLogo}/>
        <h1 className="landing-text-wrapper">     
            <TextLoop className="animted-text">
                <span> </span>
                <span>Software</span>
                <span>Creative</span>
                <span>JavaScript</span>
                <span>Passionate</span>
                <span>React</span>
                <span>Node.js</span>
            </TextLoop>{" "}
            Developer
        </h1>
    </div>
);