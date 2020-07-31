import React from 'react';
import CodingIcon from '../../../assets/imgs/coding-icon-alt.png';

export default () => (
    <div id="home-content" className="home-content">
        <div className="home-content__text-block">
            <div className="home-content__text-block__title__wrapper">
                <h2 className="home-content__text-block__title">ABOUT</h2>
                <h2 className="home-content__text-block__title-highlight">ME</h2>
            </div>
            <p className="home-content__text-block__body">
                A creative junior developer aspiring to establish myself as a fully fledged full stack developer.
            </p>
            <p className="home-content__text-block__body"> 
                Seeking exposure to modern web technologies and approaches with a focus on React and NodeJS.
            </p>
            <p className="home-content__text-block__body"> 
                Passionate about creating fast and responsive applications, blending functionality with an intuitive UX/UI experience.
            </p>
            <div className="skill-wrapper">
                <div className="skill-bar">
                    <div className="skill-bar__title">CSS</div>
                    <div className="skill-bar__fill css-percent"></div>
                    <div className="skill-bar__empty"></div>
                    <div className="skill-bar__percent">90%</div>
                </div>
                <div className="skill-bar">
                    <div className="skill-bar__title">HTML</div>
                    <div className="skill-bar__fill html-percent"></div>
                    <div className="skill-bar__empty"></div>
                    <div className="skill-bar__percent">90%</div>
                </div>
                <div className="skill-bar">
                    <div className="skill-bar__title">React</div>
                    <div className="skill-bar__fill react-percent"></div>
                    <div className="skill-bar__empty"></div>
                    <div className="skill-bar__percent">75%</div>
                </div>
                <div className="skill-bar">
                    <div className="skill-bar__title">JavaScript</div>
                    <div className="skill-bar__fill js-percent"></div>
                    <div className="skill-bar__empty"></div>
                    <div className="skill-bar__percent">75%</div>
                </div>
                <div className="skill-bar">
                    <div className="skill-bar__title">Node.js</div>
                    <div className="skill-bar__fill node-percent"></div>
                    <div className="skill-bar__empty"></div>
                    <div className="skill-bar__percent">60%</div>
                </div>
                <div className="skill-bar">
                    <div className="skill-bar__title">C# .NET</div>
                    <div className="skill-bar__fill node-percent"></div>
                    <div className="skill-bar__empty"></div>
                    <div className="skill-bar__percent">40%</div>
                </div>
            </div>
        </div>
        <img className="home-content__image" src={CodingIcon} alt="coding-logo"/>
    </div>
);