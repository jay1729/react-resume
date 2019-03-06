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
        this.projects = props.projects;
        this.projects = [this.projects[this.projects.length-1], ...this.projects, this.projects[0]];
        this.currentProject = 1;
        this.gotoNextProjectSlow = this.gotoNextProjectSlow.bind(this);
        this.autoScroll = true;
        this.autoScrollToNextProject = this.autoScrollToNextProject.bind(this);
        this.transitionListener = null;
        this.changeProjectQuick = this.changeProjectQuick.bind(this);
        this.checkTransition = this.checkTransition.bind(this);
        this.registerGotoFirstAfterTransition = this.registerGotoFirstAfterTransition.bind(this);
    }

    renderProject(projectData){
        return <Project key={projectData.title}
                    title={projectData.title}
                    url={projectData.url}
                    desc={projectData.desc}
                    bulletPoints={projectData.bulletPoints} />;
    }

    renderProjects(){
        var output = [];
        for(let project of this.projects){
            output.push(this.renderProject(project));
        }
        return output;
    }

    stopAutoScroll(){
        this.autoScroll = false;
    }

    translate(){
        document.getElementById('Projects').style.transform = 'translate(calc('+this.currentProject+'*-100%))';
    }

    checkTransition(){
        if(this.currentProject === (this.projects.length-1)) this.changeProjectQuick(1);
        else if(this.currentProject === 0) this.changeProjectQuick(this.projects.length-2);
    }

    registerGotoFirstAfterTransition(){
        document.getElementById('Projects').addEventListener('transitionend', this.checkTransition);
    }

    changeProjectQuick(newIndex){
        this.currentProject = newIndex;
        document.getElementById('Projects').style.transition = 'unset';
        this.translate();
    }

    changeProjectSlow(newIndex){
        this.currentProject = newIndex;
        document.getElementById('Projects').style.transition = 'transform .5s ease-out';
        this.translate();
    }

    gotoNextProjectSlow(){
        this.currentProject += 1;
        document.getElementById('Projects').style.transition = 'transform .5s ease-out';
        this.translate();
    }

    autoScrollToNextProject(){
        if(this.autoScroll) this.gotoNextProjectSlow();
    }

    componentDidMount(){
        this.changeProjectQuick(this.currentProject);
        setInterval(this.autoScrollToNextProject, 5000);
        this.registerGotoFirstAfterTransition();
    }

    render(){
        let projects = this.renderProjects();
        return(
            <div className='Projects' id='Projects'>
                {projects}
            </div>
        );
    }
}

class Portfolio extends Component {
    render(){
        let projects = this.props.projects;
        return(
            <div className='Portfolio' id='Portfolio' >
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