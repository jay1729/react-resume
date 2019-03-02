import React, { Component } from 'react';
import './App.css';
import Work from './work/Work';
import resume from './resume';
import Education from './education/Education';
import Skills from './skills/Skills';
import Portfolio from './portfolio/Portfolio';
import Footer from './Footer/Footer';
import About from './about/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Name" >
            {resume.name}
          </h1>
        </header>
        <About desc={resume.about.desc} />
        <Work experience={resume.work}/>
        <div className='Gap' />
        <Education education={resume.education} />
        <div className='Gap' />
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
