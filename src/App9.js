import React from "react";
import Split from "react-split";
import Editor from './components9/Editor' 
import { data } from "./daata"
import Sidebar from './components9/Sidebar' 
import { nanoid } from "nanoid";
import { json } from "mathjs";

export default function App() { 
    const myStorage = window.localStorage 
    const [notes, setNotes] = React.useState(()=>JSON.parse(localStorage.getItem('notes')) ||[]) 
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )    

    React.useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(notes))
    },[notes]) 

    function deleteNote(event, noteId) {  
        event.stopPropagation()
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))

    }

    function createNewNote() {
        const newNote = {
            id : nanoid(),  
            body: "# Type your markdown note's title here"
        } 
        setNotes(prevNotes=>[...prevNotes,newNote]) 
        setCurrentNoteId(newNote.id)
    } 
    function updateNote(text) {
        setNotes(oldNotes => {
            const newArray = []
            for(let i=0 ; i<oldNotes.length ; i++) { 
                const oldNote= oldNotes[i]
                if(oldNote.id === currentNoteId) {
                    newArray.unshift({...oldNote, body : text})
                } 
                else{
                    newArray.push(oldNote)
                }
            } 
            return newArray

        })
        
        
        // this wasnt rearranging the recent note at top
        // setNotes(oldNotes=>oldNotes.map(oldNote=> {
        //     return oldNote.id === currentNoteId ?
        //     {...oldNote, body : text} : 
        //     oldNote   
        // }))
    } 
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id=== currentNoteId
        }) || notes[0]
    }

    return ( 
        <main> 
        {
            notes.length > 0 
            ? 
            <Split
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
            <Sidebar 
                notes = {notes} 
                currentNote = {findCurrentNote()} 
                setCurrentNoteId = {setCurrentNoteId}  
                newNote = {createNewNote}  
                deleteNote = {deleteNote}
            />  
            {
                currentNoteId && 
                notes.length> 0 && 
                <Editor
                    currentNote = {findCurrentNote()}
                    updateNote = {updateNote}
                /> 
            } 
            </Split> 
            : 
            <div className="no-notes">
                <h1>You ahve not notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    create one now
                </button>

            </div> 
        }
        </main>
    )
}
        

