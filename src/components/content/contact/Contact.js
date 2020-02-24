import React from 'react';
import emailjs from 'emailjs-com';

import GithubIcon from '../../../assets/social-icons/github.png';
import LinkedInIcon from '../../../assets/social-icons/linked-in.png';
import EmailIcon from '../../../assets/social-icons/email.png';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmail','portfolio_site','contact-form');
    }

    render() {
        return (
            <div id="contact-content" className="contact-content">
                <div className="contact__social-wrapper">
                    <a href="https://github.com/joshleedev" target="_blank">
                        <img
                            id="github-icon" 
                            className="contact__social-link"  
                            onMouseOver={this.props.handleIconHover} 
                            onMouseLeave={this.props.handleIconHoverOff} 
                            src={GithubIcon} 
                            alt="github"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/joshleedev/" target="_blank">
                        <img 
                            id="linkedin-icon" 
                            className="contact__social-link"
                            onMouseOver={this.props.handleIconHover} 
                            onMouseLeave={this.props.handleIconHoverOff} 
                            src={LinkedInIcon} 
                            alt="linkedIn"
                        />
                    </a>
                    <a href="mailto: joshlee.dev@gmail.com">
                        <img 
                            id="email-icon" 
                            className="contact__social-link"
                            onMouseOver={this.props.handleIconHover} 
                            onMouseLeave={this.props.handleIconHoverOff} 
                            src={EmailIcon} 
                            alt="email"
                        />
                    </a>
                </div>
                <h2>Didn't find what you're after?</h2>
                <div className="contact-title__wrapper">
                    <h2 className="contact-title">Feel free to get </h2>
                    <h2 className="contact-title__highlight">in touch.</h2>
                </div>
                <form className="contact-form" id="contact-form" method="post" encType="text/plain">
                    <div className="contact-form__personal-info">
                        <input className="contact-form__personal-info__name" placeholder="FULL NAME" required/>
                        <input className="contact-form__personal-info__email" placeholder="EMAIL" required/>
                    </div>
                    <textarea className="contact-form__message" placeholder="WRITE YOUR MESSAGE HERE" maxLength="495" required/>  
                    <button className="contact-form__submit">GO</button>
                </form>
            </div>
        );
    }
} 

