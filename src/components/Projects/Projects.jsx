import React, { useEffect, useState, useContext } from "react";
import '../../styles/projects.css'
import { Loader } from "../Loader/Loader";
import { ViewModeContext } from "../../context/viewModeContext";

export const Projects = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {lightMode} = useContext(ViewModeContext);
    const getProjectData = () => {
        fetch('./src/assets/projects.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            setData(myJson);
            setLoading(false)
        })
    };

    useEffect(()=>{
        getProjectData()
      },[]);
    
    return loading ? (
        <Loader />
      ) : (
        <>
            <h1 className="header-h1" id="projects-header">My Projects!</h1>
            <div className="projects section" id="projects">
                <div className="about-project">
                    <p>See some of my deployed projects! You can also see my Github link at the bottom of the page. Feel free to take a look at my repositories. Upon hover you will see the icons representing the used technology for each project. If you click on it, you will see the page on a new window.</p>
                </div>
                <div className="container">
                {
                    lightMode ?
                    <>
                    {
                    data && data.length>0 && data.map((item) =>{
                        return(
                        <div className={`project-A project-zone-${item.id}`}>
                            <a href={item.link} target="_blank"><img src={item.image} alt="Project" className="project-img"/></a>
                            <ul className="project-tech">
                                <li className="project-tech-list">
                                    <img src={item.tech1} alt="" className="project-tech-icon"/>
                                </li>
                                {
                                item.tech2 ?                              
                                <li className="project-tech-list">
                                    <img src={item.tech2} alt="" className="project-tech-icon"/>
                                </li> : 
                                <>
                                </>
                                }
                                {
                                item.tech3 ?                              
                                <li className="project-tech-list">
                                    <img src={item.tech3} alt="" className="project-tech-icon"/>
                                </li> : 
                                <>
                                </>
                                }
                            </ul>
                            <span className="top"></span>
                            <span className="right"></span>
                            <span className="bottom"></span>
                            <span className="left"></span>
                        </div>)
                        })
                    }
                </>
                :
                <>
                    {
                    data && data.length>0 && data.map((item) =>{
                        return(
                            <div className={`project-B project-zone-${item.id}`} key={item.key}>
                                <a href={item.link} target="_blank"><img src={item.image} alt="Project" className="project-img"/></a>
                                <ul className="project-tech">
                                    <li className="project-tech-list">
                                        <img src={item.tech1} alt="" className="project-tech-icon"/>
                                    </li>
                                    {
                                    item.tech2 ?                              
                                    <li className="project-tech-list">
                                        <img src={item.tech2} alt="" className="project-tech-icon"/>
                                    </li> : 
                                    <>
                                    </>
                                    }
                                    {
                                    item.tech3 ?                              
                                    <li className="project-tech-list">
                                        <img src={item.tech3} alt="" className="project-tech-icon"/>
                                    </li> : 
                                    <>
                                    </>
                                    }
                                <span className="top"></span>
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <span className="left"></span>
                                </ul>
                            </div>)
                        })
                    }
                </>
                }
                </div>
            </div>
        </>
    )
}


