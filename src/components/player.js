import React, { useState, useEffect } from 'react';

export default function Player({ choice, setCompChoice, setChoice, compChoice }) {
  const [result, setResult] = useState('');




  const PlayerChoice = (e) => {

    setChoice(e.target.textContent);
        
    let index = Math.ceil(Math.random() * 3);

    if (index === 1) {
      setCompChoice('Scissors');
    } else if (index === 2) {
      setCompChoice('Paper');
    } else {
      setCompChoice('Rock');
    }

 
  }

  useEffect(() => {
    console.log(choice);
    console.log(compChoice);

    if (
      (compChoice === 'Scissors' && choice === 'Paper') ||
      (compChoice === 'Rock' && choice === 'Scissors') ||
      (compChoice === 'Paper' && choice === 'Rock')
    ) {
      setResult('You Lost');
    } else if (
      (compChoice === 'Scissors' && choice === 'Rock') ||
      (compChoice === 'Rock' && choice === 'Paper') ||
      (compChoice === 'Paper' && choice === 'Scissors')
    ) {
      setResult('You Win');
    } else if((compChoice === 'Scissors' && choice === 'Scissors') ||
    (compChoice === 'Rock' && choice === 'Rock') ||
    (compChoice === 'Paper' && choice === 'Paper')) {
      setResult('Draw');
    }
    else{setResult("")}
  }, [choice, compChoice]);




 
  return (
    <>

      <div className='player'>
        <div className='buttons'>
        <button onClick={PlayerChoice}>Rock</button>
        <button onClick={PlayerChoice}>Paper</button>
        <button onClick={PlayerChoice}>Scissors</button>

        </div>
      
        {choice !== '' ? `You choose ${choice}` : 'Choose one'}
      </div>
      <div className='result'>{result}</div>

      <div className='Computer'>{choice !== '' ? `I choose ${compChoice}` : ''}</div>

    </>
  );
}
