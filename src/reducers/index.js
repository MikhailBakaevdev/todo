import { combineReducers } from 'redux';
import notes from './notes';
import activeNote from './activeNote';

const rootReducer = combineReducers({
    notes,
    activeNote
})


export default rootReducer