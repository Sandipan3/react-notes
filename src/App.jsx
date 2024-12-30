import './index.css'
import Header from './Components/Header'
import Notes from './Components/Notes'
function App() {

  return (
   <div className='main max-w-[960px] mx-auto px-4 min-h-screen'>
    <Header/>
    <Notes/>
   </div>
  )
}

export default App
