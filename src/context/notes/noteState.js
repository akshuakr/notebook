import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            _id: "6421d80d6bb8a16e6ac6c2c2",
            user: "6421624a79372edc205281f3",
            title: "Title 1",
            description: "this is note 1.",
            tag: "test",
            date: "2023-03-27T17:53:17.371Z",
            __v: 0,
        },
        {
            _id: "6421d9626bb8a16e6ac6c2c5",
            user: "6421624a79372edc205281f3",
            title: "Title 2",
            description: "this is note 2.",
            tag: "a",
            date: "2023-03-27T17:58:58.032Z",
            __v: 0,
        },
        {
            _id: "6421d9a86bb8a16e6ac6c2ca",
            user: "6421624a79372edc205281f3",
            title: "Title 3",
            description: "this is note 3.",
            tag: "General",
            date: "2023-03-27T18:00:08.924Z",
            __v: 0,
        },
        {
            _id: "6421d9a86bb81a16e6ac6c2ca",
            user: "6421624a79372edc205281f3",
            title: "Title 4",
            description: "this is note 4.",
            tag: "General",
            date: "2023-03-27T18:00:08.924Z",
            __v: 0,
        },
        {
            _id: "6421d9a826bb8a16e6ac6c2ca",
            user: "6421624a79372edc205281f3",
            title: "Title 5",
            description: "this is note 5.",
            tag: "General",
            date: "2023-03-27T18:00:08.924Z",
            __v: 0,
        },
        {
            _id: "6421d9qa86bb8a16e6ac6c2ca",
            user: "6421624a79372edc205281f3",
            title: "Title 6",
            description: "this is note 6.",
            tag: "General",
            date: "2023-03-27T18:00:08.924Z",
            __v: 0,
        },
        {
            _id: "6421d9ad86bb8a16e6ac6c2ca",
            user: "6421624a79372edc205281f3",
            title: "Title 7",
            description: "this is note 7.",
            tag: "General",
            date: "2023-03-27T18:00:08.924Z",
            __v: 0,
        },
        {
            _id: "6421d9a86bb8a1c6e6ac6c2ca",
            user: "6421624a79372edc205281f3",
            title: "Title 8",
            description: "this is note 8.",
            tag: "General",
            date: "2023-03-27T18:00:08.924Z",
            __v: 0,
        },
        {
            _id: "6421bd9a86bb8a16e6ac6c2ca",
            user: "6421624a79372edc205281f3",
            title: "Title 9",
            description: "this is note 9.",
            tag: "General",
            date: "2023-03-27T18:00:08.924Z",
            __v: 0,
        },
        {
            _id: "6421md9a86bb8a16e6ac6c2ca",
            user: "6421624a79372edc205281f3",
            title: "Title 10",
            description: "this is note 10.",
            tag: "General",
            date: "2023-03-27T18:00:08.924Z",
            __v: 0,
        },
        {
            _id: "6421ld9a86bb8a16e6ac6c2ca",
            user: "6421624a79372edc205281f3",
            title: "Title 11",
            description: "this is note 11.",
            tag: "General",
            date: "2023-03-27T18:00:08.924Z",
            __v: 0,
        },
        {
            _id: "6421d9ap86bb8a16e6ac6c2ca",
            user: "6421624a79372edc205281f3",
            title: "Title 12",
            description: "this is note 12.",
            tag: "General",
            date: "2023-03-27T18:00:08.924Z",
            __v: 0,
        },
        {
            _id: "6421d9ag86bb8a16e6ac6c2ca",
            user: "6421624a79372edc205281f3",
            title: "Title 13",
            description: "this is note 13.",
            tag: "General",
            date: "2023-03-27T18:00:08.924Z",
            __v: 0,
        },
        {
            _id: "6421d9ai86bb8a16e6ac6c2ca",
            user: "6421624a79372edc205281f3",
            title: "Title 14",
            description: "this is note 14.",
            tag: "General",
            date: "2023-03-27T18:00:08.924Z",
            __v: 0,
        },
    ];

    const [notes, setNotes] = useState(notesInitial);

    const addNote = (title, description, tag) => {
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

    const editNote = () => {};

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
