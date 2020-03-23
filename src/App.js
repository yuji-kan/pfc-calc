import React from "react"
import Title from "./components/Title"
import Form from "./components/Form"
import "./App.css"

// const CALORIE_LOWER_LIMIT = 1.3;

function App() {
  return (
    <>
      <Title title='タンパク質足りてる！？' />
      <div className='container'>
        <Form />
      </div>
      {/*
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
      </div> */}
    </>
  )
}

export default App
