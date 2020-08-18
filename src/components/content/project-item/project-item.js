import React from 'react';
import Modal from 'react-responsive-modal';
import GitHubIcon from './../../../assets/social-icons/github.png';


export default class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            open: false
        }
    };

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
                <img className="project__img" src={this.props.image}/>
                <div className="project-overlay">
                    {this.state.isHovered && <h3 className="project-title">{this.props.title}</h3>}
                    {this.state.isHovered && <p className="project-tech">{this.props.techStack}</p>}
                    {this.state.isHovered && <button className="project-view" onClick={this.onOpenModal}>MORE</button>}
                </div>
                <Modal open={open} onClose={this.onCloseModal} center classNames={{ modal: 'modal-wrapper' }} closeIconId="test">
                    <div className="modal-content">
                        <div className="modal-img-wrapper">
                            <img className="modal-img" src={this.props.image}/>
                        </div>
                        <div className="modal-title-wrapper">
                            <h2 className="modal-title">{this.props.title}</h2>
                            <p className="modal-stack">{this.props.techStack}</p>
                        </div>
                        <div className="modal-body-wrapper">
                            <p className="body-section-one">
                                {this.props.description}
                            </p>
                            <p className="body-section-two">
                                {this.props.descriptionTwo}
                            </p>
                        </div>
                        <div className="github-wrapper">
                            <a className="github-icon" href={this.props.githubLink} target="_blank">
                                <img className="github-icon" src={GitHubIcon}/>
                            </a>
                            <a className="github-link" href={this.props.githubLink} target="_blank">
                                <h3 className="github-link">{this.props.githubLink}</h3>
                            </a>  
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}