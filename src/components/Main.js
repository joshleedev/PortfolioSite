import React from 'react';
import Header from './layout/header/Header';
import Home from './content/home/Home';
import Blog from './content/blog/Blog';
import ProjectList from './content/project-list/Project-list';
import Cv from './content/cv/Cv';
import Contact from './content/contact/Contact';


export default class Main extends React.Component {
    state = {
        selectedPage: 1
    };

    handleSelectPage = () => {
        
    };

    render() {
        return (
            <div>
                <Header/>
                <Home/>
                <Blog/>
                <ProjectList/>
                <Cv/>
                <Contact/>
            </div>
        )
    };
}