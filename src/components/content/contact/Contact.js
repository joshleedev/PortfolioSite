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
        emailjs.sendForm('gmail','portfolio_site', e.target, 'user_2bIa3aWG5ACO2JLlBUZPT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    render() {
        return (
            <div id="contact-content" className="contact-content">
                <div className="cv__title__wrapper">
                    <h2 className="cv__title">CONTACT</h2>
                </div>
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
                <div className="contact-title__wrapper">
                    <h3 className="contact-title">Feel free to get </h3>
                    <h3 className="contact-title__highlight">in touch.</h3>
                </div>
                <form className="contact-form"  onSubmit={this.sendEmail} encType="text/plain">
                    <div className="contact-form__personal-info">
                        <input className="contact-form__personal-info__name" placeholder="FULL NAME" required name="name" autoComplete="off"/>
                        <input className="contact-form__personal-info__email" placeholder="EMAIL" required name="email" autoComplete="off"/>
                    </div>
                    <textarea className="contact-form__message" placeholder="WRITE YOUR MESSAGE HERE" maxLength="495" name="message" autoComplete="off" required/>  
                    <button className="contact-form__submit">SEND</button>
                </form>
            </div>
        );
    }
} 

