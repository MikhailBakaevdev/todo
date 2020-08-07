import { v4 as uuidv4 } from 'uuid';
const initialState = [ 
    {
        header: 'null',
        dateCreated: new Date(2020,1,1),
        content: '1',
        id: uuidv4()
    },
]

export default function notes( state = initialState, action ) {
    switch (action.type){
        case 'createNote': 
            const note = {
                header: action.payload.header,
                dateCreated: new Date(),
                content: action.payload.content,
                id: uuidv4()
            }
            return [...state, note]
        case 'deleteNote':
            return state.filter( note => {
                return note.id !== action.noteId
            })
        case 'editNote' : 
            return state.map( note => {
                if( note.id !== action.payload.id ) {
                    return note
                } else {
                    return {
                        header: action.payload.header,
                        dateCreated: note.dateCreated,
                        content: action.payload.content,
                        id: note.id
                    }
                }
            })

        default : 
            return state
    }
}