import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Input from "./components/Input";
import "./App.css";

// const CALORIE_LOWER_LIMIT = 1.3;

function App() {
  return (
    <>
      <Title title="PFCバランス計算" />
      <Form>
        <div className="container">
          <Input
            type="number"
            name="basal_metabolic_rate"
            title="基礎代謝"
            value={1500}
            required={true}
          />
          <Input
            type="number"
            name="Intake_coefficient"
            title="摂取係数"
            value={1.3}
            required={true}
          />
          <Input
            type="number"
            name="body_fat"
            title="体脂肪"
            value={16}
            required={true}
          />
        </div>
      </Form>
    </>
  );
}

export default App;
