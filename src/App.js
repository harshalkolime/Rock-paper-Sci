import Player from "./components/player";
import {useState} from 'react'

function App() {

  const [choice, setChoice] = useState("")
  const [compChoice, setCompChoice]= useState("")



  
  return (

    <div className="App">
      
 <Player choice={choice}
 setChoice={setChoice} 
  compChoice={compChoice}
  setCompChoice={setCompChoice} />




    </div>
  );
}

export default App;
