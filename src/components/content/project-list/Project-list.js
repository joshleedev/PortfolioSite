import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ProjectItem from './../project-item/project-item';

import PrevProject from './../../../assets/imgs/project-arrow-left.png';
import PrevProjectHover from './../../../assets/imgs/project-arrow-left-inverted.png'
import NextProject from './../../../assets/imgs/project-arrow-right.png';
import NextProjectHover from './../../../assets/imgs/project-arrow-right-inverted.png';

//test imgs
import StockImage from './../../../assets/temp/stock/stock-2.jpeg';


export default class ProjectList extends React.Component {    

    
    render() {

        const slides = [
            (<img key={1} className="carousel_img" src={StockImage} />),
            (<img key={2} className="carousel_img" src={StockImage} />),
            (<img key={3} className="carousel_img" src={StockImage} />),
        ];

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
                    <Carousel
                        arrows
                        slides={slides}
                    />  
                </div>
            </div>
        );
    }
}