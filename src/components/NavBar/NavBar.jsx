import React, { useContext } from "react";
import '../../styles/navbar.css'
import { ViewModeContext } from "../../context/viewModeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md"; 

export const Navbar = () => {
    const {lightMode, setLightMode} = useContext(ViewModeContext);

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
        const viewBtn = document.getElementById('viewBtn');
        body.style.backgroundColor = 'rgba(255, 255, 255, 0.87)';
        body.style.color = '#242424';
        nav.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        links.forEach(link => {
            link.style.color = '#242424'
        });
    }

    return (
        <>
            <div className="NavbarUl" id="navBar">
                <a href="#home" className="NavbarLi">Home</a>
                <a href="#about-zone" className="NavbarLi">About</a>
                <a href="#projects-header" className="NavbarLi">Work</a>
                <a href="#contact" className="NavbarLi">Contact</a>
                { lightMode ? <div className="switch"><button id="viewBtn" onClick={darkModeHandler}><MdDarkMode style={{color:"white"}}/></button></div> : <div className="switch"><button onClick={ligthModeHandler}><MdLightMode style={{color: "white"}} /></button></div>}
            </div>

        </>
    )
}
