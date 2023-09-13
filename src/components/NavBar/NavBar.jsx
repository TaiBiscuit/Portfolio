import React, { useContext } from "react";
import '../../styles/navbar.css'
import { ViewModeContext } from "../../context/viewModeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { MdDarkMode, MdLightMode } from "react-icons/md"; 

export const Navbar = (props) => {
    const { lightMode, setLightMode} = useContext(ViewModeContext);
    const { language, setLanguage } = useContext(LanguageContext);


    if(props.lang == 'es'){
        setLanguage(true);
    } else {
        setLanguage(false);
    }

    function darkModeHandler(){
        setLightMode(false);
        const body = document.getElementById('appBody');
        const nav = document.getElementById('navBar');
        const links = document.querySelectorAll('.NavbarLi');
        body.style.backgroundColor = '#242424';
        body.style.color = 'rgba(255, 255, 255, 0.87)';
        nav.style.backgroundColor = '#242424';
        links.forEach(link => {
            link.style.color = 'rgba(255, 255, 255, 0.87)';
        });  
    }

    function ligthModeHandler(){
        setLightMode(true);
        const body = document.getElementById('appBody');
        const nav = document.getElementById('navBar');
        const links = document.querySelectorAll('.NavbarLi');
        body.style.backgroundColor = 'rgba(255, 255, 255, 0.87)';
        body.style.color = '#242424';
        nav.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        links.forEach(link => {
            link.style.color = '#242424'
        });
    }

    return language ? (
        <>
            <div className="NavbarUl" id="navBar">
                <div className="links">
                <a href="#home" className="NavbarLi">Home</a>
                <a href="#about-zone" className="NavbarLi">About</a>
                <a href="#projects-header" className="NavbarLi">Projects</a>
                <a href="#contact" className="NavbarLi">Contact</a>
                </div>
                <div className="btns">
                { lightMode ? <div className="switch"><button className="view-btn" id="viewBtn" onClick={darkModeHandler}><MdDarkMode style={{color:"white"}}/></button></div> : <div className="switch"><button className="view-btn" onClick={ligthModeHandler}><MdLightMode style={{color: "white"}} /></button></div>}
                {  language ?   <a href="/es"><button className="view-btn">ES</button></a> : <a href="/"><button className="view-btn">EN</button></a>}
                </div>
            </div>
        </>
    ) : (
        <>
            <div className="NavbarUl" id="navBar">
                <div className="links">
                <a href="#home" className="NavbarLi">Inicio</a>
                <a href="#about-zone" className="NavbarLi">Sobre Mi</a>
                <a href="#projects-header" className="NavbarLi">Proyectos</a>
                <a href="#contact" className="NavbarLi">Contacto</a>
                </div>
                <div className="btns">
                { lightMode ? <div className="switch"><button className="view-btn"  id="viewBtn" onClick={darkModeHandler}><MdDarkMode style={{color:"white"}}/></button></div> : <div className="switch"><button className="view-btn"  onClick={ligthModeHandler}><MdLightMode style={{color: "white"}} /></button></div>}
                {  language ?   <a href="/es"><button className="view-btn">ES</button></a> : <a href="/"><button className="view-btn">EN</button></a>}
                </div>
            </div>
        </>
    )
}