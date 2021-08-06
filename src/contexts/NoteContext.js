import React, {createContext, useState} from 'react';
//import { v4 as uuid } from 'uuid';

export const NoteContext = createContext();

const NoteContextProvider = (props) => {
    const [notes, setNote] = useState([
        {title: 'آموزش ریکت', id:1},
        {title: 'آموزش جاوااسکریپت', id:2,}
    ])

    const removeNote = (id)=>{
        setNote(notes.filter(note => note.id !== id))
    }

    const addNote = (title)=>{
        setNote([...notes, {title, id: Math.floor(Math.random() * 1000)}])
    }

    /* const editNote = (id, e) =>{
        if(notes.id === id){
            setNote([{title: e.target.value, edit: true}])
        }
    } */
    return ( 
        <NoteContext.Provider value={{notes, removeNote, addNote}}>
            {props.children}
        </NoteContext.Provider>
     );
}
 
export default NoteContextProvider;