import React from 'react';

export default () => {
    <div className="projects-content">
        <div className="projects-content__featured">
            <h3 className="projects-content__featured__title">Featured Projects</h3>
            <div className="projects-content__featured__projects-wrapper">
                <img className="projects-content__featured__project"/>
                <img className="projects-content__featured__project"/>
                <img className="projects-content__featured__project"/>
            </div>
        </div>
        <div className="projects-content__heap">
            <div className="projects-content__heap__title-wrapper">
                <h3 className="projects-content__heap__title">The projects heap...</h3>
                <form className="projects-content__heap__search-form">
                    <input className="projects-content__heap__search-bar"/>
                    <button className="projects-content__heap__search-button">Go</button>
                </form>
            </div>
            <div className="projects-content__heap__projects-wrapper">
                <img className="projects-content__heap__project" />
                <img className="projects-content__heap__project" />
                <img className="projects-content__heap__project" />
                <img className="projects-content__heap__project" />
            </div>
        </div>
    </div>
};