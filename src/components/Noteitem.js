import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
    const { note, updateNote } = props;
    const context = useContext(noteContext);
    const { deleteNote } = context;

    return (
        <>
            <div className='col-md-3'>
                <div className='card my-3'>
                    <div className='card-body'>
                        <div className='d-flex'>
                            <h5 className='card-title'>{note.title}</h5>
                            <i
                                className='fa-solid fa-pen-to-square mx-2 my-1'
                                onClick={() => {
                                    updateNote(note);
                                }}
                            ></i>
                            <i
                                className='fa-sharp fa-solid fa-trash mx-2 my-1'
                                onClick={() => {
                                    deleteNote(note._id);
                                }}
                            ></i>
                        </div>

                        <p className='card-text'>{note.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Noteitem;
