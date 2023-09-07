import React, { useContext } from "react";
import '../../styles/home.css'
import { BiSolidChevronDown } from "react-icons/bi";
import { ViewModeContext } from "../../context/viewModeContext";

export const Home = () => {
    const {lightMode} = useContext(ViewModeContext);

    return (
        <>
        {
        lightMode ?
        <div className="home section" id="home">
            <div className="hero-img-A">
            <a href="#about-zone"><img src="https://pbs.twimg.com/profile_images/1515419749089525762/PPLkBBAh_400x400.jpg" alt="" className="home-img"/></a>
            </div>
            <p className="sub-title">Hey! I'm <span className="span-sub-title">Nico</span></p>
            <p className="ultra-title">A <span className="title-span-B">Web Developer</span></p>
            <a className="link" href="#projects-header">
                <BiSolidChevronDown size={70} className="icon-B" style={{color: '#242424'}}/>
            </a>
        </div>
        :
        <div className="home section" id="home">
            <div className="hero-img-B">
                <a href="#about-zone"><img src="https://pbs.twimg.com/profile_images/1515419749089525762/PPLkBBAh_400x400.jpg" alt="" className="home-img"/></a>
            </div>
            <p className="sub-title">Hey! I'm <span className="span-sub-title">Nico</span></p>
            <p className="ultra-title">A <span className="title-span-A">Web Developer</span></p>
            <a className="link" href="#projects-header">
                <BiSolidChevronDown size={70} className="icon-A" style={{color: 'white',}}/>
            </a>
        </div>
        }
        </>
    )
}
