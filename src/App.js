import React, { Component } from 'react';
import './App.css';
import Work from './work/Work';
import resume from './resume';
import Education from './education/Education';
import Skills from './skills/Skills';
import Portfolio from './portfolio/Portfolio';
import Footer from './Footer/Footer';
import About from './about/About';

class NavBar extends Component {

  renderNavButton(name){
    return(
      <div className='navbutton'>
        {name}
      </div>
    );
  }

  render(){
    return(
      <nav id='navbar' >
        <ul id='nav' className='nav' >
          <li className='navitem'><a className='navlink' href='#Home'>{this.renderNavButton('Home')}</a></li>
          <li className='navitem'><a className='navlink' href='#About'>{this.renderNavButton('About')}</a></li>
          <li className='navitem'><a className='navlink' href='#Work'>{this.renderNavButton('Work')}</a></li>
          <li className='navitem'><a className='navlink' href='#Education'>{this.renderNavButton('Education')}</a></li>
          <li className='navitem'><a className='navlink' href='#Skills'>{this.renderNavButton('Skills')}</a></li>
          <li className='navitem'><a className='navlink' href='#Portfolio'>{this.renderNavButton('Portfolio')}</a></li>
          <li className='navitem'><a className='navlink' href='#Contact'>{this.renderNavButton('Contact')}</a></li>
        </ul>
      </nav>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <h1 className="Name" >
            {resume.name}
          </h1>
        </header>
        <About desc={resume.about.desc} />
        <Work experience={resume.work}/>
        <Education education={resume.education} />
        <Skills languages={resume.skills.languages} tech={resume.skills.tech} />
        <div className='Gap' />
        <Portfolio projects={resume.portfolio} />
        <div className='Gap' />
        <Footer github={resume.github} email={resume.email} linkedin={resume.linkedin} />
      </div>
    );
  }
}

export default App;
