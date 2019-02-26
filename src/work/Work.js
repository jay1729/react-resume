import React, { Component } from 'react';
import './Work.css';
import Experience from './Experience';
import workConstants from './constants';

class Work extends Component {

    constructor(props){
        super(props);
        this.experience = props.experience;
        this.expComponents = [];
        this.generateExpComponents();
    }

    generateExpComponents(){
        for(let exp of this.experience){
            this.expComponents.push(<Experience data={exp} />);
        }
    }

    render(){
        return(
            <div className="Work">
                <div className="work-title">
                    {workConstants.name}
                </div>
                <div className="ExperienceList">
                    {this.expComponents}
                </div>
            </div>
        );
    }
}

export default Work;