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
          "title": "Title 3",
          "description": "this is note 3.",
          "tag": "General",
          "date": "2023-03-27T18:00:08.924Z",
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
          },
          {
            "_id": "6421d9a86bb8a16e6ac6c2ca",
            "user": "6421624a79372edc205281f3",
            "title": "Title 5",
            "description": "this is note 5.",
            "tag": "General",
            "date": "2023-03-27T18:00:08.924Z",
            "__v": 0
          },
          {
            "_id": "6421d9a86bb8a16e6ac6c2ca",
            "user": "6421624a79372edc205281f3",
            "title": "Title 6",
            "description": "this is note 6.",
            "tag": "General",
            "date": "2023-03-27T18:00:08.924Z",
            "__v": 0
          },
          {
            "_id": "6421d9a86bb8a16e6ac6c2ca",
            "user": "6421624a79372edc205281f3",
            "title": "Title 7",
            "description": "this is note 7.",
            "tag": "General",
            "date": "2023-03-27T18:00:08.924Z",
            "__v": 0
          },
          {
            "_id": "6421d9a86bb8a16e6ac6c2ca",
            "user": "6421624a79372edc205281f3",
            "title": "Title 8",
            "description": "this is note 8.",
            "tag": "General",
            "date": "2023-03-27T18:00:08.924Z",
            "__v": 0
          },
          {
            "_id": "6421d9a86bb8a16e6ac6c2ca",
            "user": "6421624a79372edc205281f3",
            "title": "Title 9",
            "description": "this is note 9.",
            "tag": "General",
            "date": "2023-03-27T18:00:08.924Z",
            "__v": 0
          },
          {
            "_id": "6421d9a86bb8a16e6ac6c2ca",
            "user": "6421624a79372edc205281f3",
            "title": "Title 10",
            "description": "this is note 10.",
            "tag": "General",
            "date": "2023-03-27T18:00:08.924Z",
            "__v": 0
          },
          {
            "_id": "6421d9a86bb8a16e6ac6c2ca",
            "user": "6421624a79372edc205281f3",
            "title": "Title 11",
            "description": "this is note 11.",
            "tag": "General",
            "date": "2023-03-27T18:00:08.924Z",
            "__v": 0
          },
          {
            "_id": "6421d9a86bb8a16e6ac6c2ca",
            "user": "6421624a79372edc205281f3",
            "title": "Title 12",
            "description": "this is note 12.",
            "tag": "General",
            "date": "2023-03-27T18:00:08.924Z",
            "__v": 0
          },
          {
            "_id": "6421d9a86bb8a16e6ac6c2ca",
            "user": "6421624a79372edc205281f3",
            "title": "Title 13",
            "description": "this is note 13.",
            "tag": "General",
            "date": "2023-03-27T18:00:08.924Z",
            "__v": 0
          },
          {
            "_id": "6421d9a86bb8a16e6ac6c2ca",
            "user": "6421624a79372edc205281f3",
            "title": "Title 14",
            "description": "this is note 14.",
            "tag": "General",
            "date": "2023-03-27T18:00:08.924Z",
            "__v": 0
          },
      ]

      const [notes, setNotes] = useState(notesInitial)

    return(

        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>

        
    )
}

export default NoteState;