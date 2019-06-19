import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Santiago", age: 24 },
      { name: "Leonardo", age: 28 },
      { name: "Santiaga", age: 27 }
    ],
    otherState: "Hey brotha"
  });

  const switchNameHandler = newName => {
    setPersonsState({
      persons: [
        { name: newName, age: 30 },
        { name: "Cristian", age: 28 },
        { name: "Ivan Trolazo", age: 19 }
      ]
    });
  };

  const nameChangedHandler = event => {
    setPersonsState({
      persons: [
        { name: "Santiago", age: 30 },
        { name: event.target.value, age: 28 },
        { name: "Ivan Trolazo", age: 19 }
      ]
    });
  };

  const style = {
    'backgroundColor': 'lightgreen',
    'font': 'inherit',
    'border': '1px solid blue',
    'padding': '8px',
    'cursor': 'pointer'
  };

  return (
    <div className="App">
      <h1>New App</h1>
      <p>This is really working</p>
      <button onClick={() => switchNameHandler("Rodrigo Polo")}
      style={style}>
        Switch Name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, "Santiago")}
        changed={nameChangedHandler}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
