import React, { Component } from 'react';
import './Projects.css';
import chatpic from './chatpic.png';
import logic from './altera.jpg'
export default class Projects extends Component{
render(){
    return(
        <section id="projects">
        
        <div className="row smartchat">
        
<div className="three columns header-col">
   <h1><span>Projects</span></h1>
   <img className="chat-pic" src={chatpic} alt="Hello"/>
</div>

<div className="nine columns main-col">
  
    
        <div className="row item">
           <div className="twelve columns">
              <h3>SmartChat</h3>
              <p className="info">
                          SmartChat is Android based application designed to send messages using Firebase. The quality that differentiates this app from other Chat app's is that SmartChat displays chat threads according to priorities calculated using feedback from the user.
                          <br></br>
                          <br></br>
                          <span>&bull;</span><em >Rating added to list every time you chat with someone, improves the priority of users over a long period of time.</em>
                          <br></br>
                          <span>&bull;</span> <em >Priority based chat thread display</em>
                          <br></br>
                          <span>&bull;</span> <em >Intuitive UI</em>
                          <br></br>
                          <span>&bull;</span><em >Firebase Backend</em></p>
           </div>
        </div>
      
   
  
</div>
</div>
<div className="row trisc">
        
<div className="three columns header-col">
   <h1><span>Projects</span></h1>
   <img className="logic-pic" src={logic} alt="Hello"/>
</div>

<div className="nine columns main-col">
  
    
        <div className="row item">
           <div className="twelve columns">
              <h3>Tiny Reduced Instruction Set Computer</h3>
              <p className="info">
              	A Reduced Instruction Set Computer built using Altera Cyclone FPGA and basic components designed at gate level using Verilog.

                          <br></br>
                          <br></br>
                          <h2 className="current"><a className="smoothscroll" href="https://www.dropbox.com/s/4qzy5y0rtv3t34b/Aditya%20Rajguru%20-%20TRISC.pdf?dl=0">Project Report</a></h2>
                          </p>
           </div>
        </div>
      
   
  
</div>
</div>

        </section>
    );
}
   

}