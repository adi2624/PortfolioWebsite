import React, { Component } from 'react';
import logo from './logo.svg';
import MenuContainer from './MenuContainer'
import About from './About/About'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import './App.css';
import './font-awesome/css/font-awesome.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MenuContainer />
          <h3 className="App-reacttext">Powered by React</h3>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Glad you're here.</h1>
          <h3 className="App-desc">Welcome to Aditya's Portfolio.</h3>
          <ul className="social">
          <li><a href="https://www.facebook.com/aditya.rajguru.56"><i class="fa fa-facebook"></i></a></li>
          <li><a href="https://github.com/adi2624"><i class="fa fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/aditya-rajguru-608944130/"><i class="fa fa-linkedin"></i></a></li>
          <li><a href="https://bitbucket.org/adi2624/"><i class="fa fa-bitbucket"></i></a></li>
          </ul>
        </header>
        
        <p className="App-intro">
          
        </p>
        <About/>
        <Resume/>
        <Projects/>
      </div>
    );
  }
}

export default App;
