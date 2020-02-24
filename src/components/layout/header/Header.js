import React from 'react';
import ReactDOM from 'react-dom';
import { HashLink as NavLink } from 'react-router-hash-link';

//Icon Imports
import SiteLogo from './../../../assets/imgs/site-logo.png';
import GithubIcon from './../../../assets/social-icons/github.png';
import LinkedInIcon from './../../../assets/social-icons/linked-in.png';
import EmailIcon from './../../../assets/social-icons/email.png';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        return this.props.setHeaderOffSet(document.getElementById("header").offsetTop);
    }

    render() {
        return (
            <div id="header" className="header">
                <div className="header__container">
                    <img 
                        className="header__logo" 
                        id="header-logo"
                        onMouseOver={this.props.handleIconHover} 
                        onMouseLeave={this.props.handleIconHoverOff}  
                        src={SiteLogo}
                    />
                    <div className="header__content-section">
                        <div className="header__content-section__site-link-wrapper">
                            <NavLink className={document.location.hash == "#home-content" ? "header__content-section__site-link site-link-active" : "header__content-section__site-link"} to="#home-content">HOME</NavLink>
                            <NavLink className={document.location.hash == "#projects-content" ? "header__content-section__site-link site-link-active" : "header__content-section__site-link"} to="#projects-content">PROJECTS</NavLink>
                            <NavLink className={document.location.hash == "#cv-content" ? "header__content-section__site-link site-link-active" : "header__content-section__site-link"} to="#cv-content">CV</NavLink>
                            <NavLink className={document.location.hash == "#footer-content" ? "header__content-section__site-link site-link-active" : "header__content-section__site-link"} to="#footer-content">CONTACT</NavLink>
                        </div>
                        <div className="header__content-section__social-link-wrapper">
                            <a href="https://github.com/joshleedev" target="_blank">
                                <img
                                    id="github-icon" 
                                    className="social-link-icon header__content-section__social-link"  
                                    onMouseOver={this.props.handleIconHover} 
                                    onMouseLeave={this.props.handleIconHoverOff} 
                                    src={GithubIcon} 
                                    alt="github"
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/joshleedev/" target="_blank">
                                <img 
                                    id="linkedin-icon" 
                                    className="social-link-icon"
                                    onMouseOver={this.props.handleIconHover} 
                                    onMouseLeave={this.props.handleIconHoverOff} 
                                    src={LinkedInIcon} 
                                    alt="linkedIn"
                                />
                            </a>
                            <a href="mailto: joshlee.dev@gmail.com">
                                <img 
                                    id="email-icon" 
                                    className="social-link-icon"
                                    onMouseOver={this.props.handleIconHover} 
                                    onMouseLeave={this.props.handleIconHoverOff} 
                                    src={EmailIcon} 
                                    alt="email"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header__border"></div>
            </div>
        );
    }
} 

                   