import React, { ChangeEvent, useState, FormEvent } from 'react';
import food from "../data/food"

const Form: React.FC = () => {
    const BASE: number = 0.1;
    function orgFloor(value: number, base: number): number {
        return Math.floor(value * base) / base;
    }

    // input useState set 
    const [basalMetabolicRate, setBasalMetabolicRate] = useState("")
    const [intakeCoefficient, setIntakeCoefficient] = useState("")
    const [bodyWeight, setbodyWeight] = useState("")
    const [bodyFat, setBodyFat] = useState("")
    const [proteinCoefficient, setProteinCoefficient] = useState("")
    const [mealTimes, setMealTimes] = useState("")

    // form input and set
    const inputChange01 = (e: ChangeEvent<HTMLInputElement>) => {
        setBasalMetabolicRate(e.target.value)
    }
    const inputChange02 = (e: ChangeEvent<HTMLInputElement>) => {
        setIntakeCoefficient(e.target.value)
    }
    const inputChange03 = (e: ChangeEvent<HTMLInputElement>) => {
        setbodyWeight(e.target.value)
    }
    const inputChange04 = (e: ChangeEvent<HTMLInputElement>) => {
        setBodyFat(e.target.value)
    }
    const inputChange05 = (e: ChangeEvent<HTMLInputElement>) => {
        setProteinCoefficient(e.target.value)
    }
    const inputChange06 = (e: ChangeEvent<HTMLInputElement>) => {
        setMealTimes(e.target.value)
    }

    // output set
    const [wLeanBodyMass, setwLeanBodyMass] = useState("")
    const [wCalorieIntakeDay, setwCalorieIntakeDay] = useState("")
    const [
        wChickenBreastCalorieIntake,
        setwChickenBreastCalorieIntake
    ] = useState("")
    const [wChickenBreast, setwChickenBreast] = useState("")
    const [wChickenBreastCalorie, setwChickenBreastCalorie] = useState("")
    const [wOtherProtainCalorie, setwOtherProtainCalorie] = useState("")
    const [wSweetPotato, setwSweetPotato] = useState("")
    const [wChickenBreastOnce, setwChickenBreastOnce] = useState("")
    const [wSweetPotatoOnce, setwSweetPotatoOnce] = useState("")

    // submit button
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setwLeanBodyMass(String(Number(bodyWeight) - Number(bodyWeight) * (Number(bodyFat) / 100)))

        setwCalorieIntakeDay(
            Number(basalMetabolicRate) !== 0 && Number(intakeCoefficient) !== 0
                ? String(orgFloor(Number(basalMetabolicRate) * Number(intakeCoefficient), BASE))
                : ""
        )
        setwChickenBreastCalorieIntake(
            Number(bodyWeight) !== 0
                ? String(
                    orgFloor((Number(bodyWeight) - Number(bodyWeight) * (Number(bodyFat) / 100)) *
                        Number(proteinCoefficient), BASE)
                )
                : ""
        )
        setwChickenBreast(
            Number(bodyWeight) !== 0
                ? String(
                    orgFloor(((Number(bodyWeight) - Number(bodyWeight) * (Number(bodyFat) / 100)) *
                        Number(proteinCoefficient)) /
                        Number(food.chickenBreast.protein) *
                        100, BASE)
                )
                : ""
        )
        setwChickenBreastCalorie(
            String(
                orgFloor(((
                    (
                        (Number(bodyWeight) - Number(bodyWeight) * (Number(bodyFat) / 100)) *
                        Number(proteinCoefficient) /
                        Number(food.chickenBreast.protein) *
                        100
                    ) /
                    100) *
                    Number(food.chickenBreast.calorie)), BASE)
            )
        )
        setwOtherProtainCalorie(
            String(
                orgFloor((Number(basalMetabolicRate) * Number(intakeCoefficient) -
                    (
                        (Number(bodyWeight) - Number(bodyWeight) * (Number(bodyFat) / 100)) *
                        Number(proteinCoefficient) /
                        Number(food.chickenBreast.protein) *
                        100
                        /
                        100) *
                    Number(food.chickenBreast.calorie)), BASE)
            )
        )
        setwSweetPotato(
            String(
                orgFloor((((Number(basalMetabolicRate) * Number(intakeCoefficient)) / Number(food.sweetPotato.calorie)) *
                    100), BASE)
            )
        )
        setwChickenBreastOnce(
            Number(mealTimes) !== 0
                ? String(
                    orgFloor(((
                        (Number(bodyWeight) - Number(bodyWeight) * (Number(bodyFat) / 100)) *
                        Number(proteinCoefficient) /
                        Number(food.chickenBreast.protein)) *
                        100
                    ) / Number(mealTimes), BASE)
                )
                : ""
        )
        setwSweetPotatoOnce(
            Number(mealTimes) !== 0
                ? String(
                    orgFloor((
                        ((Number(basalMetabolicRate) * Number(intakeCoefficient)) /
                            Number(food.sweetPotato.calorie)) *
                        100
                    ) / Number(mealTimes), BASE)
                )
                : ""
        )
    }

    return (
        <>
            <div className='wrapper'>
                <form className="contact-form" onSubmit={submitHandler}>
                    <div className="input-fields">

                        <input
                            type='number'
                            name='basalMetabolicRate'
                            id='basalMetabolicRate'
                            min={1000}
                            max={2500}
                            onChange={inputChange01}
                            placeholder="基礎代謝(kcal)"
                        />
                        <input
                            type='number'
                            name='intakeCoefficient'
                            id='intakeCoefficient'
                            min={1.3}
                            max={1.7}
                            step='0.1'
                            onChange={inputChange02}
                            placeholder="摂取係数(1.3-1.7) for diet 1.3"
                        />
                        <input
                            type='number'
                            name='bodyWeight'
                            id='bodyWeight'
                            min={40}
                            max={140}
                            onChange={inputChange03}
                            placeholder="体重(40-140kg)"
                        />
                        <input
                            type='number'
                            name='bodyFat'
                            id='bodyFat'
                            min={3}
                            max={40}
                            onChange={inputChange04}
                            placeholder="体脂肪(3-25%)"
                        />
                        <input
                            type='number'
                            name='proteinCoefficient'
                            id='proteinCoefficient'
                            min={2}
                            max={2.5}
                            step='0.1'
                            onChange={inputChange05}
                            placeholder="Protein摂取係数(2-2.5) 2.5推奨"
                        />
                        <input
                            type='number'
                            name='mealTimes'
                            id='mealTimes'
                            min={3}
                            max={6}
                            onChange={inputChange06}
                            placeholder="1日の食事回数(3-6回)"
                        />
                        <button className="btn">=</button>
                    </div>

                    <div className="output">
                        <p>除脂肪体重 : {wLeanBodyMass}kg</p>
                        <p>1日のカロリー摂取量 : {wCalorieIntakeDay}kcal</p>
                        <p>1日の目標Protein摂取量 : {wChickenBreastCalorieIntake}g</p>
                        <p>鶏むね肉の量/day : {wChickenBreast}g</p>
                        <p>鶏むね肉摂取カロリー/day : {wChickenBreastCalorie}kcal</p>
                        <p>Protein以外の摂取カロリー : {wOtherProtainCalorie}kcal</p>
                        <p>サツマイモの量/day : {wSweetPotato}g</p>
                        <p>食事が1日{mealTimes}回の場合、1回に摂取する鶏むね肉の量 : {wChickenBreastOnce}g</p>
                        <p>食事が1日{mealTimes}回の場合、1回に摂取するサツマイモの量 : {wSweetPotatoOnce}g</p>
                    </div>


                </form>
            </div>
        </>
    )
}

export default Form
