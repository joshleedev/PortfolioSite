import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';


//SVG imports
import SiteLogo from './../../../assets/imgs/site-logo.png';
import OpenMenuIcon from './../../../assets/imgs/SVG/menu-icons/menu.svg';
import CloseMenuIcon from './../../../assets/imgs/SVG/menu-icons/cross.svg';

export default class MobileMenu extends React.Component {
    constructor(props){
        super();
    }

    handleOpenMenu() {
        document.getElementsByClassName("menu-open")[0].style.display = "none";
        document.getElementsByClassName("menu-close")[0].style.display = "block";
        document.getElementsByClassName("menu-list__wrapper")[0].style.display = "block";
    }

    handleCloseMenu(){
        document.getElementsByClassName("menu-close")[0].style.display = "none";
        document.getElementsByClassName("menu-open")[0].style.display = "flex";
        document.getElementsByClassName("menu-list__wrapper")[0].style.display = "none";
    }

    render(){
        return(
            <div className="mobile-menu__wrapper" data-aos="fade" data-aos-duraction="1200" data-aos-delay="1000"> 
                <a className="menu-open" onClick={this.handleOpenMenu}>
                    <img
                        className="menu-icon"
                        src={OpenMenuIcon}
                    />
                </a>
                <a className="menu-close" onClick={this.handleCloseMenu}>
                    <img 
                        className="menu-icon"
                        src={CloseMenuIcon}
                    />
                </a>
                <div className="menu-list__wrapper">
                    <div className="menu-list">
                    <NavLink className="menu__site-icon" to="#landing-content" onClick={this.handleCloseMenu}><img className="menu__site-icon" src={SiteLogo}/></NavLink>
                        <div className="menu-option">
                            <NavLink className="menu-link" to="#home-content" onClick={this.handleCloseMenu}>ABOUT</NavLink>
                        </div>
                        <div className="menu-option">
                            <NavLink className="menu-link" to="#projects-content" onClick={this.handleCloseMenu}>PROJECTS</NavLink>
                        </div>
                        <div className="menu-option">
                            <NavLink className="menu-link" to="#cv-content" onClick={this.handleCloseMenu}>CV</NavLink>
                        </div>
                        <div className="menu-option">
                            <NavLink className="menu-link" to="#contact-content" onClick={this.handleCloseMenu}>CONTACT</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 