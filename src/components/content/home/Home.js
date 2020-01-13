import React from 'react';
import CodingIcon from '../../../assets/imgs/coding-icon-alt.png';

export default () => (
    <div className="home-content">
        <div className="home-content__text-block">
            <div className="home-content__text-block__title__wrapper">
                <h3 className="home-content__text-block__title">A little</h3>
                <h3 className="home-content__text-block__title-highlight">about me...</h3>
            </div>
            <p className="home-content__text-block__body">
                A creative graduate of computing science, passionate for technology and problem solving.
            </p>
            <p className="home-content__text-block__body"> 
                Enthused to gain further experience as a developer within a creative industry; being exposed to modern web technologies and furthering my skillset.
            </p>
            <p className="home-content__text-block__body">
                Currently looking for a junior role with aspirations of becoming a fully-fledged full stack developer.
            </p>
            <p className="home-content__text-block__body">
                Interested to learn more? Check out my Blog or Projects sections or feel free to get in contact.
            </p>
        </div>
        <img className="home-content__image" src={CodingIcon} alt="coding-logo"/>
    </div>
);