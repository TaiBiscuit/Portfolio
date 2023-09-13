import React, { useEffect, useState, useRef, useContext } from "react";
import '../../styles/about.css'
import { Loader } from "../Loader/Loader";
import { LanguageContext } from "../../context/LanguageContext";

export const About = () => {
    const [data, setData] = useState([]);
    const [altData, setAltData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {language} = useContext(LanguageContext);
    const myRef = useRef();

    const getTechData = () => {
        fetch('./src/assets/tech.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            setData(myJson);
            setLoading(false)
        });
        fetch('./src/assets/techES.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            setAltData(myJson);
        })
    };

    const checkTech = (id) =>{
        const itemSelected = document.getElementById(`${id}`)
        const itemId = parseInt(itemSelected.id);
        const techZone = document.getElementById('tech-zone');

        writeTechText(itemId)
    };

    const checkAltTech = (id) =>{
        const itemSelected = document.getElementById(`${id}`)
        const itemId = parseInt(itemSelected.id);
        const techZone = document.getElementById('tech-zone');

        writeAltTechText(itemId)
    }

    const writeTechText = (id) => {
        const techText = document.getElementById('tech-info');
        const textInfo = data[id -1].info;
        
        techText.innerHTML=
        `
        <div class="tech-info-choosen">
        <img src="${data[id -1].image}" class="tech-info-img" />
        </div>
        <div class="tech-info-txt">
            ${textInfo}
        </div>
        `
    }

    const writeAltTechText = (id) => {
        const techText = document.getElementById('tech-info');
        const textInfo = altData[id -1].info;
        
        techText.innerHTML=
        `
        <div class="tech-info-choosen">
        <img src="${altData[id -1].image}" class="tech-info-img" />
        </div>
        <div class="tech-info-txt">
            ${textInfo}
        </div>
        `
    }

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    useEffect(()=>{
        getTechData()
      },[]);

      

    return loading ? (
    <Loader />
    ) : (
    <>
    <div className="about-zone section" id="about-zone">
        {
            language ?
            <> 
            <h1 className="header-h1">About me</h1>
            <div className="about-me-zone">
                <div className="about-me-txt">
                    <p>Hello! My name is Nico, a Frontend developer from Argentina. I am a Computer Science student at UBA (Unviersidad de Buenos Aires) and learning Fullstack development at Coderhouse and I am interested in everything referred to web development. I can also speak Spanish at a native level, and Japanese at an intermediate level. I am currently looking for my first work experience in the IT field, in the meantime I keep learning and making projects.</p>
                </div>
                <div className="about-me-picture">
                    <img src="https://avatars.githubusercontent.com/u/113484831?v=4" alt="" className="about-me-img"/>
                </div>
            </div>
            <h1 className="header-h1">Technologies that I use</h1>
            <div className="tech-zone" id="tech-zone">
            
            <div className="tech-icons-zone" id="tech-zone">
            {
                data && data.length>0 && data.map((item) =>{
                    return(
                        <div className='tech' key={item.key} id={item.id} onClick={() => checkTech(item.id)}>
                        <img src={item.image} alt="Tech" className="tech-img"/>
                        <p className="tech-txt">{item.name}</p>
                        </div>
                    )
                }
                )
            }
            </div>
            <div className="tech-info" id="tech-info"></div>
            </div>
            </>
            :
            <>
            <h1 className="header-h1">Sobre mi</h1>
            <div className="about-me-zone">
            <div className="about-me-txt">
                <p>¡Hola! Soy Nico, desarrollador Frontend. Soy estudiante de la carrera "Licenciatura en Ciencias de la Computación" de la UBA y estoy haciendo el curso de Fullstack en Coderhouse, y estoy interesado en todo lo referente al desarrollo web. Tengo un nivel de inglés bilingüe e intermedio de japonés.Actualmente me encuentro en la búsqueda de mi primera experiencia laboral en el campo de IT, mientras tanto sigo aprendiendo y realizando proyectos.</p>
            </div>
            <div className="about-me-picture">
                <img src="https://avatars.githubusercontent.com/u/113484831?v=4" alt="" className="about-me-img"/>
            </div>
            </div>
            <h1 className="header-h1">Tecnologias que uso</h1>
            <div className="tech-zone" id="tech-zone">
            
            <div className="tech-icons-zone" id="tech-zone">
            {
                data && data.length>0 && data.map((item) =>{
                    return(
                        <div className='tech' key={item.key} id={item.id} onClick={() => checkAltTech(item.id)}>
                        <img src={item.image} alt="Tech" className="tech-img"/>
                        <p className="tech-txt">{item.name}</p>
                        </div>
                    )
                }
                )
            }
            </div>
            <div className="tech-info" id="tech-info"></div>
            </div>
            </>
        }
        
    </div>
    </>
    )
}