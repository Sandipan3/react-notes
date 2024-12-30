import React from 'react'

function Note({id,text, editHandler, deleteHandler}) {
  return (
    <div className='note'>
        <div className="note-body text-white overflow-x-auto">
            <p className='break-words my-4'>{text}</p>
        </div>
        <div className="note-footer">
            <button className='note-save bg-transparent transition duration-100 ease-in-out border border-white rounded-md text-white mx-4 px-2.5 py-1 text-sm cursor-pointer 
            hover:bg-white hover:border-white hover:text-purple-900' 
            onClick={()=>deleteHandler(id)}>
            Delete       
            </button>
            <button className='note-save bg-transparent transition duration-100 ease-in-out border border-white rounded-md text-white mx-4 px-2.5 py-1 text-sm cursor-pointer 
            hover:bg-white hover:border-white hover:text-purple-900' 
            onClick={()=>editHandler(id,text)}>
            Edit           
            </button>
        </div>
    </div>
  )
}

export default Note;