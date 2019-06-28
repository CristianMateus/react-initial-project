import React, { Component } from "react";

// CSS classes
import classes from "./Person.css";

// Higher Order Components
import Auxiliary from "../../../higherOrderComponents/Auxiliary";
import withClass from "../../../higherOrderComponents/withClass";

// External Libraries
import PropTypes from "prop-types";

// Context
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus()
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated)
  }

  render() {
    return (
      <Auxiliary>
          {this.context.authenticated? <p>Authenticated!</p> : <p>Please Log In</p>}
          <p onClick={this.props.click}>
            I'm {this.props.name} and I'm {this.props.age} years old
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            // ref = {(inputEl) => {this.inputElement = inputEl}}
            ref={this.inputElementRef}
            onChange={this.props.changed}
            value={this.props.name}
          />
        </Auxiliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
