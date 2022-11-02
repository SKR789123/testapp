import logo from './logo.svg';
import './App.css';
import React,{createContext, useContext, useDebugValue, useEffect, useRef, useState} from 'react'
import canada from './canada1.jpg'

function App() {

  const moods = {
    happy:'maru',
    sad:'appa'
  }

  const count = useRef(0)

  const myBtn = useRef(null)

  const clickIt = () => myBtn.current.click()
  
  const MoodContext = createContext(moods)

  const displayName = useDisplayName()

  function MoodText(){
    const mood = useContext(MoodContext)
  
    return <p>{mood}</p>
  }
  
  
  return (
    <MoodContext.Provider value={moods.sad}>

    
    <div className="App">
      <header className="App-header">
        <img src={canada} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button>{displayName}</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcom React 
        </a>
        <MoodText />
        <button onClick={()=>count.current++}>
          {count.current}
        </button>
        <button ref={myBtn} onClick={()=>alert(count.current)}>
          see count
        </button>
        <button >
          test
        </button>
      </header>
    </div>
    </MoodContext.Provider>
  );
}



function useDisplayName(){

  const [name, setName] = useState();

  useEffect(()=>{

    fetch('https://randomuser.me/api/')
    .then(response=>{
      response.json()
      .then(data=>{
        setName(data.results[0].email)
      })
      
    })


  },[])

  useDebugValue(name ?? 'loading')

  return name;

} 

export default App;
