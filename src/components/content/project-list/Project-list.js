import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import ProjectItem from './../project-item/project-item';
import FeaturedProject from './../featured-project/Featured-project';
import ProjectData from './../../../assets/json/projects.json';

import PrevProject from './../../../assets/imgs/project-arrow-left.png';
import PrevProjectHover from './../../../assets/imgs/project-arrow-left-inverted.png'
import NextProject from './../../../assets/imgs/project-arrow-right.png';
import NextProjectHover from './../../../assets/imgs/project-arrow-right-inverted.png';

//test imgs
import StockImage from './../../../assets/temp/stock/stock-1.jpeg';

export default class ProjectList extends React.Component { 
    constructor(){
        super();
        this.state = {
            projectData: [],
            featuredProjects: [],
            projectList: [],
            searchValue: ""
        }
        this.serveProjectHeap = this.serveProjectHeap.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        let featuredProjects = [];
        let projectData = ProjectData.projects.map((project, key) => {
            let projectItem = 
                <ProjectItem
                    key={project.id}
                    title={project.title}
                    githubLink={project.githublink}
                    techStack={project.techstack.join('/')}
                    images={project.images}
                    description={project.description}
                    descriptionTwo={project.descriptionTwo}
                    src={StockImage}
                />
            if(project.featured == "true"){
                let featuredProject = 
                    <FeaturedProject
                        key={project.id}
                        title={project.title}
                        githubLink={project.githublink}
                        techStack={project.techstack.join('/')}
                        images={project.images}
                        description={project.description}
                        descriptionTwo={project.descriptionTwo}
                        src={StockImage}
                    />
                featuredProjects.push(featuredProject);
            }
            return projectItem;
        })
        this.setState({projectData});
        this.setState({featuredProjects});
        this.setState({projectList: projectData});
    }

    handleSearch(e){
        this.setState({searchValue: e.target.value}, this.serveProjectHeap)
    }

    serveProjectHeap(){
        const searchBorder = document.getElementById("search-bar");
        searchBorder.classList.remove('not-found');
        let projectList = [];
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
            projectList = this.state.projectData;
            searchBorder.classList.add('not-found');
        }
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
            <div id="projects-content" className="projects-content">
                <div className="projects-content__featured">
                    <div className="projects-content__featured__title-wrapper">
                        <h2 className="projects-content__featured__title-highlight">FEATURED</h2>
                        <h2 className="projects-content__featured__title">PROJECTS</h2>
                    </div>
                    <div className="projects-content__featured__projects-wrapper">
                        {
                            this.state.featuredProjects.map(project => {
                                return project;
                            })
                        }
                    </div>
                </div>
                <div className="projects-content__heap">
                    <div className="projects-content__heap__title-wrapper">
                        <h2 className="projects-content__heap__title">THE PROJECT</h2>
                        <h2 className="projects-content__heap__title-highlight">HEAP</h2>
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
                </div>
            </div>
        );
    }
}