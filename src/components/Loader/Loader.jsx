import React from 'react';
import { NewtonsCradle } from '@uiball/loaders'

export const Loader = () => {

    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
    };

    return(
        <div style={styles}>
        <NewtonsCradle 
        size={40}
        speed={1.4} 
        color="black" 
        />
        </div>
    );
};
