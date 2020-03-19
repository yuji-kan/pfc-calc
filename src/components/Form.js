import React, { useState } from "react";

function Form(props) {
  const [basalMetabolicRate, setBasalMetabolicRate] = useState(1500);
  const [intakeCoefficient, setIntakeCoefficient] = useState(1.3);
  const [bodyWeight, setbodyWeight] = useState(65);
  const [bodyFat, setBodyFat] = useState(16);
  const [proteinCoefficient, setProteinCoefficient] = useState(2.5);
  const [mealTimes, setMealTimes] = useState(3);
  const submitHandler = e => {
    e.preventDefault();
    alert(
      `入力は、${basalMetabolicRate} ${intakeCoefficient} ${bodyWeight} ${basalMetabolicRate} ${bodyFat} ${proteinCoefficient} ${mealTimes}`
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-input">
        <div className="form-input">
          <label htmlFor="basalMetabolicRate" className="required">
            基礎代謝(1000-4000kcal)
          </label>
          <input
            value={basalMetabolicRate}
            type="number"
            name="basalMetabolicRate"
            id="basalMetabolicRate"
            min={1000}
            max={4000}
            onChange={e => setBasalMetabolicRate(e.target.value)}
          />
        </div>
      </div>
      <div className="form-input">
        <div className="form-input">
          <label htmlFor="intakeCoefficient" className="required">
            摂取係数(1.3-1.7)
          </label>
          <input
            value={intakeCoefficient}
            type="number"
            name="intakeCoefficient"
            id="intakeCoefficient"
            min={1.3}
            max={1.7}
            step="0.1"
            onChange={e => setIntakeCoefficient(e.target.value)}
          />
        </div>
      </div>
      <div className="form-input">
        <div className="form-input">
          <label htmlFor="bodyWeight" className="required">
            体重(kg)
          </label>
          <input
            value={bodyWeight}
            type="number"
            name="bodyWeight"
            id="bodyWeight"
            min={40}
            max={90}
            onChange={e => setbodyWeight(e.target.value)}
          />
        </div>
      </div>
      <div className="form-input">
        <div className="form-input">
          <label htmlFor="bodyFat" className="required">
            体脂肪(%)
          </label>
          <input
            value={bodyFat}
            type="number"
            name="bodyFat"
            id="bodyFat"
            min={3}
            max={25}
            onChange={e => setBodyFat(e.target.value)}
          />
        </div>
      </div>
      <div className="form-input">
        <div className="form-input">
          <label htmlFor="proteinCoefficient" className="required">
            タンパク質摂取係数(2-2.5)
          </label>
          <input
            value={proteinCoefficient}
            type="number"
            name="proteinCoefficient"
            id="proteinCoefficient"
            min={2}
            max={2.5}
            step="0.1"
            onChange={e => setProteinCoefficient(e.target.value)}
          />
        </div>
      </div>
      <div className="form-input">
        <div className="form-input">
          <label htmlFor="mealTimes" className="required">
            1日の食事回数(3-6回)
          </label>
          <input
            value={mealTimes}
            type="number"
            name="mealTimes"
            id="mealTimes"
            min={3}
            max={6}
            onChange={e => setMealTimes(e.target.value)}
          />
        </div>
      </div>
      <button>入力テスト</button>
    </form>
  );
}

export default Form;
