import React, { useState } from "react"
import food from "../data/food"
// import lists from "../data/lists"
import List from "./List"

function Form(props) {
  // input
  const [basalMetabolicRate, setBasalMetabolicRate] = useState("")
  const [intakeCoefficient, setIntakeCoefficient] = useState("")
  const [bodyWeight, setbodyWeight] = useState(0)
  const [bodyFat, setBodyFat] = useState(0)
  const [proteinCoefficient, setProteinCoefficient] = useState("")
  const [mealTimes, setMealTimes] = useState(0)

  let wMeal = []
  let wLeanBodyMass // 除脂肪体重(kg)
  let wCalorieIntakeDay // 1日のカロリー摂取量(kcal)
  let wChickenBreastCalorieIntake // おすすめの1日に摂取するタンパク質量(g)
  let wChickenBreast //1日のタンパク質を摂取できる鶏むね肉の量(g)
  let wChickenBreastCalorie // 1日の鶏むね肉だけのカロリー
  let wOtherProtainCalorie // タンパク質以外のカロリー(kcal)
  let wSweetPotato // 1日に摂取するサツマイモの量(g)
  let wChickenBreastOnce // 1回に摂取する鶏むね肉の量(g)
  let wSweetPotatoOnce //  1回に摂取するサツマイモの量(g)
  // output
  // submitHandler
  const submitHandler = e => {
    e.preventDefault()
    // alert(
    //   `入力は、${basalMetabolicRate} ${intakeCoefficient} ${bodyWeight} ${basalMetabolicRate} ${bodyFat} ${proteinCoefficient} ${mealTimes}`
    // )
    // let wLeanBodyMass // 除脂肪体重(kg)
    // let wCalorieIntakeDay // 1日のカロリー摂取量(kcal)
    // let wChickenBreastCalorieIntake // おすすめの1日に摂取するタンパク質量(g)
    // let wChickenBreast //1日のタンパク質を摂取できる鶏むね肉の量(g)
    // let wChickenBreastCalorie // 1日の鶏むね肉だけのカロリー
    // let wOtherProtainCalorie // タンパク質以外のカロリー(kcal)
    // let wSweetPotato // 1日に摂取するサツマイモの量(g)
    // let wChickenBreastOnce // 1回に摂取する鶏むね肉の量(g)
    // let wSweetPotatoOnce //  1回に摂取するサツマイモの量(g)

    let wMeal = []
    wLeanBodyMass = parseInt(bodyWeight - bodyWeight * (bodyFat / 100))
    wMeal.push({
      title: "除脂肪体重(kg)",
      value: wLeanBodyMass
    })
    basalMetabolicRate !== "" && intakeCoefficient !== ""
      ? (wCalorieIntakeDay = basalMetabolicRate * intakeCoefficient)
      : (wCalorieIntakeDay = 0)
    wMeal.push({
      title: "1日のカロリー摂取量(kcal)",
      value: wCalorieIntakeDay
    })
    bodyWeight !== ""
      ? (wChickenBreast = wChickenBreastCalorieIntake =
          wLeanBodyMass * proteinCoefficient)
      : (wChickenBreastCalorieIntake = "")
    wMeal.push({
      title: "1おすすめの1日に摂取するタンパク質量(g)",
      value: wChickenBreastCalorieIntake
    })

    bodyWeight !== ""
      ? (wChickenBreast = parseInt(
          (wChickenBreastCalorieIntake / food.chickenBreast.protein) * 100
        ))
      : (wChickenBreast = "")
    wMeal.push({
      title: "1日のタンパク質を摂取できる鶏むね肉の量(g)",
      value: wChickenBreast
    })
    wChickenBreastCalorie = parseInt(
      (wChickenBreast / 100) * food.chickenBreast.calorie
    )
    wMeal.push({
      title: "1日の鶏むね肉だけのカロリー",
      value: wChickenBreastCalorie
    })
    wOtherProtainCalorie = parseInt(wCalorieIntakeDay - wChickenBreastCalorie)
    wMeal.push({
      title: "タンパク質以外のカロリー(kcal)",
      value: wOtherProtainCalorie
    })
    wSweetPotato = parseInt(
      (wCalorieIntakeDay / food.sweetPotato.calorie) * 100
    )
    wMeal.push({
      title: "1日に摂取するサツマイモの量(g)",
      value: wSweetPotato
    })
    mealTimes !== 0
      ? (wChickenBreastOnce = parseInt(wChickenBreast / mealTimes))
      : (wChickenBreastOnce = null)
    wMeal.push({
      title: "1回に摂取する鶏むね肉の量(g)",
      value: wChickenBreastOnce
    })
    mealTimes !== 0
      ? (wSweetPotatoOnce = parseInt(wSweetPotato / mealTimes))
      : (wSweetPotatoOnce = null)
    wMeal.push({
      title: "1回に摂取するサツマイモの量(g)",
      value: wSweetPotatoOnce
    })
    console.log(wMeal)
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
          <button>計算</button>
        </div>

        {/* <div className='container'>
        <h4>除脂肪体重 : {wLeanBodyMass}kg</h4>
        <h4>1日のカロリー摂取量 : {wCalorieIntakeDay}kcal</h4>
        <h4>
          おすすめの1日に摂取するタンパク質量 : {wChickenBreastCalorieIntake}g
        </h4>
        <h4>1日のタンパク質を摂取できる鶏むね肉の量 : {wChickenBreast}g</h4>
        <h4>1日の鶏むね肉だけのカロリー : {wChickenBreastCalorie}kcal</h4>
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
      </div> */}

        <div className='container'>
          <List list={wMeal} />
        </div>
      </form>
    </>
  )
}

export default Form
