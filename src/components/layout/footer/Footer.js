import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';

//Icon Imports
import UpButton from './../../../assets/imgs/up-arrow-y.png';
import GithubIcon from './../../../assets/social-icons/github.png';
import LinkedInIcon from './../../../assets/social-icons/linked-in.png';
import EmailIcon from './../../../assets/social-icons/email.png';

const Footer = (props) => (
    <div id="footer-content" className="footer-content">
    <NavLink className="reset-button" to="#home-content">
        <img 
            className="reset-img"
            onMouseOver={props.handleSocialIconHover} 
            onMouseLeave={props.handleSocialIconHoverOff}  
            src={UpButton}
        />
    </NavLink>
    <div className="footer-links-wrapper">
        <a href="https://github.com/joshleedev" target="_blank"><img 
            id="github-icon" 
            className="footer-link" 
            src={GithubIcon}
            onMouseOver={props.handleSocialIconHover} 
            onMouseLeave={props.handleSocialIconHoverOff}
            alt="github"
        /></a>
        <a href="https://www.linkedin.com/in/joshleedev/" target="_blank"><img 
            id="linkedin-icon" 
            className="footer-link"
            onMouseOver={props.handleSocialIconHover} 
            onMouseLeave={props.handleSocialIconHoverOff} 
            src={LinkedInIcon}
            alt="linkedIn"
        /></a>
        <a href="mailto: joshlee.dev@gmail.com"><img 
            id="email-icon" 
            className="footer-link" 
            onMouseOver={props.handleSocialIconHover} 
            onMouseLeave={props.handleSocialIconHoverOff} 
            src={EmailIcon}
            alt="email"
        /></a>
    </div>
    <div className="footer-signature-wrapper">
        <p className="footer-signature">JOSH LEE</p>
        <p>&copy;2020</p>
    </div>
    </div>
);

export default Footer;