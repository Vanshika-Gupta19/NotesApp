import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
  const [activeNote, setActiveNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
      body: '',
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
    setActiveNote(null); // Clear active note if deleted
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotesArr);
    setActiveNote(updatedNote.id); //Update active note after save
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div className="App" style={{ display: 'flex', height: '100vh', width: '100%' }}>
      <Sidebar
        notes={notes}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        onAddNote={onAddNote} //Pass onAddNote function to Sidebar
        onDeleteNote={onDeleteNote}
      />
      <Main
        activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote}
        setActiveNote={setActiveNote}
      />
    </div>
  );
}

export default App;
