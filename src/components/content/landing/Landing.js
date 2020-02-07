import React from 'react';
import TextLoop from 'react-text-loop';

import SiteLogo from './../../../assets/imgs/site-logo.png';

export default () => (
    <div className="landing-content">
        <img className="landing-content__img" src={SiteLogo}/>
        <h1 className="landing-text-wrapper">     
            <TextLoop className="animted-text">
                <span> </span>
                <span>Software</span>
                <span>Creative</span>
            </TextLoop>{" "}
            Developer
        </h1>
    </div>
);