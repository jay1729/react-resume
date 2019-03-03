import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render(){
        return(
            <div className='About' id='About' >
                <h2 align='left' className='AboutTitle'>
                    {'About Me'}
                </h2>
                <div className='AboutDesc'>
                    <p align='left' className='DescPara'>{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

export default About;