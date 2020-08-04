import { v4 as uuidv4 } from 'uuid';
const initialState = [ 
    {
        header: 'tits',
        dateCreated: new Date(2020,1,1),
        content: '1',
        id: uuidv4()
    }, 
    {
        header: 'thanks',
        dateCreated: new Date(2020,2,3),
        content: '2',
        id: uuidv4()
    }, 
    {
        header: 'sfjgvmegjrs;lgjv,;',
        dateCreated: new Date(2020,4,5),
        content: '2666',
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
            console.log(action)
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
        case 'searchNote': 
            if(!action.value){
                return state
            } else {
                return state.filter( note => {
                    return  note.header.includes(action.value)
                }) 
            }

        default : 
            return state
    }
}