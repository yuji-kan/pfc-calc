import React, { useState } from "react";
import Title from "./components/Title";
import "./App.css";

const BASAL_METABOLIC_RATE = 1470;
const CALORIE_LOWER_LIMIT = 1.3;

function App() {
  return (
    <>
      <Title title="PFCバランス計算" />
      <div className="container">
        <Input
          type="number"
          value={BASAL_METABOLIC_RATE}
          name="basal_metabolic_rate"
          title="基礎代謝"
        />
      </div>
    </>
  );
}

function Input(props) {
  const [state, setState] = useState(BASAL_METABOLIC_RATE);
  const [calorie, calcCaroie] = useState(
    BASAL_METABOLIC_RATE * CALORIE_LOWER_LIMIT
  );
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
          value={state}
          onChange={event => handleCalcCaroie(event.target.value)}
        />
        <p className="mytext">{calorie}</p>
      </div>
    </div>
  );
}

export default App;
