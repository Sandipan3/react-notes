import React from 'react'

function CreateNote({inputText, setInputText, saveHandler}) {
    const char =100;
    const charLimit= char - inputText.length; 
  return (
    <div className='note 
     bg-white/10 backdrop-blur-md shadow-inner border border-white/30 rounded-lg text-white min-h-2
        flex flex-col justify-between break-words'>
        <textarea 
        cols={10} 
        rows={5} 
        placeholder='Type...' 
        maxLength={100} 
        onChange={(event)=> setInputText(event.target.value)}
        value={inputText}
        className='whitespace-pre w-auto bg-transparent border-none text-white resize-none text-lg mx-4 px-2.5 py-1 tracking-widest focus:outline-none placeholder:text-white text-wrap overflow-y-hidden '>
        </textarea>

        <div className="note-footer flex justify-between items-center mb-4">
            <span className="label mx-4 px-2.5 py-1">{charLimit} Left</span>
            <button className='note-save bg-transparent transition duration-100 ease-in-out border border-white rounded-md text-white mx-4 px-2.5 py-1 text-sm cursor-pointer 
            hover:bg-white hover:border-white hover:text-purple-900' 
            onClick={saveHandler}>
                Save
            </button>
        </div>
    </div>
  )
}

export default CreateNote