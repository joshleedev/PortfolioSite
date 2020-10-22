import React from 'react';
import emailjs from 'emailjs-com';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackMessage: ""
        }
    }

    sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail','portfolio_site', e.target, 'user_2bIa3aWG5ACO2JLlBUZPT')
            .then((result) => {
                if(result.text === 'OK'){
                    let feedbackMessage = "Message Sent";
                    this.setState({feedbackMessage});
                }
            }, (error) => {
                //console.log(error.text);
                let feedbackMessage = "Oops, something went wrong"
                this.setState({feedbackMessage});
            });
        e.target.reset();
    }

    render() {
        return (
            <div id="contact-content" className="contact-section" >
                <div className="contact__title__wrapper" data-aos="fade-right" data-aos-duration="1200" data-aos-anchor-placement="top-center" data-aos-once="true">
                    <h2 className="contact__title">CONTACT</h2>
                </div>
                
                <div className="contact-title__wrapper" data-aos="fade-right" data-aos-duration="1200" data-aos-anchor-placement="top-center" data-aos-once="true">
                    <h3 className="contact-title">Feel free to get in touch.</h3>
                </div>
                <form className="contact-form"  onSubmit={this.sendEmail} encType="text/plain" data-aos="fade-left" data-aos-duration="1200" data-aos-anchor-placement="center-center" data-aos-once="true">
                    <div className="contact-form__personal-info">
                        <input className="contact-form__personal-info__name" placeholder="Full name" required name="name" autoComplete="off"/>
                        <input className="contact-form__personal-info__email" placeholder="Email" required name="email" autoComplete="off"/>
                    </div>
                    <textarea className="contact-form__message" placeholder="Write your message here" maxLength="495" name="message" autoComplete="off" required/>  
                    <button className="contact-form__submit">SEND</button>
                </form>
                <div className="feedback__wrapper">
                    <h3 className="feedback__message">{this.state.feedbackMessage}</h3>
                </div>
            </div>
        );
    }
} 

