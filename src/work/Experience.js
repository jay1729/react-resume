import React, { Component } from 'react';
import './Experience.css';
import { isNullOrUndefined } from 'util';

class BasicInfo extends Component {
    render(){
        let date = this.props.from+'-'+this.props.to;
        return(
            <div className="BasicInfoExp">
                <div className='BITitle' >{this.props.title}</div>
                <div className='ExpBullet'>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</div>
                <div className='BILocation' >{this.props.location}</div>
                <div className='ExpBullet'>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</div>
                <div className='BIDate' >{date}</div>
            </div>
        );
    }
}

class Description extends Component {

    renderEmpty(){
        return(
            <div className='EmptyBlock'/>
        );
    }

    renderBlock(desc){
        return(
            <div className='Block'>
                {desc[0]}
            </div>
        );
    }

    getBulletPoint(s){
        return(
            <li className='BulletPointWork'>
                <p className='BulletPointPara'>{s}</p>
            </li>
        );
    }

    renderList(desc){
        var output = [];
        for(let d of desc) output.push(this.getBulletPoint(d));
        return(
            <ul className='ul'>
                {output}
            </ul>
        );
    }

    render(){
        let desc = this.props.description;
        console.log(desc);
        if(isNullOrUndefined(desc) || (desc.length === 0)) return this.renderEmpty();
        if(desc.length === 1) return this.renderBlock(desc);
        return this.renderList(desc);
    }
}

class Experience extends Component {
    render(){
        return(
            <div className='Experience'>
                <div className='companyName'>
                    {this.props.data.company}
                </div>
                <BasicInfo className='BasicInfo'
                    title={this.props.data.title} 
                    location={this.props.data.location}
                    from={this.props.data.from}
                    to={this.props.data.to} />
                <Description description={this.props.data.description} className='Description'/>
            </div>
        );
    }
}

export default Experience;