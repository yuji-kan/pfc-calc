import React, { useState } from "react";
import "./App.css";

const CALORIE_LOWER_LIMIT = 1.3;

function App() {
  return (
    <>
      <Welcome name="Edite" />
      <div className="container">
        <Input
          type="number"
          name="basal_metabolic_rate"
          title="基礎代謝"
        />
      </div>
    </>
  );
}

function Input(props) {

  const [calorie, calcCaroie] = useState();

  const handleCalcCaroie = event => {
    calcCaroie(event.target.value * CALORIE_LOWER_LIMIT);
  };
  return (
    <div className="form-input">
      <div className="form-input">
        <label htmlFor={props.name} className="required">
          {props.title}
        </label>
        <input
          type={props.type}
          name={props.name}
          id={props.name}
          onChange={handleCalcCaroie}
        />
        <p className="mytext">{calorie}</p>
      </div>
    </div>
  );
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default App;
