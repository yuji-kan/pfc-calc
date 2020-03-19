import React, { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Input from "./components/Input";
import "./App.css";

// const CALORIE_LOWER_LIMIT = 1.3;
// const food = {
//   chicken_breast: {
//     energy: 108,
//     protein: 22.3,
//     fat: 108,
//     carbo: 0
//   },
//   sweet_potato: {
//     energy: 108,
//     protein: 22.3,
//     fat: 108,
//     carbo: 0
//   }
// };

function App() {
  const [values, setValues] = useState({
    basalMetabolicRate: 0,
    intakeCoefficient: 0,
    bodyWeight: 0,
    bodyFat: 0,
    proteinCoefficient: 0,
    mealTimes: 0
  });

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(value);
    setValues({ ...values, [name]: value });
  }

  return (
    <>
      <Title title="PFCバランス計算" />
      <div className="container">
        <Form>
          <Input
            type="number"
            name="basalMetabolicRate"
            title="基礎代謝(1000-4000kcal)"
            required={true}
            minValue={1000}
            maxValue={4000}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            name="intakeCoefficient"
            title="摂取係数(1.3-1.7)"
            min={1.3}
            maxValue={1.7}
            required={true}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            name="bodyWeight"
            title="体重(kg)"
            minValue={40}
            maxValue={90}
            required={true}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            name="bodyFat"
            title="体脂肪(%)"
            minValue={3}
            maxValue={25}
            required={true}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            name="proteinCoefficient"
            title="タンパク質摂取係数(2-2.5)"
            minValue={2}
            maxValue={2.5}
            required={true}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            name="mealTimes"
            title="1日の食事回数(3-6回)"
            minValue={3}
            maxValue={6}
            required={true}
            onChange={handleInputChange}
          />
        </Form>
      </div>
      <div className="container">
        <Input
          type="number"
          name="Lean_body_mass"
          title="除脂肪体重(kg)"
          value={1200}
        />
        <Input
          type="number"
          name="Calorie_intake"
          title="おすすめの1日の摂取カロリー(kcal)"
          value={1100}
        />
        <Input
          type="number"
          name="Calorie intake"
          title="おすすめの1日に摂取タンパク質量(g)"
          value={112}
        />
      </div>
      <div className="container">
        <Input
          type="number"
          name="chicken_breast"
          title="おすすめの1日に摂取する鶏むね肉の量(g)"
          value={112}
        />
        <Input
          type="number"
          name="sweet_potato"
          title="おすすめの1日に摂取するサツマイモの量(g)"
          value={112}
        />
      </div>
      <div className="container">
        <Input
          type="number"
          name="chicken_breast_once"
          title="1回に摂取する鶏むね肉の量(g)"
          value={112}
        />
        <Input
          type="number"
          name="sweet_potato_once"
          title="1回に摂取するサツマイモの量(g)"
          value={112}
        />
      </div>
    </>
  );
}

export default App;
