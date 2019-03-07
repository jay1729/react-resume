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
        this.partialScroll = 0.0;
        this.gotoNextProjectSlow = this.gotoNextProjectSlow.bind(this);
        this.autoScroll = true;
        this.autoScrollToNextProject = this.autoScrollToNextProject.bind(this);
        this.transitionListener = null;
        this.changeProjectQuick = this.changeProjectQuick.bind(this);
        this.checkTransition = this.checkTransition.bind(this);
        this.registerTransitionCheck = this.registerTransitionCheck.bind(this);
        this.stopAutoScroll = this.stopAutoScroll.bind(this);
        this.resumeAutoScroll = this.resumeAutoScroll.bind(this);
        this.touchstart = this.touchstart.bind(this);
        this.touchmove = this.touchmove.bind(this);
        this.touchend = this.touchend.bind(this);
        this.computeTranslation = this.computeTranslation.bind(this);
        this.touchevent = {
            start: -100,
            end: -100
        }
    }

    renderProject(projectData, index){
        return <Project key={index}
                    title={projectData.title}
                    url={projectData.url}
                    desc={projectData.desc}
                    bulletPoints={projectData.bulletPoints} />;
    }

    renderProjects(){
        var output = [];
        this.projects.map((v, index) => {
            output.push(this.renderProject(v, index));
        });
        return output;
    }

    stopAutoScroll(){
        this.autoScroll = false;
    }

    resumeAutoScroll(){
        this.autoScroll = true;
    }

    translate(){
        console.log('translate(calc('+(this.currentProject+this.partialScroll)+'*-100%))');
        document.getElementById('Projects').style.transform = 'translate(calc('+(this.currentProject+this.partialScroll)+'*-100%))';
    }

    translateQuick(){
        document.getElementById('Projects').style.transition = 'unset';
        this.translate();
    }

    translateSlow(){
        document.getElementById('Projects').style.transition = 'transform .5s ease-out';
        this.translate();
    }

    checkTransition(){
        if(this.currentProject === (this.projects.length-1)) this.changeProjectQuick(1);
        else if(this.currentProject === 0) this.changeProjectQuick(this.projects.length-2);
    }

    registerTransitionCheck(){
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
        this.currentProject = Math.round(this.currentProject) + 1;
        if(this.currentProject >= this.projects.length) this.currentProject = 1;
        document.getElementById('Projects').style.transition = 'transform .5s ease-out';
        this.translate();
    }

    autoScrollToNextProject(){
        if(this.autoScroll) this.gotoNextProjectSlow();
    }

    touchstart(event){
        event.preventDefault();
        this.stopAutoScroll();
        this.touchevent.start = event.changedTouches[0].clientX;
        console.log(this.touchevent);
    }

    touchend(event){
        event.preventDefault();
        this.resumeAutoScroll();
        this.touchevent.end = event.changedTouches[0].clientX;
        console.log(this.touchevent);
        this.touchevent = {
            start: null,
            end: null
        }
        this.currentProject += Math.round(this.partialScroll);
        this.partialScroll = 0.0;
        this.translateSlow();
    }

    computeTranslation(){
        let delta = this.touchevent.start - this.touchevent.end;
        this.partialScroll = delta / window.screen.width;
        this.translateQuick();
    }

    touchmove(event){
        event.preventDefault();
        this.touchevent.end = event.changedTouches[0].clientX;
        this.computeTranslation();
    }

    registerTouchEvents(){
        document.getElementById('Projects').addEventListener('touchstart', this.touchstart);
        document.getElementById('Projects').addEventListener('touchmove', this.touchmove);
        document.getElementById('Projects').addEventListener('touchend', this.touchend);
    }

    componentDidMount(){
        //console.log("WIDTH "+window.screen.width);
        this.changeProjectQuick(this.currentProject);
        setInterval(this.autoScrollToNextProject, 5000);
        this.registerTransitionCheck();
        this.registerTouchEvents();
    }

    componentDidUpdate(){
        if(this.props.swipe != 0){
            this.currentProject += this.props.swipe;
            this.translateSlow();
        }
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

    constructor(props){
        super(props);
        this.state = {
            swipeAction: 0
        }
    }

    leftSwipe = () => {
        this.setState({
            swipeAction: -1
        });
    }

    rightSwipe = () => {
        this.setState({
            swipeAction: 1
        });
    }

    componentDidUpdate(){
        if(this.state.swipeAction != 0){
            this.setState({
                swipeAction: 0
            });
        }
    }

    render(){
        let projects = this.props.projects;
        return(
            <div className='Portfolio' id='Portfolio' >
                <div className='PortfolioTitle'>
                    {'Portfolio'}
                </div>
                <button className='leftButton' onClick={this.leftSwipe}>{'<'}</button>
                <div className='PortfolioContent'>
                    <Projects projects={projects} swipe={this.state.swipeAction} />
                </div>
                <button className='rightButton' onClick={this.rightSwipe}>{'>'}</button>
                <div className='blockingScreen'/>
            </div>
        );
    }
}

export default Portfolio;