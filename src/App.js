import React from "react"
import Title from "./components/Title"
import Form from "./components/Form"
import "./App.css"

// const CALORIE_LOWER_LIMIT = 1.3;

function App() {
  return (
    <>
      <Title title='タンパク質炭水化物計算' />
      <div className='container'>
        <Form />
      </div>
    </>
  )
}

export default App
