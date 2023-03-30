import React, {useState} from 'react'
import NoteContext from './noteContext'

const NoteState = (props) =>{

    const notesInitial = [
        {
          "_id": "6421d80d6bb8a16e6ac6c2c2",
          "user": "6421624a79372edc205281f3",
          "title": "Title 1",
          "description": "this is note 1.",
          "tag": "test",
          "date": "2023-03-27T17:53:17.371Z",
          "__v": 0
        },
        {
          "_id": "6421d9626bb8a16e6ac6c2c5",
          "user": "6421624a79372edc205281f3",
          "title": "Title 2",
          "description": "this is note 2.",
          "tag": "a",
          "date": "2023-03-27T17:58:58.032Z",
          "__v": 0
        },
        {
          "_id": "6421d9a86bb8a16e6ac6c2ca",
          "user": "6421624a79372edc205281f3",
          "title": "Title 4",
          "description": "this is note 4.",
          "tag": "General",
          "date": "2023-03-27T18:00:08.924Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

    return(

        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>

        
    )
}

export default NoteState;