import React from 'react';

export default () => (
    <div id="contact-content" className="contact-content">
        <h2>Didn't find what you're after?</h2>
        <div className="contact-title__wrapper">
            <h2 className="contact-title">Feel free to get </h2>
            <h2 className="contact-title__highlight">in touch.</h2>
        </div>
        <form className="contact-form">
            <div className="contact-form__personal-info">
                <input className="contact-form__personal-info__name" placeholder="FULL NAME"/>
                <input className="contact-form__personal-info__email" placeholder="EMAIL"/>
            </div>
            <input className="contact-form__message" placeholder="WRITE YOUR MESSAGE HERE"/>  
            <button className="contact-form__submit">Submit</button>
        </form>
    </div>
);
