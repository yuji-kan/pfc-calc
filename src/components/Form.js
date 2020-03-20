import React, { useState } from "react";

function Form(props) {
  const food = {
    chickenBreast: {
      energy: 108,
      protein: 22.3,
      fat: 108,
      carbo: 0
    },
    sweetPotato: {
      energy: 108,
      protein: 22.3,
      fat: 108,
      carbo: 0
    }
  };
  const [basalMetabolicRate, setBasalMetabolicRate] = useState(1500);
  const [intakeCoefficient, setIntakeCoefficient] = useState(1.3);
  const [bodyWeight, setbodyWeight] = useState(67);
  const [bodyFat, setBodyFat] = useState(16);
  const [proteinCoefficient, setProteinCoefficient] = useState(2.5);
  const [mealTimes, setMealTimes] = useState(3);

  const submitHandler = e => {
    e.preventDefault();
    alert(
      `入力は、${basalMetabolicRate} ${intakeCoefficient} ${bodyWeight} ${basalMetabolicRate} ${bodyFat} ${proteinCoefficient} ${mealTimes}`
    );
  };
  // ↓出力

  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="form-input">
            <div className="form-input">
              <label htmlFor="basalMetabolicRate" className="required">
                基礎代謝(1000-2500kcal)
              </label>
              <input
                value={basalMetabolicRate}
                type="number"
                name="basalMetabolicRate"
                id="basalMetabolicRate"
                min={1000}
                max={2500}
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
                体重(40-140kg)
              </label>
              <input
                value={bodyWeight}
                type="number"
                name="bodyWeight"
                id="bodyWeight"
                min={40}
                max={140}
                onChange={e => setbodyWeight(e.target.value)}
              />
            </div>
          </div>
          <div className="form-input">
            <div className="form-input">
              <label htmlFor="bodyFat" className="required">
                体脂肪(3-25%)
              </label>
              <input
                value={bodyFat}
                type="number"
                name="bodyFat"
                id="bodyFat"
                min={3}
                max={40}
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
      </div>

      <div className="container">
        <div className="form-input">
          <div className="form-input">
            <label htmlFor="leanBodyMass" className="required">
              除脂肪体重(kg)
            </label>
            <input
              value={
                bodyWeight !== ""
                  ? bodyWeight - bodyWeight * (bodyFat / 100)
                  : ""
              }
              type="number"
              name="leanBodyMass"
              id="leanBodyMass"
            />
          </div>
        </div>
        <div className="form-input">
          <div className="form-input">
            <label htmlFor="calorieIntake" className="required">
              おすすめの1日に摂取するタンパク質量(g)
            </label>
            <input
              value={
                bodyWeight !== ""
                  ? (bodyWeight - bodyWeight * (bodyFat / 100)) *
                    proteinCoefficient
                  : ""
              }
              type="number"
              name="calorieIntake"
              id="calorieIntake"
            />
          </div>
        </div>

        <div className="form-input">
          <div className="form-input">
            <label htmlFor="chickenBreast" className="required">
              おすすめの1日に摂取する鶏むね肉の量(g)
            </label>
            <input
              value={
                bodyWeight !== ""
                  ? (((bodyWeight - bodyWeight * (bodyFat / 100)) *
                      proteinCoefficient) /
                      food.chickenBreast.protein) *
                    100
                  : ""
              }
              type="number"
              name="chickenBreast"
              id="chickenBreast"
            />
          </div>
        </div>

        <div className="form-input">
          <div className="form-input">
            <label htmlFor="sweetPotato" className="required">
              おすすめの1日に摂取するサツマイモの量(g)
            </label>
            <input
              type="number"
              name="sweetPotato"
              id="sweetPotato"
              min={3}
              max={6}
            />
          </div>
        </div>

        <div className="form-input">
          <div className="form-input">
            <label htmlFor="chickenBreastOnce" className="required">
              1回に摂取する鶏むね肉の量(g)
            </label>
            <input
              type="number"
              name="chickenBreastOnce"
              id="chickenBreastOnce"
              min={3}
              max={6}
            />
          </div>
        </div>
        <div className="form-input">
          <div className="form-input">
            <label htmlFor="sweetPotatoOnce" className="required">
              1回に摂取するサツマイモの量(g)
            </label>
            <input
              type="number"
              name="sweetPotatoOnce"
              id="sweetPotatoOnce"
              min={3}
              max={6}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
