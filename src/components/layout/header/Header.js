import React from 'react';
//import SiteLogo from './../../../assets/imgs/site-logo.png';
import GithubIcon from './../../../assets/social-icons/github.png';
import LinkedInIcon from './../../../assets/social-icons/linked-in.png';
import EmailIcon from './../../../assets/social-icons/email.png';

export default (props) => (
    <div className="header">
        <div className="header__container">
            <div className="header__title-section">
                <div className="header__title-section__text">
                    <h1 className="header__title-section__title">JOSH LEE</h1>
                    <p className="header__title-section__subtitle">CREATIVE DEVELOPER</p>
                </div>
                <img className="header__title-section__logo" src="" alt="header logo"/>
            </div>
            <div className="header__content-section">
                <div className="header__content-section__site-link-wrapper">
                    <a className="header__content-section__site-link" href="/public/index.html">HOME</a>
                    <a className="header__content-section__site-link" href="/public/index.html">BLOG</a>
                    <a className="header__content-section__site-link" href="/public/index.html">PROJECTS</a>
                    <a className="header__content-section__site-link" href="/public/index.html">CV</a>
                    <a className="header__content-section__site-link" href="/public/index.html">CONTACT</a>
                </div>
                <div className="header__content-section__social-link-wrapper">
                    <a className="header__content-section__social-link" href="/public/index.html">
                        <img className="social-link-icon" src={GithubIcon} alt="github"/>
                    </a>
                    <a className="header__content-section__social-link" href="/public/index.html">
                        <img className="social-link-icon" src={LinkedInIcon} alt="linkedIn"/>
                    </a>
                    <a className="header__content-section__social-link" href="/public/index.html">
                        <img className="social-link-icon" src={EmailIcon} alt="email"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
);