import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  // States
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 'dsadsa' ,name: "Santiago", age: 24 },
      { id: 'fdgsgd' ,name: "Leonardo", age: 28 },
      { id: 'ytyerw' ,name: "Santiaga", age: 27 }
    ],
  });
  
  const [showPersonsState, setShowPersonsState] = useState({ showPersons: false })
  
  const [imageState, setImageState] = useState(
    {
      imageUrl: '',
      showImage: false
    }
  )

  const deletePersonHandler = (personIndex) => {
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({
      persons: persons
    })
  }

  const nameChangedHandler = (event, id) => {
    // We need to get the index of the person that is being edited, with the id given in the parameter
    const personIndex = personsState.persons.findIndex( p => {
      // Find the person if the id matches
      return p.id === id;
    });

    // The object person found will be the person according to the index previously found
    const personFound = {
      ...personsState.persons[personIndex]
    }

    // Get the name constantly from event given when the input changes
    personFound.name = event.target.value;

    // Get the unmutaded list of persons from the copy of the state
    const persons = [...personsState.persons];
    persons[personIndex] = personFound;

    // Update the persons
    setPersonsState({ persons: persons });
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


  const imageStyle = {
    'width': '10em',
    'height': '10em'
  }

  let persons = null;

  if (showPersonsState.showPersons) {
    persons = (
      <div>
        {
          personsState.persons.map((person, index) => {
            return (
              <Person 
              name={person.name} 
              age={person.age} 
              click={() => deletePersonHandler(index)}
              key={person.id}
              changed={(event) => nameChangedHandler(event, person.id)}/>
            )
          }
          )
        }
      </div>
    );
    style.backgroundColor = 'red'
  }

  let classes = []

  if(personsState.persons.length <= 2){
    classes.push('red');
  }
  if(personsState.persons.length <= 1){
    classes.push('bold');
  }

  return (
    <div className="App">
      <h1>New App</h1>
      <p className={classes.join(' ')}>This is really working</p>
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
    </div>
  );
};

export default App;
