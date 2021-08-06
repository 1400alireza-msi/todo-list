import React, {useContext} from 'react';
import { NoteContext } from '../contexts/NoteContext';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/themeContext';

const Header = styled.div`
    padding: 10px 20px;
    text-align: center;
    background: #179bec;
    border-radius: 8px;
`

const Title = styled.h1`
    margin: 10px 0;
    color: #fff;
`

const Description = styled.p`
    color: #fff;
`


const Navbar = () => {
    const{notes} = useContext(NoteContext);
    const {isLight, dark, light} =  useContext(ThemeContext);
    const theme = isLight ? light: dark;

    return ( 
        <Header style={{background: theme.header}}>
            <Title> لیست یادداشت های شما </Title>
            <Description>
                اکنون شما
                &nbsp;{notes.length}&nbsp;
                یادداشت وارد کردید
            </Description>
        </Header>
     );
}
 
export default Navbar;