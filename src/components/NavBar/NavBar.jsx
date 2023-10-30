import React, { useContext, useEffect, useState } from "react";
import '../../styles/navbar.css'
import { ViewModeContext } from "../../context/ViewModeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { MdDarkMode, MdLightMode } from "react-icons/md"; 
import { PiNavigationArrowFill } from 'react-icons/pi';
import { Link, useNavigate } from "react-router-dom";

export const Navbar = (props) => {
    const { lightMode, setLightMode} = useContext(ViewModeContext);
    const { language, setLanguage } = useContext(LanguageContext);
    const body = document.getElementById('appBody');
    const nav = document.getElementById('navBar');
    const links = document.querySelectorAll('.NavbarLi');
    const linksNav = document.getElementById('links');
    const navigate = useNavigate();

    useEffect(()=>{
        if(props.lang == 'es'){
            setLanguage(true);
        } else {
            setLanguage(false);
        }
      },[]);

    function darkModeHandler(){
        setLightMode(false);
        body.style.backgroundColor = '#242424';
        body.style.color = 'rgba(255, 255, 255, 0.87)';
        nav.style.backgroundColor = '#333';
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
    };

    function phoneViewHandler(){
        const linksNav = document.getElementById('links');
        console.log(linksNav)
        if(linksNav.classList.contains('hide')){
            linksNav.classList.remove('hide');
            linksNav.classList.add('show');
            linksNav.style.display = 'block';
        } else if(linksNav.classList.contains('show')){
            linksNav.classList.add('hide');
            linksNav.classList.remove('show');
            linksNav.style.display = 'none';
        }
    }

    function handleLanguage(e){
        const goTo = e.target.outerText
        if(goTo == 'ES'){
            navigate('/es')
        } else{
            navigate('/')
        }
    }

    return language ? (
        <>
        <Link/>
            <div className="NavbarUl" id="navBar">
                <button className="nav-activate-btn hide" id="nav-activate-btn" onClick={phoneViewHandler}><PiNavigationArrowFill/></button>
                <div className="links show" id="links">
                <a href="#home" className="NavbarLi">Home</a>
                <a href="#about-zone" className="NavbarLi">About</a>
                <a href="#projects-header" className="NavbarLi">Projects</a>
                <a href="#contact" className="NavbarLi">Contact</a>
                </div>
                <div className="btns">
                { lightMode ? <div className="switch"><button className="view-btn" id="viewBtn" onClick={darkModeHandler}><MdDarkMode style={{color:"white"}}/></button></div> : <div className="switch"><button className="view-btn" onClick={ligthModeHandler}><MdLightMode style={{color: "white"}} /></button></div>}
                {  language ?  <button className="view-btn" onClick={ (e) => handleLanguage(e)}>ES</button> : <button className="view-btn" onClick={ (e) => handleLanguage(e)}>EN</button>}
                </div>
            </div>
        </>
    ) : (
        <>
            <div className="NavbarUl" id="navBar">
                <button className="nav-activate-btn hide" id="nav-activate-btn" onClick={phoneViewHandler}><PiNavigationArrowFill/></button>
                <div className="links" id="links">
                <a href="#home" className="NavbarLi">Inicio</a>
                <a href="#about-zone" className="NavbarLi">Sobre Mí</a>
                <a href="#projects-header" className="NavbarLi">Proyectos</a>
                <a href="#contact" className="NavbarLi">Contacto</a>
                </div>
                <div className="btns">
                { lightMode ? <div className="switch"><button className="view-btn"  id="viewBtn" onClick={darkModeHandler}><MdDarkMode style={{color:"white"}}/></button></div> : <div className="switch"><button className="view-btn"  onClick={ligthModeHandler}><MdLightMode style={{color: "white"}} /></button></div>}
                {  language ?   <button className="view-btn" onClick={ (e) => handleLanguage(e)}>ES</button> : <button className="view-btn" onClick={ (e) => handleLanguage(e)}>EN</button>}
                </div>
            </div>
        </>
    )
}
