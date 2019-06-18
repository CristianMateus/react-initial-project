import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Santiago', age: 24 },
      { name: 'Leonardo', age: 28 },
      { name: 'Santiaga', age: 27 }
    ],
    otherState: 'Hey brotha'
  });

  console.log(personsState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Rodrigo Polo', age: 30 },
        { name: 'Leonardo', age: 28 },
        { name: 'Ivan Trolazo', age: 19 }
      ]
    })
  }
  
  return (
    <div className="App">
      <h1>New App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  )
  // return React.createElement('div', {className: 'App'} , React.createElement('h1', null, 'yooo thots!'))
}

export default App;


