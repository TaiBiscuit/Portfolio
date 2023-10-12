import React, { useEffect, useState, useContext } from "react";
import '../../styles/projects.css'
import { Loader } from "../Loader/Loader";
import { ViewModeContext } from "../../context/ViewModeContext";
import { LanguageContext } from "../../context/LanguageContext";

export const Projects = () => {
    const [data, setData] = useState([]);
    const {lightMode} = useContext(ViewModeContext);
    const [loading, setLoading] = useState(true);
    const {language} = useContext(LanguageContext);


    const getProjectData = () => {
        fetch('./public/assets/projects.json')
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
            {
            language? 
            <>
            <h1 className="header-h1" id="projects-header">Projects</h1>
            <div className="about-project">
                <p>See some of my projects! You can also see my Github link at the bottom of the page. Feel free to take a look at my repositories. Upon hover you will see the icons representing the used technology for each project. If you click on it, you will see the page on a new window.</p>
            </div>
            </>:
            <>
            <h1 className="header-h1" id="projects-header">Proyectos</h1>
            <div className="about-project">
                <p>¡Mira algunos de mis proyectos! También podes visitar mis repositorios de Github, cuyo link se encuentra en la sección de contactos. Al pasar el mouse por cada proyecto se desplegarán los iconos que corresponden a las tecnologías utilizadas. Al hacer click izquierdo se abrirá el proyecto (O su repositorio) en una ventana nueva.</p>
            </div>
            </>
            }
            <div className="projects section" id="projects">
                <div className="container">
                    {
                    lightMode ?
                    <>
                    {
                    data && data.length>0 && data.map((item) =>{
                        return(
                        <div className={`project-A project-zone-${item.id}`}>
                            <a href={item.link} target="_blank"><img src={item.image} alt="Project" className="project-img"/></a>
                            <p className="project-title">{item.title}</p>
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
                        </div>)
                        })
                    }
                    </>:
                    <>
                    {
                    data && data.length>0 && data.map((item) =>{
                        return(
                            <div className={`project-B project-zone-${item.id}`} key={item.key}>
                                <a href={item.link} target="_blank"><img src={item.image} alt="Project" className="project-img"/>
                                <p className="project-title">{item.title}</p>
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
                                </a>
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


