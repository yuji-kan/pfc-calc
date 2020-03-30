import React, { useState } from "react"
import food from "../data/food"

function Form(props) {
  // input form
  const [basalMetabolicRate, setBasalMetabolicRate] = useState(0)
  const [intakeCoefficient, setIntakeCoefficient] = useState(0)
  const [bodyWeight, setbodyWeight] = useState(0)
  const [bodyFat, setBodyFat] = useState(0)
  const [proteinCoefficient, setProteinCoefficient] = useState(0)
  const [mealTimes, setMealTimes] = useState(0)

  // output
  const [wLeanBodyMass, setwLeanBodyMass] = useState(0)
  const [wCalorieIntakeDay, setwCalorieIntakeDay] = useState(0)
  const [
    wChickenBreastCalorieIntake,
    setwChickenBreastCalorieIntake
  ] = useState(0)
  const [wChickenBreast, setwChickenBreast] = useState(0)
  const [wChickenBreastCalorie, setwChickenBreastCalorie] = useState(0)
  const [wOtherProtainCalorie, setwOtherProtainCalorie] = useState(0)
  const [wSweetPotato, setwSweetPotato] = useState(0)
  const [wChickenBreastOnce, setwChickenBreastOnce] = useState(0)
  const [wSweetPotatoOnce, setwSweetPotatoOnce] = useState(0)

  // submit button
  const submitHandler = e => {
    e.preventDefault()

    setwLeanBodyMass(bodyWeight - bodyWeight * (bodyFat / 100))
    setwCalorieIntakeDay(
      basalMetabolicRate !== 0 && intakeCoefficient !== 0
        ? basalMetabolicRate * intakeCoefficient
        : 0
    )
    setwChickenBreastCalorieIntake(
      bodyWeight !== 0
        ? parseInt(bodyWeight - bodyWeight * (bodyFat / 100)) *
            proteinCoefficient
        : 0
    )
    setwChickenBreast(
      bodyWeight !== 0
        ? parseInt(
            ((parseInt(bodyWeight - bodyWeight * (bodyFat / 100)) *
              proteinCoefficient) /
              food.chickenBreast.protein) *
              100
          )
        : ""
    )
    setwChickenBreastCalorie(
      parseInt(
        (parseInt(
          ((parseInt(bodyWeight - bodyWeight * (bodyFat / 100)) *
            proteinCoefficient) /
            food.chickenBreast.protein) *
            100
        ) /
          100) *
          food.chickenBreast.calorie
      )
    )
    setwOtherProtainCalorie(
      parseInt(
        basalMetabolicRate * intakeCoefficient -
          parseInt(
            (parseInt(
              ((parseInt(bodyWeight - bodyWeight * (bodyFat / 100)) *
                proteinCoefficient) /
                food.chickenBreast.protein) *
                100
            ) /
              100) *
              food.chickenBreast.calorie
          )
      )
    )
    setwSweetPotato(
      parseInt(
        ((basalMetabolicRate * intakeCoefficient) / food.sweetPotato.calorie) *
          100
      )
    )
    setwChickenBreastOnce(
      mealTimes !== 0
        ? parseInt(
            parseInt(
              ((parseInt(bodyWeight - bodyWeight * (bodyFat / 100)) *
                proteinCoefficient) /
                food.chickenBreast.protein) *
                100
            ) / mealTimes
          )
        : 0
    )
    setwSweetPotatoOnce(
      mealTimes !== 0
        ? parseInt(
            parseInt(
              ((basalMetabolicRate * intakeCoefficient) /
                food.sweetPotato.calorie) *
                100
            ) / mealTimes
          )
        : 0
    )
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className='container'>
          <div className='form-input'>
            <div className='form-input'>
              <label htmlFor='basalMetabolicRate' className='required'>
                基礎代謝(1000-2500kcal)
              </label>
              <input
                type='number'
                name='basalMetabolicRate'
                id='basalMetabolicRate'
                min={1000}
                max={2500}
                onChange={e => setBasalMetabolicRate(e.target.value)}
              />
            </div>
          </div>
          <div className='form-input'>
            <div className='form-input'>
              <label htmlFor='intakeCoefficient' className='required'>
                摂取係数(1.3-1.7)ダイエット目的なら低く
              </label>
              <input
                type='number'
                name='intakeCoefficient'
                id='intakeCoefficient'
                min={1.3}
                max={1.7}
                step='0.1'
                onChange={e => setIntakeCoefficient(e.target.value)}
              />
            </div>
          </div>
          <div className='form-input'>
            <div className='form-input'>
              <label htmlFor='bodyWeight' className='required'>
                体重(40-140kg)
              </label>
              <input
                type='number'
                name='bodyWeight'
                id='bodyWeight'
                min={40}
                max={140}
                onChange={e => setbodyWeight(e.target.value)}
              />
            </div>
          </div>
          <div className='form-input'>
            <div className='form-input'>
              <label htmlFor='bodyFat' className='required'>
                体脂肪(3-25%)
              </label>
              <input
                type='number'
                name='bodyFat'
                id='bodyFat'
                min={3}
                max={40}
                onChange={e => setBodyFat(e.target.value)}
              />
            </div>
          </div>
          <div className='form-input'>
            <div className='form-input'>
              <label htmlFor='proteinCoefficient' className='required'>
                タンパク質摂取係数(2-2.5)多め推奨
              </label>
              <input
                type='number'
                name='proteinCoefficient'
                id='proteinCoefficient'
                min={2}
                max={2.5}
                step='0.1'
                onChange={e => setProteinCoefficient(e.target.value)}
              />
            </div>
          </div>
          <div className='form-input'>
            <div className='form-input'>
              <label htmlFor='mealTimes' className='required'>
                1日の食事回数(3-6回)食事回数は多いのが◎
              </label>
              <input
                type='number'
                name='mealTimes'
                id='mealTimes'
                min={3}
                max={6}
                onChange={e => setMealTimes(e.target.value)}
              />
            </div>
          </div>
          <button>計算</button>
        </div>

        <div className='container'>
          <h4>除脂肪体重 : {wLeanBodyMass}kg</h4>
          <h4>1日のカロリー摂取量 : {wCalorieIntakeDay}kcal</h4>
          <h4>
            おすすめの1日に摂取するタンパク質量 : {wChickenBreastCalorieIntake}g
          </h4>
          <h4>1日のタンパク質を摂取できる鶏むね肉の量 : {wChickenBreast}g</h4>
          <h4>1日に摂取する鶏むね肉のカロリー : {wChickenBreastCalorie}kcal</h4>
          <h4>タンパク質以外で摂取するカロリー : {wOtherProtainCalorie}kcal</h4>
          <h4>1日に摂取するサツマイモの量 : {wSweetPotato}g</h4>
          <h4>
            食事が1日{mealTimes}回の場合、1回に摂取する鶏むね肉の量 :{" "}
            {wChickenBreastOnce}g
          </h4>
          <h4>
            食事が1日{mealTimes}回の場合、1回に摂取するサツマイモの量 :
            {wSweetPotatoOnce}g
          </h4>
        </div>
      </form>
    </>
  )
}

export default Form
