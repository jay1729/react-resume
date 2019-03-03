import React, { Component } from 'react';
import skillOptions from './Options';
import { isNullOrUndefined } from '../../node_modules/util';
import './Skills.css';

class Skill extends Component {
    render(){
        let config = skillOptions[this.props.title];
        let name = null;
        if(!isNullOrUndefined(config) && config.displayName) name = this.props.title;
        let imgsrc = null;
        if(!isNullOrUndefined(config)) imgsrc = config.url;
        return(
            <div className='Skill'>
                <img src={imgsrc} />
                <div className='SkillName' >
                    {name}
                </div>
            </div>
        );
    }
}

class SkillGroup extends Component {

    renderSkill(title){
        return <Skill title={title} />;
    }

    renderSkills(){
        this.skills = [];
        for(let skill of this.props.skills){
            this.skills.push(this.renderSkill(skill));
        }
    }

    render(){
        this.renderSkills();
        return(
            <div className='SkillGroup'>
                <div className='SkillGroupTitle'>
                    {this.props.title}
                </div>
                <div className='SkillRow'>
                    {this.skills}
                </div>
            </div>
        );
    }
}

class Skills extends Component {
    render(){
        return(
            <div className='Skills' id='Skills'>
                <div className='SkillsTitle'>
                    {'Skills'}
                </div>
                <div className='SkillList'>
                    <SkillGroup title='Programming Languages' skills={this.props.languages} />
                    <SkillGroup title='Technologies/Frameworks' skills={this.props.tech} />
                </div>
            </div>
        );
    }
}

export default Skills;