import React from 'react';
import CodingIcon from '../../../assets/imgs/coding-icon-alt.png';

export default () => (
        <div className="blog-content">
            <img className="blog-content__image" src={CodingIcon} alt="Coding Icon"/>
            <div className="blog-content__text__wrapper">
                <h2 className="blog-content__text">Currently under development, </h2>
                <h2 className="blog-content__text-highlight">coming soon!</h2>
            </div>
        </div>
);