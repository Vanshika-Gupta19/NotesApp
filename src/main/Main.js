import React, { useState, useEffect } from 'react';
import {Textarea} from 'baseui/textarea';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { useStyletron } from "baseui";
import { SIZE } from "baseui/input";

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
    // Reset editedNote to originalNote
    setEditedNote(originalNote);
  };

  //if there is no active note then it will display this message 
  if (!editedNote) return <div className={css({margin: 'auto', color: 'gray', fontSize: '20px'})}>No Active Note</div>;

  return (
    <div className={css({width: '75%', height: '100vh', marginLeft: '20px', marginRight:'20px',
      '@media (max-width: 1280px)': {
          width: '100%',
          height: 'auto',
          marginLeft: '10px',
          marginRight: '10px',
        }})}>

      <div className={css({margin: '10px',
      '@media (max-width: 1280px)': {
            margin: '5px',
          }})}>

        <span className= {css({marginLeft: '5px', fontSize: '25px', fontWeight: 'bold'})}>Title</span>
        
        <Input
          type="text"
          id="title"
          placeholder="Title of Note"
          value={editedNote.title}
          size={SIZE.large}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />

        <div className={css({margin: '20px',
        '@media (max-width: 1280px)': {
              margin: '10px',
            }})}></div>

        <span className={css({fontSize: '25px', fontWeight: 'bold'})}>Description</span>
        <Textarea 
          id="body"
          placeholder="Write your note here..."
          value={editedNote.body}
          size={SIZE.large}
          onChange={(e) => onEditField("body", e.target.value)}
               
          overrides={{
            Input: {
              style: {height: '650px', 
                '@media (max-width: 1280px)': {
                  height: '300px',
                }}
            }
          }}
        />

        <div className={css({display: 'flex', gap: '25px', justifyContent: 'flex-end', marginTop: '60px',
        '@media (max-width: 1280px)': {
              flexDirection: 'column',
              alignItems: 'flex-start',
            }})}>

          <Button onClick={handleCancel} className={css({width: '85px',
          '@media (max-width: 1280px)': {
                width: '100%',
                marginBottom: '10px',
              }})}>Cancel</Button>

          <Button onClick={handleSave} className={css({width: '85px',
          '@media (max-width: 1280px)': {
                width: '100%',
              }})}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
