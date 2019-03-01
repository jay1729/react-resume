import React, { Component } from 'react';
import './SocialMediaLogo.css';
import github from './svg/github.svg';
import linkedin from './svg/linkedin.svg';
import envelope from './svg/envelope.svg';

const svg = {
    github: github,
    linkedin: linkedin,
    email: envelope
}

class SocialMediaLogo extends Component {

    constructor(props){
        super(props);
        this.getSVGLocation = this.getSVGLocation.bind(this);
    }

    getSVGLocation(){
        return svg[this.props.logo];
    }

    render(){
        let svg = this.getSVGLocation();
        return(
            <div className='SocialMediaLogo'>
                <img src={svg} className='image' />
            </div>
        );
    }
}

export default SocialMediaLogo;