import React, { Component } from 'react';
import './Portfolio.css';
import { isNullOrUndefined } from '../../node_modules/util';

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
            <div className='BulletPoint'>
                <span>&bull;&nbsp;&nbsp;</span>
                {text}
            </div>
        );
    }

    renderBulletPoints(){
        if(isNullOrUndefined(this.props.bulletPoints)) return null;
        return(
            <div className='ProjectPoints'>
                {this.props.bulletPoints.map((point, index) => {
                    return this.renderBulletPoint(point);
                })}
            </div>
        );
    }

    render(){
        return(
            <div className='Project'>
                <div className='ProjectTitle'>
                    {this.props.title}
                </div>
                {this.renderDesc()}
                {this.renderBulletPoints()}
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
    }

    renderProject(projectData){
        return(
            <Project title={projectData.title}
                        desc={projectData.desc}
                        bulletPoints={projectData.bulletPoints}
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