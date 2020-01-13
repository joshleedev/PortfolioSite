import React from 'react';
import CodingIcon from '../../../assets/imgs/coding-icon.png';

export default () => (
    <div className="home-content">
        <div className="home-content__text-block">
            <h3 className="home-content__text-block__title">A little about me...</h3>
            <p className="home-content__text-block__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
            <img className="home-content__image" src={CodingIcon} alt="coding-logo"/>
    </div>
);