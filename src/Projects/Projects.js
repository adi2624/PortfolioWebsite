import React, { Component } from 'react';
import './Projects.css';
import chatpic from './chatpic.png';
import logic from './altera.jpg'
import ros from './ros.png'
import slam from './erb.png'
export default class Projects extends Component{
render(){
    return(
        <section id="projects">
        
        <div className="row smartchat">
        
                <div className="three columns header-col">
                <h1><span>Project #1</span></h1>
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
   <h1><span>Project #2</span></h1>
   <img className="logic-pic" src={logic} alt="Hello"/>
</div>

<div className="nine columns main-col">
  
    
        <div className="row item">
           <div className="twelve columns">
              <h3>Tiny Reduced Instruction Set Computer</h3>
              <p className="info">
              	A Reduced Instruction Set Computer built using Altera Cyclone FPGA and basic components designed at gate level or using Verilog.

                          <br></br>
                          <br></br>
                          <span>&bull;</span><em >Instruction set includes 8-bit ADD, CLR, JMP, STA, LDA and INC instructions</em>
                          <br></br>
                          <span>&bull;</span><em >Controller designed using Verilog and state machine concepts (sequential circuits)</em>
                          <br></br>
                          <span>&bull;</span><em>ALU capable of performing addition, subtraction and logical XOR </em>
                          <h2 className="current"><a className="smoothscroll" href="https://www.dropbox.com/s/4qzy5y0rtv3t34b/Aditya%20Rajguru%20-%20TRISC.pdf?dl=0">Project Report</a></h2>
                          </p>
           </div>
        </div>
      
   
  
</div>
</div>
<div className="row icecream">
        
<div className="three columns header-col">
   <h1><span>Project #3</span></h1>
   <a title="By Oliver H [Public domain], from Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Cpp-Francophonie.svg"><img width="128" className="clogo" alt="Cpp-Francophonie" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cpp-Francophonie.svg/512px-Cpp-Francophonie.svg.png"/></a>
</div>

<div className="nine columns main-col">
  
    
        <div className="row item">
           <div className="twelve columns">
              <h3>Maverick IceCream Emporium</h3>
              <p className="info">
              	An IceCream Emporium designed in C++ using the gtkmm library.
                          <br></br>
                          <br></br>
                          <span>&bull;</span><em >Developed using Agile techniques.</em>
                          <br></br>
                          <span>&bull;</span><em >Object Oriented Design modeled using Unified Modeling Language.</em>
                          <br></br>
                          <span>&bull;</span><em >Custom Servings and Orders</em>
                          <br></br>
                          <span>&bull;</span><em >Self Order</em>
                          <br></br>
                          <span>&bull;</span><em >Inventory Management and Report</em>
                          
                          </p>
           </div>
        </div>
      
   
  
</div>
</div>
<div className="row ros">
        
<div className="three columns header-col">
   <h1><span>Project #4</span></h1>
   <img className="ros-pic" src={ros} alt="Hello"/>
</div>

<div className="nine columns main-col">
  
    
        <div className="row item">
           <div className="twelve columns">
              <h3>Mapping and Navigation Robot</h3>
              <p className="info">
              	Collaborated with a Phd student to build a ROS based autonomous robot.

                          <br></br>
                          <br></br>
                          <span>&bull;</span><em >Uses ROS framework.</em>
                          <br></br>
                          <span>&bull;</span><em >Hector SLAM algorithms used for localization and mapping</em>
                          <br></br>
                          <span>&bull;</span><em>Implemented on a Raspberry Pi running lubuntu.</em>
                          
                          </p>
           </div>
        </div>
        
      
        <img className="erb-pic" src={slam} alt="Hello"/>
  
</div>
</div>
        </section>
    );
}
   

}