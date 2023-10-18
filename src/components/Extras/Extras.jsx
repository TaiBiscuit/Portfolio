import React, { useEffect, useState, useContext } from "react";
import '../../styles/extras.css'
import { ViewModeContext } from "../../context/ViewModeContext";
import { LanguageContext } from "../../context/LanguageContext";

export const Extras = () => {
    const {lightMode} = useContext(ViewModeContext);
    const [loading, setLoading] = useState(true);
    const {language} = useContext(LanguageContext);

    return(
        <>
        <h1 className="header-h1" id="projects-header">Extras</h1>
        <div className="extras-zone">

        </div>
        </>
    )
}