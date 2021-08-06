import React, {useContext, useState} from 'react';
import { NoteContext } from '../contexts/NoteContext';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/themeContext';

const NoteLi = styled.li`
    background: #fff;
    border-right: 4px solid #f45177;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
    color: #222;
    margin: 10px 0;
    box-shadow: 0 2px 5px #ddd;
`

const DeleteButton = styled.button`
    padding: 0.2rem;
    margin-top: 1rem;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    float: left;
    background: transparent;
    color: red;
`

const InputItem = styled.input.attrs((pops) => ({
    type: "text"
}))`
    width: 95%;
    padding: 10px;
    box-sizing: border-box;
    margin: 6px 0;
    background: #dddddd80;
    color: #333;
    border: 0;
    font-family: 'IranSanse';
    outline: none;
`

const NoteDetails = ({note}) => {
    const {removeNote} = useContext(NoteContext);
    const [title, setTitle] = useState(note.title)
    const {isLight, dark, light} =  useContext(ThemeContext);
    const theme = isLight ? light: dark;

    const handleChange = (e)=>{
        setTitle(e.target.value);
    }

    return (
        
        <NoteLi style={{background: theme.bg}}>
            <InputItem type="text" value={title} onChange={handleChange}/>
            {/* <button className="fa fa-times delete-button" onClick={()=>removeNote(note.id)}></button> */}
            <DeleteButton className="fa fa-times" onClick={()=>removeNote(note.id)} />
        </NoteLi>

     );
}
 
export default NoteDetails;