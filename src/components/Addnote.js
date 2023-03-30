import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const Addnote = () => {
    const { addNote } = useContext(noteContext);
    const [Note, setNote] = useState({title: "", description: "", tag:""})

    const handleClick =(e)=>{
        e.preventDefault();
        addNote(Note.title, Note.description, Note.tag);
    }
    const onChange =(e)=>{
        setNote({...Note, [e.target.name]:[e.target.value]})
    }

    return (
        <>
            <div>
                <h1>Add a Note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            aria-describedby="emailHelp"
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <textarea
                            type="text"
                            className="form-control"
                            id="descrition"
                            name="description"
                            onChange={onChange}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">
                            Tag
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="tag"
                            name="tag"
                            aria-describedby="emailHelp"
                            onChange={onChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handleClick}>
                        Add
                    </button>
                </form>
            </div>
        </>
    );
};

export default Addnote;
