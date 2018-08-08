import React,{Component} from 'react'
import './Resume.css'
export default  class Resume extends Component {
  render() {

    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              
                
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>University of Texas at Arlington</h3>
                          <p className="info">
                          Computer Engineering
                          <span>&bull;</span> <em className="date">May 2020</em></p>
                          <p className="grade">
                          GPA- 3.896
                          </p>
                          <p className="achievements">
                          Achievements:<br></br>
                          <em>Dean's List </em>&bull;
                          <em> President's Charter Scholarship</em>
                          </p>
                          <p className="courses">
                          Relevant Coursework:<br></br>
                          <em>Algorithms and Data Structures </em>&bull;
                          <em> Digital Logic </em>&bull;
                          <em> Operating Systems </em> &bull;
                          <em> Obj. Oriented Programming </em>
                          <br></br>

                          </p>
                       </div>
                    </div>
                  
               
              
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
                          <p className="info">
                          Helped in improving academic performance of students in Calculus 1 by regularly conducting Supplemental Instruction sessions and increasing student comprehension by using strategies such as redirecting questions.
                          </p>
                       </div>
                       <div className="twelve columns">
                          <h3>Apartment and Residence Life</h3>
                          <p className="info">
                          Resident Assistant
                          <span>&bull;</span> <em className="date">August 2018 </em></p>
                          <p className="info">
                          Supported 30+ residents in a residential community by planning events monthly and increasing interaction among people. Responded to emergency situations and documented policy violations. Served as an advisor in Hall Council committee.
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
                    
                    
                  
                }

   					</ul>
                       

   				</div>
                   <div className="bars">

   				   <ul className="skills">
                {
                  
                      <li>
                      <span className={`bar-expand ${"Java"}`}>
                      </span><em>{"Java"}</em>
                      </li>
                    
                    
                  
                }

   					</ul>
                       

   				</div>
                   <div className="bars">

   				   <ul className="skills">
                {
                  
                      <li>
                      <span className={`bar-expand ${"c"}`}>
                      </span><em>{"C/C++"}</em>
                      </li>
                    
                    
                  
                }

   					</ul>
                       

   				</div>
                   <div className="bars">

   				   <ul className="skills">
                {
                  
                      <li>
                      <span className={`bar-expand ${"Verilog"}`}>
                      </span><em>{"Verilog"}</em>
                      </li>
                    
                    
                  
                }

   					</ul>
                       

   				</div>
                   <div className="bars">

   				   <ul className="skills">
                {
                  
                      <li>
                      <span className={`bar-expand ${"Python"}`}>
                      </span><em>{"Python"}</em>
                      </li>
                    
                    
                  
                }

   					</ul>
                       

   				</div>
                   <div className="bars">

   				   <ul className="skills">
                {
                  
                      <li>
                      <span className={`bar-expand ${"embedded"}`}>
                      </span><em>{"Embedded C"}</em>
                      </li>
                    
                    
                  
                }

   					</ul>
                       

   				</div>
                   <div className="bars">

   				   <ul className="skills">
                {
                  
                      <li>
                      <span className={`bar-expand ${"ROS"}`}>
                      </span><em>{"ROS"}</em>
                      </li>
                    
                    
                  
                }

   					</ul>
                       

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}