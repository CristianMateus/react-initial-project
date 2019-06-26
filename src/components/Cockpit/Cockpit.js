import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] 1. rendered useEffect...')
    // Http Request
    const timer = setTimeout(() => {
      alert("Saved data to cloud")
    }, 1000);
    return () => {
      clearTimeout(timer)
      console.log('[Cockpit.js] cleanup work in first use effect')
    }
  }, [])

  useEffect(() => {
    console.log('[Cockpit.js] 2. rendered useEffect')
    return () => {
      console.log('[Cockpit.js] cleanup work in second useEffect')
    }
  })

  const assignedClasses = [];
  let buttonClass = "";

  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  if (props.personsLenght <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLenght <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={buttonClass} onClick={props.togglePersonsHandler}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
