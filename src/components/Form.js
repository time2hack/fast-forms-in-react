import React, {useRef} from 'react'
import Input from './Input'
import './Form.module.css'

const FIELDS = {
  fullName: {
    type: 'text', // input type
    name: 'fullName', // Form input name
    label: 'Full Name', // Label for Input
    placeholder: "John Doe", // Placeholder
    validations: [{
      on: 'change',
      error: 'This field is required',
      validator: (value) => Boolean(value)
    }],
  }
}

export default function Form() {
  const fields = Object.keys(FIELDS)
  return (
    <form className="form">
      {fields.map((fieldKey) => (
        <Input key={fieldKey} field={FIELDS[fieldKey]} />
      ))}
    </form>
  )
}
