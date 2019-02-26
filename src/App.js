import React, { Component } from 'react';
import './App.css';
import Work from './work/Work';
import resume from './resume';
import Education from './education/Education';

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
        <div className='Gap1' />
        <Education education={resume.education} />
      </div>
    );
  }
}

export default App;
