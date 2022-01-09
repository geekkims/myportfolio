import "./about.css"
import Award from "../../img/award.png"


const About = () => {
    return (
        <div className="a">
            <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://cdn-media-1.freecodecamp.org/images/TKIz7QINBW86qDpRxZj03KU7DiMWcMW08H25" 
                alt=""
                 className="a-img"/>
                </div>             
           
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                Senior Full Stack and Flutter Mobile App Developer, having 4+ Years of experience
              in enterprise application development.
            </p>
            <p className="a-desc">
         Well-versed in cloud technologies including 
         .Net C#, dotNetCore, Microservices, WebAPI, HTML5, Flutter, PHP, NodeJS, 
         JavaScript, jQuery, Bootstrap, CSS, Database Design, MySQL, MSSQL, ReactJS, AWS Cloud, Docker, CI/CD, Chatbots, 
        OOPs, SOLID Principles, Strong background in project management, agile development,
         team handling and customer relations.
         </p>
         <div className="a-award">
             <img src={Award} alt="" className="a-award-img" /> 
         <div className="a-award-texts">
             <h4 className="a-award-title">International Design</h4>
             <p className="a-award-text">
             Senior Full Stack and Flutter Mobile App Developer, having 4+ Years of experience
              in enterprise application development.  
             </p>
         </div>
         </div>
        </div>
        </div>
    )
}

export default About
