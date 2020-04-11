import React from "react"
import Title from "./components/Title"
import Form from "./components/Form"
import "./App.css"

// const CALORIE_LOWER_LIMIT = 1.3;

function App() {
  return (
    <>
      <Title title='トレーニー用食事計算機' />
      <div className='container'>
        <Form />
      </div>
    </>
  )
}

export default App
