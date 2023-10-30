import React, { useContext } from "react";
import '../../styles/home.css'
import { BiSolidChevronDown } from "react-icons/bi";
import { ViewModeContext } from "../../context/ViewModeContext";
import { LanguageContext } from "../../context/LanguageContext";

export const Home = () => {
    const {lightMode} = useContext(ViewModeContext);
    const {language} = useContext(LanguageContext);


    return (
        <>
        {
        lightMode ?
        <div className="home section" id="home">
            <div className="hero-img-A">
            <a href="#projects-header"><img onLoad={() => setLoading(false)} src="https://i.ibb.co/r7YXMVJ/Nico.jpg" alt="" className="home-img"/ ></a>
            </div>
            {language ? 
            <>
                <p className="sub-title">Hey! I'm <span className="span-sub-title">Nico</span></p>
                <p className="ultra-title">A <span className="title-span-B">Web Developer</span></p>
            </> :
            <>
                <p className="sub-title">¡Hey! Soy <span className="span-sub-title">Nico</span></p>
                <p className="ultra-title">Un <span className="title-span-B">Desarrollador Web</span></p>
            </>
            }
            <a className="link" href="#about-zone">
                <BiSolidChevronDown size={70} className="icon-B" style={{color: '#242424'}}/>
            </a>
        </div>
        :
        <div className="home section" id="home">
            <div className="hero-img-B">
                <a href="#projects-header"><img src="https://i.ibb.co/r7YXMVJ/Nico.jpg" alt="" className="home-img"/></a>
            </div>

            {language ? 
            <>
                <p className="sub-title">Hey! I'm <span className="span-sub-title">Nico</span></p>
                <p className="ultra-title">A <span className="title-span-A">Web Developer</span></p>
            </> :
            <>
                <p className="sub-title">¡Hey! Soy <span className="span-sub-title">Nico</span></p>
                <p className="ultra-title">Un <span className="title-span-A">Desarrollador Web</span></p>
            </>
            }
            <a className="link" href="#about-zone">
                <BiSolidChevronDown size={70} className="icon-A" style={{color: 'white',}}/>
            </a>
        </div>
        }
        </>
    )
}
