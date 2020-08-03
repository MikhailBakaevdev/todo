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
    return state
}