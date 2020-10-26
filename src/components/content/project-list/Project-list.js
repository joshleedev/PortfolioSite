import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import ProjectItem from '../project-item/project-item';
import FeaturedProject from '../featured-project/Featured-project';
import ProjectData from './../../../assets/json/projects.json';


export default class ProjectList extends React.Component { 
    constructor(){
        super();
        this.state = {
            projectData: [],
            featuredProject: [],
            projectList: [],
            isEmpty: false,
            searchValue: ""
        }
        this.serveProjectHeap = this.serveProjectHeap.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        let featuredProject = [];
        let projectData = ProjectData.projects.map((project, key) => {
            let projectItem = 
            <ProjectItem
                key={project.id}
                title={project.title}
                githubLink={project.githublink}
                techStack={project.techstack.join('/')}
                image={project.image}
                description={project.description} 
                descriptionTwo={project.descriptionTwo}
                handleIconHover={this.props.handleIconHover} 
                handleIconHoverOff={this.props.handleIconHoverOff}
            />
            if(project.featured === "true") {
                let tempfeaturedProject = 
                    <FeaturedProject
                        key={project.id}
                        title={project.title}
                        githubLink={project.githublink}
                        techStack={project.techstack.join('/')}
                        image={project.image}
                        description={project.description}
                        descriptionTwo={project.descriptionTwo}
                        handleIconHover={this.props.handleIconHover} 
                        handleIconHoverOff={this.props.handleIconHoverOff}
                    />
                featuredProject.push(tempfeaturedProject);
            }
            return projectItem;
        })
        this.setState({featuredProject});
        this.setState({projectData});
        this.setState({projectList: projectData});
    }
    
    handleSearch(e){
        this.setState({searchValue: e.target.value}, this.serveProjectHeap)
    }

    serveProjectHeap(){
        const searchBorder = document.getElementById("search-bar");
        searchBorder.classList.remove('not-found');
        let projectList = [];
        let isEmpty = false;
        let data = this.state.projectData;

        for(let j=0; j<data.length; j++) {
            if(data[j].props.title.includes(this.state.searchValue)) {
                projectList.push(data[j]);
            }
            else {
                let techStackArray = data[j].props.techStack.split("/");
                for(let i=0; i<techStackArray.length; i++) {
                    if(data[j].props.techStack.split("/")[i].includes(this.state.searchValue)) {
                        projectList.push(data[j]);
                    }
                }
            }          
        }
        if(projectList.includes(undefined) || projectList.length == 0) {
            searchBorder.classList.add('not-found');
            isEmpty = true;
        }
        this.setState({isEmpty});
        this.setState({projectList});
    }

    render() {
        const leftArrow = (
            <div className="arrow__wrapper">
                <p className="arrow__text">&lt;</p>
            </div>
        );
        
        const leftArrowDisabled = (
            <div className="arrow-disabled__wrapper">
                <p className="arrow-disabled__text">&lt;</p>
            </div>
        );

        const rightArrow = (
            <div className="arrow__wrapper">
                <p className="arrow__text">&gt;</p>
            </div>           
        );

        const rightArrowDisabled = (
            <div className="arrow-disabled__wrapper">
                <p className="arrow-disabled__text">&gt;</p>
            </div>
        );
        
        return (
            <div id="projects-content" className="projects-section">
                <div className="projects-content__featured" data-aos="fade-right" data-aos-duration="1200" data-aos-anchor-placement="top-center" data-aos-once="true">
                    <div className="projects-content__featured__title-wrapper">
                        <h2 className="projects-content__featured__title">FEATURED PROJECT</h2>
                    </div>
                    {this.state.featuredProject}
                </div>
                <div className="projects-content__heap" data-aos="fade-left" data-aos-duration="1200" data-aos-anchor-placement="top-center" data-aos-once="true">
                    <div className="projects-content__heap__title-wrapper">
                        <h2 className="projects-content__heap__title">THE PROJECT HEAP</h2>
                    </div>
                    <form className="projects-content__heap__search-form">
                        <input
                            id="search-bar"
                            className="projects-content__heap__search-bar" 
                            placeholder="Search here"
                            autoComplete="off"
                            value={this.state.value}
                            onChange={this.handleSearch}
                        />
                    </form>
                        {this.state.isEmpty ?
                            <div className="search-bar__feedback__wrapper"> 
                                <h3 className="search-bar__feedback">No matches found.</h3>
                            </div>
                        : 
                        <div className="carousel__wrapper">
                            <Carousel
                                slides={this.state.projectList}
                                slidesPerScroll="3"
                                slidesPerPage="3"
                                arrowLeft={leftArrow}
                                arrowLeftDisabled={leftArrowDisabled}
                                arrowRight={rightArrow}
                                arrowRightDisabled={rightArrowDisabled}
                                addArrowClickHandler
                            /> 
                        </div>
                    }
                </div>
            </div>
        );
    }
}