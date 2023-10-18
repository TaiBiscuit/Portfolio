import React, { useContext } from "react";
import '../../styles/extras.css'
import { ViewModeContext } from "../../context/ViewModeContext";

export const Extras = () => {
    const {lightMode} = useContext(ViewModeContext);

    return(
        <>
        <h1 className="header-h1" id="projects-header">Extras</h1>
        <div className="extras-zone">
            {
                lightMode ? 
                <>
                <a href="https://www.frontendmentor.io/profile/TaiBiscuit" target="_blank"><button className="extra-btn-B">Frontend Mentor</button></a>
                <a href="https://leetcode.com/TaiBiscuit/" target="_blank"><button className="extra-btn-B">LeetCode</button></a>
                <a href="https://www.codewars.com/users/TaiBiscuit" target="_blank"><button className="extra-btn-B">CodeWars</button></a>
                </>
                :
                <>
                <a href="https://www.frontendmentor.io/profile/TaiBiscuit" target="_blank"><button className="extra-btn-A">Frontend Mentor</button></a>
                <a href="https://leetcode.com/TaiBiscuit/" target="_blank"><button className="extra-btn-A">LeetCode</button></a>
                <a href="https://www.codewars.com/users/TaiBiscuit" target="_blank"><button className="extra-btn-A">CodeWars</button></a>
                </>
            }
        </div>
        </>
    )
}