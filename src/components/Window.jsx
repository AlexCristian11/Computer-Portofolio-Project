import React from 'react'
import styled from 'styled-components';
import { FaHtml5, FaCss3, FaGithub, FaChrome, FaTerminal, FaFigma, FaUniversalAccess, FaBootstrap, FaDatabase, FaReact} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

function Window(props) {

    const show = props.show;
    const name = props.name;
    const dataProjects = props.data.projects;
    const dataAbout = props.data.aboutMe;
    const dataSkills = props.data.skills;
    const image = process.env.PUBLIC_URL+`/img/${dataAbout.img}`;   

  return (
    <>
    {show &&
        <Frame>
            <div className="bar">
                <div className="circle red" onClick={props.close}></div>
                <div className="circle yellow"></div>
                <div className="circle green"></div>
                <div className="line"></div>
                <h5>{props.name}</h5>
                <div className="line"></div>
            </div>
            <div className="separation"># # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # </div>
            {name === "PROJECTS" &&
                <div className="projects-container">
                    {dataProjects.map((project) =>
                    <div className="main-content" key={project.id} style={{
                        backgroundImage: process.env.PUBLIC_URL+`/img/${project.coverImg}`,
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.url} alt="Github link" target="_blank" rel="noopener noreferrer"><FaGithub size="30px" className="icon"/></a>
                    </div>
                    )}
                </div>
            }
            {name === "ABOUT ME" &&
                <div className="about-container">
                    <h2>About Me</h2>
                    <img src={image} alt="" />
                    <p>{dataAbout.description}</p>
                </div>
            }
            {name === "SKILLS" && 
                <div className="skills-container">
                <p>{dataSkills.description}</p>
                    <div className="skills">
                        <FaHtml5 size="50px" className="icon" color="#fff"/>
                        <FaCss3 size="50px" className="icon" color="#fff"/>
                        <FaGithub size="50px" className="icon" color="#fff"/>
                        <FaChrome size="50px" className="icon" color="#fff"/>
                        <FaTerminal size="50px" className="icon" color="#fff"/>
                        <FaFigma size="50px" className="icon" color="#fff"/>
                        <FaUniversalAccess size="50px" className="icon" color="#fff"/>
                        <FaBootstrap size="50px" className="icon" color="#fff"/>
                        <FaDatabase size="50px" className="icon" color="#fff"/>
                        <FaReact size="50px" className="icon" color="#fff"/>
                        <SiJavascript size="50px" className="icon" color="#fff"/>
                    </div>
                </div>
            }
        </Frame>
    }
    </>
  )
}

const Frame = styled.div`
    height: 500px;
    width: 900px;
    background-color: #000;
    border-radius: 5px;
    position: absolute;
    top: 100px;
    left: 30%;

    .bar {
        height: 20px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 5px 5px 5px 5px; 
    }

    .circle {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }

    .red {
        background-color: #E83843;
        cursor: pointer;
    }
    .yellow {
        background-color: #EBC456;
    }
    .green {
        background-color: #2DBA3B;
    }

    .line {
        height: 2px;
        background-color: white;
        width: 40%;
    }

    h5 {
        color: white;
    }

    .separation {
        color: white;
        margin: 10px;
        text-align: center;
    }

    ${'' /* Project Window styles */}

    .projects-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .main-content {
        color: black;
        height: 180px;
        width: 350px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 30px 50px 30px;
        border-radius: 3px;
    }

    .main-content p {
        padding: 0 5px 0 15px;
        font-size: .95rem;
    }

    .icon {
        color: black;
    }
    .icon:hover {
        color: #AC0A00;
    }
    .icon:focus {
        color: #AC0A00;
    }

    ${'' /* About me Window styles */}

    .about-container {
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
            text-align: center;
            margin: 10px 0 10px 0;
        }
        img {
            width: 180px;
            height: 200px;
            border-radius: 3px;
        }
        p {
            padding: 20px;
            font-size: 1.1rem;
        }
    }

        ${'' /* Skills Window styles*/}

        .skills-container p{
            color: white;
            padding: 2rem;
            font-size: 1.2rem;
        }

        .skills {
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 30px 0 70px 0;
        }
`

export default Window