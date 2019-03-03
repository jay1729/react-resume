import React, { Component } from 'react';
import './Education.css';

class BasicInfo extends Component {
    render(){
        return(
            <div className="BasicInfo">
                {this.props.degree}
                <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                {this.props.major}
                <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                {this.props.from}-{this.props.to}
            </div>
        );
    }
}

class Program extends Component {
    render(){
        return(
            <div className='Program'>
                <div className='UniversityName'>
                    {this.props.university}
                </div>
                <BasicInfo degree={this.props.degree}
                    major={this.props.major}
                    from={this.props.from}
                    to={this.props.to}
                    />
            </div>
        );
    }
}

class Education extends Component {

    renderProgram(data){
        return <Program university={data.university}
                    degree={data.degree}
                    major={data.major}
                    from={data.from}
                    to={data.to}/>;
    }

    renderProgramList(){
        this.education = [];
        for(let edu of this.props.education){
            this.education.push(this.renderProgram(edu));
        }
    }

    render(){
        this.renderProgramList();
        return(
            <div className='Education' id='Education'>
                <div className='EducationTitle'>
                    {'Education'}
                </div>
                <div className='ProgramList'>
                    {this.education}
                </div>
            </div>
        );
    }
}

export default Education;