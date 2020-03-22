import React, { useState } from "react"

function Form(props) {
  const food = {
    chickenBreast: {
      calorie: 108,
      protein: 22.3,
      fat: 108,
      carbo: 0
    },
    sweetPotato: {
      calorie: 264,
      protein: 2.4,
      fat: 0.4,
      carbo: 63
    }
  }
  // input
  const [basalMetabolicRate, setBasalMetabolicRate] = useState("")
  const [intakeCoefficient, setIntakeCoefficient] = useState("")
  const [bodyWeight, setbodyWeight] = useState(0)
  const [bodyFat, setBodyFat] = useState(0)
  const [proteinCoefficient, setProteinCoefficient] = useState("")
  const [mealTimes, setMealTimes] = useState(0)

  // output
  // const [leanBodyMass, setLeanBodyMass] = useState("");

  // submitHandler calc
  const submitHandler = e => {
    e.preventDefault()
    // alert(
    //   `入力は、${basalMetabolicRate} ${intakeCoefficient} ${bodyWeight} ${basalMetabolicRate} ${bodyFat} ${proteinCoefficient} ${mealTimes}`
    // )
  }

  // 除脂肪体重(kg)
  const leanBodyMass = () => {
    return bodyWeight !== ""
      ? parseInt(bodyWeight - bodyWeight * (bodyFat / 100))
      : null
  }

  //1日のカロリー摂取量
  const calorieIntakeDay = () => {
    return basalMetabolicRate !== "" && intakeCoefficient !== ""
      ? basalMetabolicRate * intakeCoefficient
      : null
  }
  //おすすめの1日に摂取するタンパク質量(g)
  const chickenBreastCalorieIntake = () => {
    return bodyWeight !== "" ? leanBodyMass() * proteinCoefficient : ""
  }

  //1日のタンパク質を摂取できる鶏むね肉の量(g)
  const chickenBreast = () => {
    return bodyWeight !== ""
      ? parseInt(
          (chickenBreastCalorieIntake() / food.chickenBreast.protein) * 100
        )
      : ""
  }

  //1日の鶏むね肉だけのカロリー
  const chickenBreastCalorie = () => {
    return parseInt((chickenBreast() / 100) * food.chickenBreast.calorie)
  }

  //タンパク質以外のカロリー(kcal)
  const otherProtainCalorie = () => {
    return parseInt(calorieIntakeDay() - chickenBreastCalorie())
  }

  //1日に摂取するサツマイモの量(g)
  const sweetPotato = () => {
    return parseInt((calorieIntakeDay() / food.sweetPotato.calorie) * 100)
  }

  //1回に摂取する鶏むね肉の量(g)
  const chickenBreastOnce = () => {
    return mealTimes !== 0 ? parseInt(chickenBreast() / mealTimes) : null
  }

  //1回に摂取するサツマイモの量(g)
  const sweetPotatoOnce = () => {
    return mealTimes !== 0 ? parseInt(sweetPotato() / mealTimes) : null
  }
  return (
    <>
      <div className='container'>
        <form onSubmit={submitHandler}>
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
                摂取係数(1.3-1.7)
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
                タンパク質摂取係数(2-2.5)
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
                1日の食事回数(3-6回)
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
          <button>入力テスト</button>
        </form>
      </div>

      <div className='container'>
        <h4>除脂肪体重 : {leanBodyMass()}kg</h4>
        <h4>1日のカロリー摂取量 : {calorieIntakeDay()}kcal</h4>
        <h4>
          おすすめの1日に摂取するタンパク質量 : {chickenBreastCalorieIntake()}g
        </h4>
        <h4>1日のタンパク質を摂取できる鶏むね肉の量 : {chickenBreast()}g</h4>
        <h4>1日の鶏むね肉だけのカロリー : {chickenBreastCalorie()}kcal</h4>
        <h4>タンパク質以外で摂取するカロリー : {otherProtainCalorie()}kcal</h4>
        <h4>1日に摂取するサツマイモの量 : {sweetPotato()}g</h4>
        <h4>
          食事が1日{mealTimes}回の場合、1回に摂取する鶏むね肉の量 :{" "}
          {chickenBreastOnce()}g
        </h4>
        <h4>
          食事が1日{mealTimes}回の場合、1回に摂取するサツマイモの量 :
          {sweetPotatoOnce()}g
        </h4>
      </div>
    </>
  )
}

export default Form
