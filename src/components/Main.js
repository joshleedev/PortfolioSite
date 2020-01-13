import React from 'react';
import Header from './layout/header/Header';
//import Blog from './content/blog/Blog';
//import Contact from './content/contact/Contact';
//import Cv from './content/cv/Cv';
import Home from './content/home/Home';
//import ProjectList from './content/project-list';


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
            </div>
        )
    };
}