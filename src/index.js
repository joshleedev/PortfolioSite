import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//Component Imports
import './index.scss';
import NotFound from './components/content/not-found/Not-found';
import Header from './components/layout/header/Header';
import Landing from './components/content/landing/Landing';
import Home from './components/content/home/Home';
import Blog from './components/content/blog/Blog';
import ProjectList from './components/content/project-list/Project-list';
import Cv from './components/content/cv/Cv';
import Contact from './components/content/contact/Contact';
import Footer from './components/layout/footer/Footer';

//Icon imports
import GithubIcon from './assets/social-icons/github.png';
import GithubHoverIcon from './assets/social-icons/github-yellow.png';
import LinkedInIcon from './assets/social-icons/linked-in.png';
import LinkedInHoverIcon from './assets/social-icons/linked-in-yellow.png';
import EmailIcon from './assets/social-icons/email.png';
import EmailHoverIcon from './assets/social-icons/email-yellow.png';
import UpButton from './assets/imgs/up-arrow-y.png';
import UpButtonHover from './assets/imgs/up-arrow.png';

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

let handleSocialIconHover = (e) => {
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
    else e.currentTarget.src = UpButtonHover;
}

let handleSocialIconHoverOff = (e) => {
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
    else e.currentTarget.src = UpButton;
}

window.onscroll = () => {
    console.log(headerOffSet);
    handleStickyHeader(headerOffSet);
};

const routes = (
    <BrowserRouter>
        <div>
            <Landing/>
            <Header 
                handleSocialIconHover={handleSocialIconHover} 
                handleSocialIconHoverOff={handleSocialIconHoverOff}
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
                        component={ProjectList} 
                        exact={true}
                    />
                    <Route
                        path="/" 
                        component={Cv} 
                        exact={true}
                    />
                    <Route
                        path="/" 
                        component={Contact} 
                        exact={true}
                    />
                    <Route
                        path="/" 
                        render={
                            (props) => 
                                <Footer 
                                    handleSocialIconHover={handleSocialIconHover} 
                                    handleSocialIconHoverOff={handleSocialIconHoverOff}
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