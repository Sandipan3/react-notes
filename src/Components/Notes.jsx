import React, { useEffect, useState } from 'react'
import CreateNote from './CreateNote'
import { v4 as uid } from 'uuid';
import Note from './Note'

function Notes() {

    const [inputText, setInputText] = useState('');
    const [notes, setNotes] = useState([]);
    const [editToggle, setEditToggle] = useState(null);

    function editHandler(id,text) {
      setEditToggle(id);
      setInputText(text);
    }

    function deleteHandler(id) {
      const newNotes = notes.filter(n => n.id !== id);
      setNotes(newNotes);
    }
    
    function saveHandler(){
      if(editToggle){
        setNotes(notes.map((note)=>(
          note.id === editToggle ? {...note, text: inputText } : note 
        )));
       
      }
      else{
        setNotes((prevNotes)=>
        [...prevNotes,{
          id:uid(),
          text: inputText,
        }]
      )}
      setInputText(''); 
      setEditToggle(null);
    
    }

    useEffect(()=>{
      const data = JSON.parse(localStorage.getItem('Notes'));
      if(data){
        setNotes(data)
      };
    },[])

     useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('Notes', JSON.stringify(notes));
    }
  }, [notes]);

  return (
    <div className='notes
    max-w-screen-xl mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {
        notes.map((note)=>(
          editToggle === note.id ? 
          <CreateNote inputText={inputText} setInputText={setInputText} saveHandler={saveHandler} />
          :
          <Note key={note.id} id={note.id} text={note.text} editHandler={editHandler} deleteHandler={deleteHandler}></Note>
        ))
      }
      {
        editToggle === null ? 
        <CreateNote inputText={inputText} setInputText={setInputText} saveHandler={saveHandler} />
        : <></>
      }
    </div>
  )
}

export default Notes