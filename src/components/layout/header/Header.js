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
        window.addEventListener('scroll', this.handleActiveSection);
        return this.props.setHeaderOffSet(document.getElementById("header").offsetTop);
    }

    /*
    handleActiveSection() {
       let offset = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
        if(offset < 10) {
            document.location.hash = "#landing-content"
        }
        else if(offset > 955 && offset < 1000 ) {
        document.location.hash = "#home-content"
        }
        else if(offset > 1980 && offset < 2020) {
        document.location.hash = "#projects-content"
        }
        else if(offset > 3000 && offset < 3050) {
            document.location.hash = "#cv-content"
        }
        else if(offset > 4550) {
            document.location.hash = "#footer-content"
        }
    }
    */

    render() {
        return (
            <div id="header" className="header">
                <div className="header__container">
                    <NavLink to="#landing-content">
                        <img 
                            className="header__logo" 
                            id="header-logo"
                            onMouseOver={this.props.handleIconHover} 
                            onMouseLeave={this.props.handleIconHoverOff}  
                            src={SiteLogo}        
                        />
                    </NavLink>
                    <div className="header__content-section">
                        <div className="header__content-section__site-link-wrapper">
                            <NavLink className="header__content-section__site-link" activeClassName="site-link-active" to="#home-content">ABOUT</NavLink>
                            <NavLink className="header__content-section__site-link" to="#projects-content">PROJECTS</NavLink>
                            <NavLink className="header__content-section__site-link" to="#cv-content">CV</NavLink>
                            <NavLink className="header__content-section__site-link" to="#footer-content">CONTACT</NavLink>
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

                   