import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial);

    const getNotes = async () =>{
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMjAxN2E5Mzg4ZjgwZWU4Y2Q1ZGY1In0sImlhdCI6MTY3OTk1MDIwMn0.XxZhlX75qERZQ9WBoMs1vt7FaGb2SvgvMsmLKdWCwSM'
            },
            
        })

        const json = await response.json();
        console.log(response);
        console.log(json)
        setNotes(json)
    }

    const addNote = async (title, description, tag) => {

        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMjAxN2E5Mzg4ZjgwZWU4Y2Q1ZGY1In0sImlhdCI6MTY3OTk1MDIwMn0.XxZhlX75qERZQ9WBoMs1vt7FaGb2SvgvMsmLKdWCwSM'
            },
            body: JSON.stringify({title, description, tag})
        })

        const note = {
            _id: "6421d9ai86bb8a16e6ac6c2ca_added",
            user: "6421624a79372edc205281f3",
            title,
            description,
            tag,
            date: "2023-03-27T18:00:08.924Z",
            __v: 0,
        };
        setNotes(notes.concat(note));
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note)=>{return note._id !== id});
        setNotes(newNotes);
    };

    const editNote = async (id, title, description, tag) => {

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMjAxN2E5Mzg4ZjgwZWU4Y2Q1ZGY1In0sImlhdCI6MTY3OTk1MDIwMn0.XxZhlX75qERZQ9WBoMs1vt7FaGb2SvgvMsmLKdWCwSM'
            },
            body: JSON.stringify(title, description, tag)
        })

        const json = response.json();

        for(let i=0;i<notes.length;i++){
            const element = notes[i];
            if(element._id === id){
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
