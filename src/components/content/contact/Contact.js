import React from 'react';

export default () => {
    <div className="contact-content">
        <h3 className="contact-tite">Feel free to get in touch.</h3>
        <form className="contact-form">
            <div className="contact-form__personal-info">
                <input className="contact-form__personal-info__name"/>
                <input className="contact-form__personal-info__email"/>
            </div>
            <input className="contact-form__message"/>
            <button className="contact-form__submit">SEND</button>
        </form>
    </div>
};