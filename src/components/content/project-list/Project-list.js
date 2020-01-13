import React from 'react';

//temp stock img imports
import Stock1 from './../../../assets/temp/stock/stock-1.jpeg';
import Stock2 from './../../../assets/temp/stock/stock-2.jpeg';
import Stock3 from './../../../assets/temp/stock/stock-3.jpeg';
import Stock4 from './../../../assets/temp/stock/stock-4.jpeg';
import Stock5 from './../../../assets/temp/stock/stock-5.jpg';
import Stock6 from './../../../assets/temp/stock/stock-6.jpeg';
import Stock7 from './../../../assets/temp/stock/stock-7.jpg';

export default () => (
    <div className="projects-content">
        <div className="projects-content__featured">
            <h2 className="projects-content__featured__title">Featured Projects</h2>
            <div className="projects-content__featured__projects-wrapper">
                <img className="projects-content__featured__project" src={Stock1}/>
                <img className="projects-content__featured__project__spotlight" src={Stock6}/>
                <img className="projects-content__featured__project" src={Stock3}/>
            </div>
        </div>
        <div className="projects-content__heap">
            <div className="projects-content__heap__title-wrapper">
                <h2 className="projects-content__heap__title">The projects heap...</h2>
                <form className="projects-content__heap__search-form">
                    <input className="projects-content__heap__search-bar"/>
                    <button className="projects-content__heap__search-button">Go</button>
                </form>
            </div>
            <div className="projects-content__heap__projects-wrapper">
                <img className="projects-content__heap__project" src={Stock4}/>
                <img className="projects-content__heap__project" src={Stock5}/>
                <img className="projects-content__heap__project" src={Stock2}/>
                <img className="projects-content__heap__project" src={Stock7}/>
            </div>
        </div>
    </div>
);