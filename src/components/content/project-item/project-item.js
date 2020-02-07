import React from 'react';
import Modal from 'react-responsive-modal';

import GitHubIcon from './../../../assets/social-icons/github.png';
import NextImgButton from './../../../assets/imgs/project-arrow-right.png';
import PrevImgButton from './../../../assets/imgs/project-arrow-left.png';

import StockImg from './../../../assets/temp/stock/stock-1.jpeg';

export default class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            open: false
        }
    }  

    onOpenModal = () => {
        this.setState(({ open: true }));
    };
     
    onCloseModal = () => {
        this.setState({ open: false });
    };
    
    handleProjectHoverOn = () => {
        let isHovered = true;
        this.setState( () => ({ isHovered }));
    };

    handleProjectHoverOff = () => {
        let isHovered = false;
        this.setState(() => ({ isHovered }));
    };

    render () {
        const { open } = this.state;

        return (
            <div className="project-wrapper" onMouseOver={this.handleProjectHoverOn} onMouseLeave={this.handleProjectHoverOff}>
                <img className="project-img" src={StockImg}/>
                <div className="project-overlay">
                    {this.state.isHovered && <p className="project-title">PROJECT TITLE</p>}
                    {this.state.isHovered && <p className="project-tech">React, JS.</p>}
                    {this.state.isHovered && <button className="project-view" onClick={this.onOpenModal}>VIEW</button>}
                </div>
                <Modal open={open} onClose={this.onCloseModal} center classNames={{ modal: 'modal-wrapper' }} closeIconId="test">
                    <div className="modal-content">
                        <div className="modal-img-wrapper">
                            <img className="modal-img" src={StockImg}></img>
                            <div className="modal-img-buttons"> 
                                <img className="prev-img-button" src={PrevImgButton} />
                                <img className="next-img-button" src={NextImgButton} /> 
                            </div>
                        </div>
                        <div className="modal-title-wrapper">
                            <h2 className="modal-title">PROJECT TITLE</h2>
                            <p className="modal-stack">React, node, HTML, CSS</p>
                        </div>
                        <div className="modal-body-wrapper">
                            <p className="body-section-one">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fusce ac orci at ligula auctor mollis mattis vitae ipsum.
                                Ut ultricies, quam eleifend maximus mattis, 
                                est diam elementum lacus, at posuere mi mauris nec augue.
                            </p>
                            <p className="body-section-two">
                                Nullam non semper dui, sed iaculis sem. 
                                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                        </div>
                        <div className="github-wrapper">
                            <img className="github-icon" src={GitHubIcon} />
                            <h3 className="github-link">https://github.com/joshleedev/test</h3>
                        </div>
       
                    </div>
                </Modal>
            </div>
        );
    }
}