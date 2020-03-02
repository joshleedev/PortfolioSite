import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import ProjectItem from './../project-item/project-item';
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
            slides: []
        }
    }

    componentDidMount() {
        let projectData = ProjectData.projects.map((projects, key) => {
            return (
                <img
                    key={projects.id}
                    title={projects.title}
                    github-link={projects.githublink}
                    tech-stack={projects.techstack}
                    images={projects.images}
                    description={projects.description}
                    src={StockImage}
                />
            )
        })
        console.log(projectData);
        this.setState({projectData});
    }
    
    render() {
        console.log(this.projectData);
        
        const slides = [
            (<img key={1} className="carousel__img" src={StockImage}/>),
            (<img key={2} className="carousel__img" src={StockImage}/>),
            (<img key={3} className="carousel__img" src={StockImage}/>),
            (<img key={4} className="carousel__img" src={StockImage}/>),
            (<img key={5} className="carousel__img" src={StockImage}/>),
            (<img key={6} className="carousel__img" src={StockImage}/>),
        ];

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
                        <input 
                            className="projects-content__heap__search-bar" 
                            placeholder="Search here"
                        />
                    </form>
                    <div className="carousel__wrapper">
                        <Carousel
                            slides={this.projectData}
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