import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial);

    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMjAyODQ5Mzg4ZjgwZWU4Y2Q1ZGZjIn0sImlhdCI6MTY3OTk1MDQ2OH0.VxYNt7rH8KMig-lsSGs67ySI2y3NAGY6lgTE5BYrQKY",
            },
        });

        const json = await response.json();
        console.log(json);
        setNotes(json);
    };

    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMjAyODQ5Mzg4ZjgwZWU4Y2Q1ZGZjIn0sImlhdCI6MTY3OTk1MDQ2OH0.VxYNt7rH8KMig-lsSGs67ySI2y3NAGY6lgTE5BYrQKY",
            },
            body: JSON.stringify({ title, description, tag }),
        });

        const note = await response.json();
        setNotes(notes.concat(note));
    };

    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMjAyODQ5Mzg4ZjgwZWU4Y2Q1ZGZjIn0sImlhdCI6MTY3OTk1MDQ2OH0.VxYNt7rH8KMig-lsSGs67ySI2y3NAGY6lgTE5BYrQKY",
            },
        });

        const json = await response.json();
        console.log(json);
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        });
        setNotes(newNotes);
    };

    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMjAyODQ5Mzg4ZjgwZWU4Y2Q1ZGZjIn0sImlhdCI6MTY3OTk1MDQ2OH0.VxYNt7rH8KMig-lsSGs67ySI2y3NAGY6lgTE5BYrQKY",
            },
            body: JSON.stringify(title, description, tag),
        });

        const json = await response.json();
        console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes));

        for (let i = 0; i < newNotes.length; i++) {
            const element = newNotes[i];
            if (element._id === id) {
                newNotes[i].title = title;
                newNotes[i].description = description;
                newNotes[i].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    };

    return (
        <NoteContext.Provider
            value={{ notes, addNote, deleteNote, editNote, getNotes }}
        >
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
