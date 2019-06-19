import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {

  // States
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Santiago", age: 24 },
      { name: "Leonardo", age: 28 },
      { name: "Santiaga", age: 27 }
    ],
  });

  const [showPersonsState, setShowPersonsState] = useState({ showPersons: false })

  const [imageState, setImageState] = useState(
    {
      imageUrl: '',
      showImage: false
    }
  )

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

  const togglePersonsHandler = () => {
    const doesShow = showPersonsState.showPersons;
    setShowPersonsState({
      showPersons: !doesShow,
    })
    const doesShowImage = imageState.showImage;
    setImageState({
      imageUrl: 'https://cdn140.picsart.com/293050368051211.png?r1024x1024',
      showImage: !doesShowImage
    })
  }

  const style = {
    'backgroundColor': 'lightgreen',
    'font': 'inherit',
    'border': '1px solid blue',
    'padding': '8px',
    'cursor': 'pointer'
  };

  const imageStyle = {
    'width': '10em',
    'height': '10em'
  }

  let persons = null;

  if (showPersonsState.showPersons) {
    persons = (
      <div>
        {
          personsState.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })
        }
      </div>
    )
  }

  return (
    <div className="App">
      <h1>New App</h1>
      <p>This is really working</p>
      <button
        style={style}
        onClick={togglePersonsHandler}>
        Switch Name
      </button>
      <br></br>
      {imageState.showImage === true ?
        <img src={imageState.imageUrl} alt={"logo"} style={imageStyle}></img>
        : null
      }
      <br></br>
      {persons}
      {/* <div>
          <Person
            name={personsState.persons[0].name}
            age={personsState.persons[0].age} />
          <Person
            name={personsState.persons[1].name}
            age={personsState.persons[1].age}
            onClick={switchNameHandler.bind(this, "Santiago")}
            changed={nameChangedHandler} > My Hobbies: Racing </Person>
          <Person
            name={personsState.persons[2].name}
            age={personsState.persons[2].age} />
        </div> */}
    </div>
  );
};

export default App;
