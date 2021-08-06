import React, { Component, createContext, useState } from 'react';

export const ThemeContext= createContext();

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState({
        isLight:true,
        light:{text: '#555', item: '#ddd', bg: '#fff', header: '#179bec'},
        dark: {text: '#ddd', item: '#333', bg: '#555', header: '#555'}
    })

    const changeTheme=()=>{
        setTheme({isLight: !theme.isLight})
    }

    return (
        <ThemeContext.Provider value={{...theme, changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}
 
export default ThemeContextProvider;