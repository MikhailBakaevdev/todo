import React, { useState, useRef } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';


function App() {

  const dispatch = useDispatch()

  const notes = useSelector(state => state.notes)
  const activeNote = useSelector(state => state.activeNote)
  const dateCreated = activeNote ? moment(activeNote.dateCreated).format("MMM Do YY") : null ;
  const [createMode,setCreateMode] = useState(false)

  const headerRef = useRef(null)
  const contentRef = useRef(null)

  function handleSave () {
    if(!headerRef.current || !contentRef.current) {
      return
    }

    const headerValue = headerRef.current.value
    const contentValue = contentRef.current.value

    dispatch({ type: 'createNote', payload: {header: headerValue, content: contentValue }})
  }


  return (
    <div className="App">
      <div className={"main-container" + (createMode ? " blur" : "") }>
        <div className="App-left">
          <div className="App-left__search">
            <input type="text" placeholder="Search"/>
          </div>
          <div className="App-left__listContainer">
            <ul className="App-list">
            { notes.map(note => {
              return (
                <li key={note.id} className="App-list-item" onClick={ ()=> dispatch({ type:'setActiveNote', note })  }>
                  <p className="App-list-item__header">
                    {note.header}
                  </p>
                  <p className="App-list-item__date">
                    {moment(note.dateCreated).format("MMM Do YY")}
                  </p>
                </li>
              )
            })}
            </ul>
          </div>
        </div>
        <div className="App-right">
          <div className="App-right__header">
            <button className="App-add" onClick={ () => {setCreateMode(true)} }>
              +
            </button>
            <span className="App-date">
            {dateCreated}
            </span>
            <button className="App-delete" onClick={() => {activeNote && dispatch({type: 'deleteNote', noteId: activeNote.id})}}>
              X
            </button>
          </div>
          <div className="App-right__note">
            <div className="App-right__note__text" contentEditable="true">
              {activeNote && activeNote.content}
            </div>
          </div>
        </div>
      </div>
      <div className="popUpOverlay" style={{ display: createMode ? 'flex' : 'none' }}>
        <div className="popUpAddNote">
          <input type="text" className="popUpAddNote__header" placeholder="Title" ref={headerRef}/>
          <button className="popUpAddNote__close" onClick={ () => {setCreateMode(false)} }>X</button>
          <textarea className="popUpAddNote__content" placeholder="Type your note there..." ref={contentRef}></textarea>
          <button className="popUpAddNote__save" onClick={() => {handleSave();setCreateMode(false)}}>Save</button>
        </div>
      </div>
    </div>
  );
}
// create search , create local storage, create editable with saves, clear forms
export default App;
