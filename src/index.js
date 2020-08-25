import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

//Component Imports
import './index.scss';
import NotFound from './components/content/not-found/Not-found';
import Header from './components/layout/header/Header';
import Landing from './components/content/landing/Landing';
import Home from './components/content/home/Home';
import ProjectList from './components/content/project-list/Project-list';
import Cv from './components/content/cv/Cv';
import Contact from './components/content/contact/Contact';
import Footer from './components/layout/footer/Footer';

//Icon imports
import SiteIcon from './assets/imgs/site-logo.png';
import SiteHoverIcon from './assets/imgs/site-logo-inverted.png';
import GithubIcon from './assets/social-icons/github.png';
import GithubIconAlt from './assets/social-icons/github-yellow.png';
import GithubHoverIcon from './assets/social-icons/github-inverted-yellow.png';
import LinkedInIcon from './assets/social-icons/linked-in.png';
import LinkedInHoverIcon from './assets/social-icons/linked-in-inverted-yellow.png';
import EmailIcon from './assets/social-icons/email.png';
import EmailHoverIcon from './assets/social-icons/email-inverted-yellow.png';
import ReturnTopIcon from './assets/imgs/up-arrow.png';
import ReturnTopHoverIcon from './assets/imgs/up-arrow-inverted-yellow.png';
import PrevProjectIcon from './assets/imgs/project-arrow-left.png';
import PrevProjectHoverIcon from './assets/imgs/project-arrow-left-inverted.png'
import NextProjectIcon from './assets/imgs/project-arrow-right.png';
import NextProjectHoverIcon from './assets/imgs/project-arrow-right-inverted.png';

AOS.init();

let handleIconHover = (e) => {
    let icon = e.currentTarget.id;

    if(icon == "github-icon") {
        e.currentTarget.src = GithubHoverIcon;
    }
    else if(icon == "linkedin-icon") {
        e.currentTarget.src = LinkedInHoverIcon;
    }
    else if(icon == "email-icon") {
        e.currentTarget.src = EmailHoverIcon;
    }
    else if(icon == "return-top") {
        e.currentTarget.src = ReturnTopHoverIcon;
    }
    else if(icon == "prev-project") {
        e.currentTarget.src = PrevProjectHoverIcon;
    }
    else if(icon == "next-project") {
        e.currentTarget.src = NextProjectHoverIcon;
    }
    else if (icon == "header-logo") {
        e.currentTarget.src = SiteHoverIcon;
    }
    else if (icon == "featured-github-icon") {
        e.currentTarget.src = GithubHoverIcon;
    }
}

let handleIconHoverOff = (e) => {
    let icon = e.currentTarget.id;

    if(icon == "github-icon") {
        e.currentTarget.src = GithubIcon;
    }
    else if(icon == "linkedin-icon") {
        e.currentTarget.src = LinkedInIcon;
    }
    else if(icon == "email-icon") {
        e.currentTarget.src = EmailIcon;
    }
    else if(icon == "return-top") {
        e.currentTarget.src = ReturnTopIcon;
    }
    else if(icon == "prev-project") {
        e.currentTarget.src = PrevProjectIcon;
    }
    else if(icon == "next-project") {
        e.currentTarget.src = NextProjectIcon;
    }
    else if (icon == "header-logo") {
        e.currentTarget.src = SiteIcon;
    }
    else if (icon == "featured-github-icon") {
        e.currentTarget.src = GithubIconAlt;
    }
}

let headerOffSet;
let setHeaderOffSet = (value) => {
    headerOffSet = value;
}
let handleStickyHeader = (initialOffSet) => {
    let header = document.getElementById("header");
    let body = document.getElementById("body-content");
    if(window.pageYOffset >= initialOffSet+200) {
        header.classList.add("sticky");
        body.classList.add('sticky-body');
    } else {
        header.classList.remove("sticky");
        body.classList.remove('sticky-body');
    }
}

window.onscroll = () => {
    handleStickyHeader(headerOffSet);
};

const routes = (
    <BrowserRouter>
        <div>
            <Landing/>
            <Header 
                handleIconHover={handleIconHover} 
                handleIconHoverOff={handleIconHoverOff}
                setHeaderOffSet={setHeaderOffSet}
            />
            <Switch>
                <div id="body-content">
                    <Route
                        path="/" 
                        component={Home} 
                        exact={true}
                    />
                    <Route
                        path="/" 
                        render={
                            (props) => 
                                <ProjectList 
                                handleIconHover={handleIconHover} 
                                handleIconHoverOff={handleIconHoverOff}
                                />
                        }
                        exact={true}
                    />
                    <Route
                        path="/" 
                        component={Cv} 
                        exact={true}
                    />
                    <Route
                        path="/" 
                        render={
                            (props) => 
                                <Contact 
                                handleIconHover={handleIconHover} 
                                handleIconHoverOff={handleIconHoverOff}
                                />
                        } 
                        exact={true}
                    />
                    <Route
                        path="/" 
                        render={
                            (props) => 
                                <Footer 
                                handleIconHover={handleIconHover} 
                                handleIconHoverOff={handleIconHoverOff}
                                />
                        } 
                        exact={true}
                    />
                </div>
                     
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));