import React, { Component } from 'react';
import SocialMediaLogo from './SocialMediaLogo';
import './SocialMediaInfo.css';

class SocialMediaInfo extends Component {

    renderLogos = () => {
        let output = [];
        if(this.props.email) output.push(
            <div className='SMILogo'>
                <a href={'mailto:'+this.props.email}><SocialMediaLogo logo='email' /></a>
            </div>
        );
        if(this.props.github) output.push(
            <div className='SMILogo'>
                <a href={this.props.github}><SocialMediaLogo logo='github' /></a>
            </div>
        );
        if(this.props.linkedin) output.push(
            <div className='SMILogo'>
            <a href={this.props.linkedin}><SocialMediaLogo logo='linkedin' /></a>
            </div>
        );
        return output;
    }

    render(){
        let logos = this.renderLogos();
        return(
            <div className='SocialMediaInfo'>
                {logos}
            </div>
        );
    }
}

export default SocialMediaInfo;