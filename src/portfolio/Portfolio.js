import React, { Component } from 'react';
import './Portfolio.css';
import { isNullOrUndefined } from '../../node_modules/util';
import SocialMediaLogo from '../social-media/SocialMediaLogo';

class Project extends Component {

    renderDesc(){
        if(isNullOrUndefined(this.props.desc)) return null;
        return(
            <div className='ProjectDesc'>
                {this.props.desc}
            </div>
        );
    }

    renderBulletPoint(text){
        return(
            <li className='ProjectBulletPoint'>
                {text}
            </li>
        );
    }

    renderBulletPoints(){
        if(isNullOrUndefined(this.props.bulletPoints)) return null;
        return(
            <ul className='ProjectPoints'>
                {this.props.bulletPoints.map((point, index) => {
                    return this.renderBulletPoint(point);
                })}
            </ul>
        );
    }

    getLogoId(){
        return 'GithubLogo '+this.props.title;
    }

    componentDidMount(){
        if(isNullOrUndefined(this.props.url)){
            document.getElementById(this.getLogoId()).style.visibility = 'hidden';
        }
    }

    render(){
        return(
            <div className='Project' key={this.props.key}>
                <div className='GithubLogo' id={this.getLogoId()} >
                    <a href={this.props.url} >
                        <SocialMediaLogo logo='github' />
                    </a>
                </div>
                <div className='ProjectBody'>
                    <div className='ProjectTitle'>
                        {this.props.title}
                    </div>
                    {this.renderDesc()}
                    {this.renderBulletPoints()}
                </div>
            </div>
        );
    }
}

class Projects extends Component {

    constructor(props){
        super(props);
        this.state = {
            projectsData: this.props.projects,
            projects: [],
            currentProject: 0
        }
        this.swipeLeft = this.swipeLeft.bind(this);
        this.swipeRight = this.swipeRight.bind(this);
        this.bindMouseActivity();
    }

    renderProject(projectData){
        return(
            <Project title={projectData.title}
                        desc={projectData.desc}
                        bulletPoints={projectData.bulletPoints}
                        url={projectData.url}
                        key={projectData.title}
                    />
        );
    }

    renderProjects(){
        var p = [];
        for(let project of this.state.projectsData){
            p.push(this.renderProject(project));
        }
        return p;
    }

    showButton(buttonName){
        document.getElementById(buttonName).style.visibility = 'visible';
    }

    hideButton(buttonName){
        document.getElementById(buttonName).style.visibility = 'hidden';
    }

    swipeLeft(event){
        let nextProject = this.state.currentProject;
        nextProject--;
        if(nextProject < 0) return;
        if(nextProject === 0) this.hideButton('leftButton');
        if(this.state.currentProject === (this.state.projectsData.length - 1)) this.showButton('rightButton');
        this.setState({
            currentProject: nextProject
        });
    }

    swipeRight(event){
        let nextProject = this.state.currentProject;
        nextProject++;
        if(nextProject >= this.state.projectsData.length) return;
        if(nextProject === (this.state.projectsData.length - 1)) this.hideButton('rightButton');
        if(nextProject === 1) this.showButton('leftButton');
        this.setState({
            currentProject: nextProject
        });
    }

    mouseEnter(element){
        element.style.color = 'white';
    }

    mouseLeave(element){
        element.style.color = 'gray';
    }

    leftButtonMouseEnter(){
        let element = document.getElementById('leftButton');
        this.mouseEnter(element);
    }

    leftButtonMouseLeave(){
        let element = document.getElementById('leftButton');
        this.mouseLeave(element);
    }

    rightButtonMouseEnter(){
        let element = document.getElementById('rightButton');
        this.mouseEnter(element);
    }

    rightButtonMouseLeave(){
        let element = document.getElementById('rightButton');
        this.mouseLeave(element);
    }

    bindMouseActivity(){
        this.leftButtonMouseEnter = this.leftButtonMouseEnter.bind(this);
        this.leftButtonMouseLeave = this.leftButtonMouseLeave.bind(this);
        this.rightButtonMouseEnter = this.rightButtonMouseEnter.bind(this);
        this.rightButtonMouseLeave = this.rightButtonMouseLeave.bind(this);
    }

    registerMouseActivity(){
        let leftButton = document.getElementById('leftButton');
        leftButton.onmouseenter = this.leftButtonMouseEnter;
        leftButton.onmouseleave = this.leftButtonMouseLeave;
        let rightButton = document.getElementById('rightButton');
        rightButton.onmouseenter = this.rightButtonMouseEnter;
        rightButton.onmouseleave = this.rightButtonMouseLeave;
    }

    componentDidMount(){
        this.registerMouseActivity();
    }

    render(){
        var p = this.renderProjects();
        return(
            <div className='Projects'>
                <button className='leftButton' id='leftButton' onClick={this.swipeLeft}>{'<'}</button>
                {p[this.state.currentProject]}
                <button className='rightButton' id='rightButton' onClick={this.swipeRight}>{'>'}</button>
            </div>
        );
    }
}

class Portfolio extends Component {
    render(){
        let projects = this.props.projects;
        return(
            <div className='Portfolio'>
                <div className='PortfolioTitle'>
                    {'Portfolio'}
                </div>
                <div className='PortfolioContent'>
                    <Projects projects={projects} />
                </div>
            </div>
        );
    }
}

export default Portfolio;