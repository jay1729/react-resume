import React, { Component } from 'react';
import './App.css';
import Work from './work/Work';
import resume from './resume';
import Education from './education/Education';
import Skills from './skills/Skills';
import Portfolio from './portfolio/Portfolio';
import Footer from './Footer/Footer';
import About from './about/About';
import SocialMediaInfo from './social-media/SocialMediaInfo';

function NavPopup(props){
  return(
    <div className='navpopup' id='navpopup'>
      <ul className='navpopupul'>
        <li className='popupli'><a className='navlink' href='#Home' onClick={props.removeMenu}>{'Home'}</a></li>
        <li className='popupli'><a className='navlink' href='#About' onClick={props.removeMenu}>{'About'}</a></li>
        <li className='popupli'><a className='navlink' href='#Work' onClick={props.removeMenu}>{'Work'}</a></li>
        <li className='popupli'><a className='navlink' href='#Education' onClick={props.removeMenu}>{'Education'}</a></li>
        <li className='popupli'><a className='navlink' href='#Skills' onClick={props.removeMenu}>{'Skills'}</a></li>
        <li className='popupli'><a className='navlink' href='#Portfolio' onClick={props.removeMenu}>{'Portfolio'}</a></li>
        <li className='popupli'><a className='navlink' href='#Contact' onClick={props.removeMenu}>{'Contact'}</a></li>
      </ul>
    </div>
  );
}

class NavBar extends Component {

  renderNavButton(name){
    return(
      <div className='navbutton'>
        {name}
      </div>
    );
  }

  displayMobileMenu = () => {
    document.getElementById('navpopup').style.display = 'block';
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
          <button className='menu' id='menu' onFocus={this.displayMobileMenu}>
            <i className="fa fa-bars" id='menuIcon'/>
          </button>
        </ul>
      </nav>
    );
  }
}

class App extends Component {

  removeMobileMenu = () => {
    document.getElementById('navpopup').style.display = 'none';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <NavPopup removeMenu={this.removeMobileMenu}/>
          <div className="Name" >
            <div><h1 className='NameTitle'>{resume.name}</h1></div>
            <div className='Social'>
              <SocialMediaInfo github={resume.github} email={resume.email} linkedin={resume.linkedin} />
            </div>
          </div>
        </header>
        <About desc={resume.about.desc} />
        <Work experience={resume.work}/>
        <Education education={resume.education} />
        <Skills languages={resume.skills.languages} tech={resume.skills.tech} />
        <Portfolio projects={resume.portfolio} />
        <Footer github={resume.github} email={resume.email} linkedin={resume.linkedin} />
      </div>
    );
  }
}

export default App;
