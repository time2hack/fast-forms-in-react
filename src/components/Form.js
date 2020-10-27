import React from 'react'
import css from './Form.module.css'

const FIELDS = {
  fullName: {
    type: 'text', // input type
    name: 'fullName', // Form input name
    label: 'Full Name', // Label for Input
    placeholder: 'John Doe' // Placeholder
  }
}

export function Input({ field }) {
  const id = `input-id-${+Date.now()}-${Math.random()}`
  return (
    <div className="form-field">
      <label htmlFor={id}>{field.label}</label>
      <input
        id={id}
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
      />
    </div>
  )
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
