import React, { useEffect, useState, useRef } from "react";
import '../../styles/about.css'
import { Loader } from "../Loader/Loader";

export const About = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const myRef = useRef();

    const getTechData = () => {
        fetch('./src/assets/tech.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            setData(myJson);
            setLoading(false)
        })
    };

    const checkTech = (id) =>{
        const itemSelected = document.getElementById(`${id}`)
        const itemId = parseInt(itemSelected.id);
        const techZone = document.getElementById('tech-zone');

/*         techZone.style.transform = 'translateX(-5px)'; */

        writeTechText(itemId)
    }

    const writeTechText = (id) => {
        const techText = document.getElementById('tech-info');
        const techInfoImg = data[id -1].image;
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
        <h1 className="header-h1">About me</h1>
        <div className="about-me-zone">
            <div className="about-me-txt">
                <p>Hello! My name is Nico, a Frontend developer from Argentina. I am a Computer Science student at UBA (Unviersidad de Buenos Aires) and learning Fullstack development at Coderhouse and I am interested in everything referred to web development. I can also speak Spanish at a native level, and Japanese at an intermediate level. I consider myself a proactive person and I keep on learning since I'm never satisfied with what I know about a certain topic. I am currently looking for my first work experience in the IT field, in the meantime I keep learning and making projects.</p>
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
    </div>
    </>
    )
}
