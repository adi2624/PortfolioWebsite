import React,{Component} from 'react'
import './Resume.css'

export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>University of Texas at Arlington</h3>
                          <p className="info">
                          Computer Engineering
                          <span>&bull;</span> <em className="date">May 2020</em></p>
                          <p className="achievements">
                          Dean's List
                          </p>
                       </div>
                    </div>
                  
               
              }
            </div>
         </div>
         <div className="row work">

            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>University Tutorial and Supplemental Instruction</h3>
                          <p className="info">
                          SI Leader
                          <span>&bull;</span> <em className="date">May 2017 </em></p>
                          <p>
                          
                          </p>
                       </div>

                    </div>

                  
               
              }
            </div>
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               Skills Description
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  
                      <li>
                      <span className={`bar-expand ${"JavaScript"}`}>
                      </span><em>{"JavaScript"}</em>
                      </li>
                    
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}