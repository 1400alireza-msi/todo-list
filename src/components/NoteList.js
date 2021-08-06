import React, {useContext} from 'react';
import { NoteContext } from '../contexts/NoteContext';
import NoteDetails from './NoteDetails';
import styled from 'styled-components';

const NoteItem = styled.div`
    margin: 20px;
`
const NoteUl = styled.ul`
    padding: 0;
    list-style: none;
`

const NoteList = () => {
    const{notes} = useContext(NoteContext);

    return notes.length?( 
        <NoteItem>
            <NoteUl>
                {notes.map(note => {
                    return(
                        <NoteDetails key={note.id} note={note}/>
                    )
                })}
            </NoteUl>
        </NoteItem>
     ):(
         <div> هیچ یادداشتی پیدا نشد :( </div>
     )
}
 
export default NoteList;