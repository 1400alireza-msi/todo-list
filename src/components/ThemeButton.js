import React, {useContext, useState} from 'react';
import { ThemeContext } from '../contexts/themeContext';
import styled from "styled-components";

const ChangeBtn = styled.button`
    padding: 6px 20px;
    display: block;
    border: none;
    margin: 10px auto;
    background: #f45177;
    color: #fff;
    font-family: 'IranSanse';
    outline: none;
    border-radius: 8px;
    cursor: pointer;
`

const ThemeButton = () => {
    const{changeTheme} = useContext(ThemeContext);
    return ( 
        <ChangeBtn onClick={changeTheme}> تغییر تم </ChangeBtn>
     );
}
 
export default ThemeButton;