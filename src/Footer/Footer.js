import React, { Component } from 'react';
import { isNullOrUndefined } from 'util';
import SocialMediaLogo from '../social-media/SocialMediaLogo';
import './Footer.css';

class Footer extends Component {

    constructor(props){
        super(props);
        this.renderLogos = this.renderLogos.bind(this);
    }

    renderLogo(componentName, url){
        return(
            <div className='FooterLogo'>
                <a href={url}>
                    <SocialMediaLogo logo={componentName} />
                </a>
            </div>
        );
    }

    renderLogos(){
        this.logos = [];
        if(!isNullOrUndefined(this.props.email)){
            this.logos.push(this.renderLogo('email', 'mailto:' + this.props.email));
        }
        if(!isNullOrUndefined(this.props.github)){
            this.logos.push(this.renderLogo('github', this.props.github));
        }
        if(!isNullOrUndefined(this.props.linkedin)){
            this.logos.push(this.renderLogo('linkedin', this.props.linkedin));
        }
    }

    render(){
        this.renderLogos();
        console.log(this.props.email);
        return(
            <div className='Footer'>
                {this.logos}
            </div>
        );
    }
}

export default Footer;