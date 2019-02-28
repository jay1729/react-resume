import React, { Component } from 'react';
import './App.css';
import Work from './work/Work';
import resume from './resume';
import Education from './education/Education';
import Skills from './skills/Skills';
import Portfolio from './portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Name" >
            Jayantha G V
          </h1>
        </header>
        <Work experience={resume.work}/>
        <div className='Gap' />
        <Education education={resume.education} />
        <div className='Gap' />
        <Skills languages={resume.skills.languages} tech={resume.skills.tech} />
        <div className='Gap' />
        <Portfolio projects={resume.portfolio} />
        <div className='Gap' />
      </div>
    );
  }
}

export default App;
