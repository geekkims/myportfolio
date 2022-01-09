import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Jay Ndungu</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Blogger</div>
                            <div className="i-title-item">Data Analyst</div>
                        </div>
                    </div>
                    <p className="i-description">
                    Senior Full Stack and Flutter Mobile App Developer, having 4+ Years 
                    of experience in enterprise application development. Well-versed in
                    cloud technologies including .Net C#, dotNetCore, Microservices,
                    WebAPI, HTML5, Flutter, PHP, NodeJS, JavaScript, jQuery, 
                    Bootstrap, CSS, Database Design, MySQL, MSSQL, ReactJS,
                    AWS Cloud, Docker, CI/CD, Chatbots, OOPs, SOLID Principles, Strong background in 
                    project management, agile development, team handling and customer relations.  
                    </p>
                </div>
                
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img">

                </img>
            </div>
        </div>
    )
}

export default Intro