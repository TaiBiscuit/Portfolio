import React, { createContext, useState } from "react";

export const ViewModeContext = createContext();

export const ViewModeProvider = ({children}) => {
    const [lightMode, setLightMode] = useState(false)

    return (
        <ViewModeContext.Provider value={{lightMode, setLightMode}}>
        {children}
        </ViewModeContext.Provider>
    );
};