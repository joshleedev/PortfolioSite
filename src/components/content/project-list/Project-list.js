import React from 'react';
import ProjectItem from './../project-item/project-item';
import PrevProjectButton from './../../../assets/imgs/project-arrow-left-y.png';
import NextProjectButton from './../../../assets/imgs/project-arrow-right-y.png';


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
                        <img className="projects-content__heap__project-button" src={PrevProjectButton}/>
                        <ProjectItem />
                        <ProjectItem />
                        <ProjectItem />
                        <ProjectItem />
                        <img className="projects-content__heap__project-button" src={NextProjectButton}/>
                    </div>
                </div>
            </div>
        );
    }
}