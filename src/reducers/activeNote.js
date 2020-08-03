export default function activeNote( state = null, action ) {
    switch (action.type) {
        case 'setActiveNote':
            return action.note
    
        default:
           return state
    }
}