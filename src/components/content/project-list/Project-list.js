import React from 'react';
import ProjectItem from './../project-item/project-item';
import PrevProject from './../../../assets/imgs/project-arrow-left.png';
import PrevProjectHover from './../../../assets/imgs/project-arrow-left-inverted.png'
import NextProject from './../../../assets/imgs/project-arrow-right.png';
import NextProjectHover from './../../../assets/imgs/project-arrow-right-inverted.png';


export default class ProjectList extends React.Component {    

    render() {
        return (
            <div id="projects-content" className="projects-content">
                <div className="projects-content__featured">
                    <div className="projects-content__featured__title-wrapper">
                        <h2 className="projects-content__featured__title-highlight">FEATURED</h2>
                        <h2 className="projects-content__featured__title">PROJECTS</h2>
                    </div>
                    <div className="projects-content__featured__projects-wrapper">
                        <ProjectItem />
                        <ProjectItem />
                        <ProjectItem />
                    </div>
                </div>
                <div className="projects-content__heap">
                    <div className="projects-content__heap__title-wrapper">
                        <h2 className="projects-content__heap__title">THE PROJECT</h2>
                        <h2 className="projects-content__heap__title-highlight">HEAP...</h2>
                    </div>
                    <form className="projects-content__heap__search-form">
                            <input className="projects-content__heap__search-bar" placeholder="Search here"/>
                        </form>
                    <div className="projects-content__heap__projects-wrapper">
                        <img 
                            id="prev-project" 
                            className="projects-content__heap__project-button" 
                            src={PrevProject}
                            onMouseOver={this.props.handleIconHover} 
                            onMouseLeave={this.props.handleIconHoverOff}
                        />
                        <ProjectItem />
                        <ProjectItem />
                        <ProjectItem />
                        <ProjectItem />
                        <img 
                            id="next-project" 
                            className="projects-content__heap__project-button" 
                            src={NextProject}
                            onMouseOver={this.props.handleIconHover} 
                            onMouseLeave={this.props.handleIconHoverOff}
                        />
                    </div>
                </div>
            </div>
        );
    }
}