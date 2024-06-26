import React, { useState, useEffect } from 'react';
import { useStyletron } from "baseui";
import Footer from '../footer/Foot';
import Title from '../title/Title';
import Description from '../description/Description';

const Main = ({ activeNote, onUpdateNote, setActiveNote }) => {

  const [css] = useStyletron();

  const [editedNote, setEditedNote] = useState(null);
  const [originalNote, setOriginalNote] = useState(null);

  useEffect(() => {
    setEditedNote(activeNote);
    setOriginalNote(activeNote);
  }, [activeNote]);

  const onEditField = (field, value) => {
    setEditedNote({
      ...editedNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  const handleSave = () => {
    onUpdateNote(editedNote);
  };

  const handleCancel = () => {
    setEditedNote(originalNote); // Reset editedNote to originalNote
  };

  //if there is no active note then it will display this message 
  if (!editedNote) return <div className={css({ margin: 'auto', color: 'gray', fontSize: '20px' })}>No Active Note</div>;

  return (
    <div className={css({
      width: '75%', height: '100vh', marginLeft: '20px', marginRight: '20px',
      '@media (max-width: 1280px)': {
        width: '100%',
        height: 'auto',
        marginLeft: '10px',
        marginRight: '10px',
      }
    })}>

      <div className={css({
        margin: '10px',
        '@media (max-width: 1280px)': {
          margin: '5px',
        }
      })}>

        <Title value={editedNote.title} onChange={(e) => onEditField("title", e.target.value)} autoFocus/>

        <div className={css({
          margin: '20px',
          '@media (max-width: 1280px)': {
            margin: '10px',
          }
        })}></div>

        <Description value={editedNote.body} onChange={(e) => onEditField("body", e.target.value)}/>

        <Footer onSave={handleSave} onCancel={handleCancel} />

      </div>
    </div>
  );
};

export default Main;
