import React from 'react';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { Search } from 'baseui/icon';
import { useStyletron } from "baseui";
import { SIZE } from 'baseui/input';
import {styled} from 'baseui';



const Sidebar = ({notes,onAddNote,onDeleteNote,activeNote,setActiveNote,searchTerm,setSearchTerm,}) => {

  const [css] = useStyletron();

  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNotes = sortedNotes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const StyledNote = styled('div', ({ $active }) => ({
    display: 'block',
    padding: '10px',
    marginBottom: '10px',
    cursor: 'pointer',
    borderRadius:'6px',
    backgroundColor: $active ? 'lightgray' : '#F5F5F5', // Conditional background color for active note
    ':hover': {
      backgroundColor: '#f0f0f0', // Hover background color
    },
  }));

  return (
    <div className={css({width: '25%', height: '100vh', borderRight: '1px solid gray', display: 'flex', flexDirection: 'column', overflow: 'hidden', 
      '@media (max-width: 1280px)': {
          width: '100%',
          height: 'auto',
          borderRight: 'none',
        }})}>

      <div className={css({borderBottom: '1px solid gray', 
      '@media (max-width: 1280px)': {
            borderBottom: 'none',
          },})}>

        <div className={css({display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',
        '@media (max-width: 1280px)': {
              flexDirection: 'column',
              alignItems: 'flex-start',
            }})}>

        <Button onClick={onAddNote} className={css({cursor: 'pointer', padding: '16px 32px', width:'60%',borderRadius: '16px',
        '@media (max-width: 1280px)': {
                width: '100%',
                padding: '10px 20px',
            }})}
        overrides={{
          BaseButton: {
            style:{
              marginTop: '20px',
              marginBottom: '20px'
            }
          }
        }}
        >Create New</Button>
        </div>
      </div>
            
      <div className={css({margin: '15px' ,flex: '1', overflowY: 'auto' ,
      '@media (max-width: 1280px)': {
            margin: '10px',
          }})}>

      <Input 
          type="text"
          placeholder="Search by Title"
          value={searchTerm}
          onChange={handleSearch}
          startEnhancer={<Search size="18px" title="" />}
          size={SIZE.large}
          style={{ marginBottom: '15px', padding: '5px' ,
            '@media (max-width: 768px)': {
              marginBottom: '10px',
            }}}        
        />  

        <div className={css({padding: '20px', cursor: 'pointer',margin: '10px', flex:'1 1 auto' ,overflowY: 'auto','@media (max-width: 1280px)': {
              padding: '10px',
            }})}>

        {filteredNotes.map(({ id, title, lastModified }) => (
          <StyledNote
            key={id}
            $active={id === activeNote} // Pass $active prop to determine active note
            onClick={() => setActiveNote(id)}
          >
            <div className= {css({display: 'flex', justifyContent: 'space-between', alignItems: 'center'})}>
              <strong className={css({overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap',flex: '1'})}>{title}</strong>
              <button onClick={(e) => onDeleteNote(id)} className={css({cursor: 'pointer'})}>Delete</button>
            </div>

            <small className={css({display: 'block', color: '#999'})}>
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small> 

            </StyledNote>
        ))}
        </div> 
      </div>
    </div>
  );
};

export default Sidebar;
