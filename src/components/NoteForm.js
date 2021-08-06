import React, {useContext, useState} from 'react';
import { NoteContext } from '../contexts/NoteContext';
import ButtonSubmit from '../components/buttonSubmit';
import styled from 'styled-components';


const Form = styled.form`
    padding: 20px;
`

const InputSubmit = styled.input`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin: 6px 0;
    background: #dddddd80;
    color: #333;
    border: 0;
    font-family: 'IranSanse';
    outline: none;
`


const NoteForm = () => {
    const [title, setTitle] = useState('');
    const {addNote} = useContext(NoteContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        addNote(title);
        setTitle('');
    }
    return ( 
        <Form onSubmit={handleSubmit}>
            <InputSubmit type="text" placeholder="یادداشت خود را وارد نمایید ..." value={title} required onChange={(e)=> setTitle(e.target.value)}/>
            <ButtonSubmit type="submit" value="ثبت یادداشت"/>
        </Form>
     );
}
 
export default NoteForm;