import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";

const Notes = () => {
    const { notes, getNotes, editNote } = useContext(noteContext);
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, []);

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({
        id: "",
        etitle: "",
        edescription: "",
        etag: "",
    });

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({
            id: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag
        });
    };

    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
    };
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Addnote/>

            <button
                type='button'
                ref={ref}
                className='btn btn-primary d-none'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
            >
                Launch demo modal
            </button>

            <div
                className='modal fade'
                id='exampleModal'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
            >
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalLabel'>
                                Edit Note
                            </h5>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'
                            ></button>
                        </div>
                        <div className='modal-body'>
                            <form>
                                <div className='mb-3'>
                                    <label
                                        htmlFor='title'
                                        className='form-label'
                                    >
                                        Title
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='etitle'
                                        name='etitle'
                                        minLength={3}
                                        required
                                        value={note.etitle}
                                        aria-describedby='emailHelp'
                                        onChange={onChange}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label
                                        htmlFor='description'
                                        className='form-label'
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        type='text'
                                        className='form-control'
                                        id='edescription'
                                        name='edescription'
                                        minLength={5}
                                        required
                                        value={note.edescription}
                                        onChange={onChange}
                                    ></textarea>
                                </div>
                                <div className='mb-3'>
                                    <label
                                        htmlFor='tag'
                                        className='form-label'
                                    >
                                        Tag
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='etag'
                                        name='etag'
                                        value={note.etag}
                                        onChange={onChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-secondary'
                                data-bs-dismiss='modal'
                                ref = {refClose}
                            >
                                Close
                            </button>
                            <button
                                onClick={handleClick}
                                type='button'
                                disabled={note.etitle.length < 3 || note.edescription.length < 5}
                                className='btn btn-primary'
                            >
                                Update Note
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-3'>
                <h2>Your Notes</h2>
                <div className="container">
                {notes.length === 0 &&  'No Notes to Display' }
                </div>
                {notes.map((note) => {
                    return (
                        <Noteitem
                            key={note._id}
                            note={note}
                            updateNote={updateNote}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Notes;
