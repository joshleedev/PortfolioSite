import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';

//Icon Imports
import UpButton from './../../../assets/imgs/up-arrow.png';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="footer-content" className="footer-content">
                <NavLink className="reset-button" to="#home-content">
                    <img
                        id="return-top"
                        className="reset-img"
                        src={UpButton}
                        onMouseOver={this.props.handleIconHover} 
                        onMouseLeave={this.props.handleIconHoverOff} 
                    />
                </NavLink>
                <div className="footer-signature-wrapper">
                    <p className="footer-signature">JOSH LEE</p>
                    <p className="footer-date">&copy;2020</p>
                </div>
            </div>
        )
    }
};