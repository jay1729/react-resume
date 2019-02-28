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

class Portfolio extends Component {
    render(){
        let projects = this.props.projects;
        return(
            <div className='Portfolio'>
                <div className='PortfolioTitle'>
                    {'Portfolio'}
                </div>
                <div className='PortfolioContent'>
                    <Project title={projects[0].title}
                        desc={projects[0].desc}
                        bulletPoints={projects[0].bulletPoints}
                    />
                </div>
            </div>
        );
    }
}

export default Portfolio;