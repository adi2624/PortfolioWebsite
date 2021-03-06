import React, {Component} from 'react';
import "./About.css";
import profilepic from './profilepic.jpg';
export default class About extends Component{
        render(){
            return(
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src={profilepic} alt="Hello"/>
                        </div>
                        <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                   "My name is Aditya Rajguru and I am studying Computer Engineering in University of Texas at Arlington. I am from Indore,India."
               }
               </p>
               
               <div className="row">

                  <div className="columns contact-details" >

                 
                  <p className="address">
                  <h2>Contact Details</h2><br/>
       						<span>{"Aditya Rajguru: "}<br></br></span>
                            <span>{"+1-734-277-1859"}</span>
                     <br></br>
       						   <span>
                     {"Email: adityarajguru.ar@gmail.com"}
                    </span>
                    <br></br>
                    <span>{}</span>
       					   </p>
                  </div>
               </div>
            </div>
            </div>
            </section>


            );
        }
}