import React from 'react'
import Form from './components/Form'
import './styles.css'

export default function App() {
  return (
    <div className="App">
      <h1>React Fast Forms</h1>
      <small>
        Read <a href='https://time2hack.com/form-with-react-html5-validations/'>Building Fast Forms in React with HTML5 & Validations</a>
        for detailed explanation
      </small>
      <hr />
      <Form />
    </div>
  )
}
