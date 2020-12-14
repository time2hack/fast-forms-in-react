import React, {useRef} from 'react'
import Input from './Input'
import FIELDS from '../FIELDS'
import serialize from '../utils/serialize-formdata'
import './Form.css'

export default function Form() {
  const form = useRef(null)
  const inputWithError = useRef(null)

  const fieldRefs = useRef({})

  const registerField = (key, ref) => {
    fieldRefs.current = {...fieldRefs.current, [key]: ref}
  }
  
  const getField = (key) => {
    return (
      Array.isArray(fieldRefs.current[key].current)
        ? fieldRefs.current[key].current[0]
        : fieldRefs.current[key]
    ).current
  }

  const resetError = (errorFieldKey) => {
    if (errorFieldKey) {
      const field = getField(errorFieldKey)
      if (!field) {
        return
      }
      field.setCustomValidity('');
      field.reportValidity();
    }
  }

  const handleChange = (key, ...args) => {
    resetError(inputWithError.current)
  }

  const customValidations = FIELDS.reduce(
    (acc, field) => field?.validations
      ? {...acc, [field.name]: field.validations}
      : acc
    , {}
  )

  const onSubmit = (e) => {
    e.preventDefault()
    if (inputWithError.current) {
      resetError(inputWithError.current)
    }

    if (!form.current.checkValidity()) {
      return false;
    }

    const formData = serialize(new FormData(form.current))
    
    let error = null
    // Check for custom validations
    const isValid = Object.keys(customValidations).reduce((acc, key) => {
      const validations = customValidations[key]
      const validity = validations.reduce((prevResult, validatorFn) => {
        // short circuit the validations if previous one has failed
        if (!prevResult) {
          return false
        }
        // previous one was valid, let's check for current validator and return the result
        const [valid, err] = validatorFn(formData[key], key, formData, form.current)
        if (!valid) {
          error = err
        }
        return valid
      }, true)

      acc[key] = validity;
      return acc;
    }, {})
    
    if (Object.keys(isValid).length) {
      const errField = Object.keys(isValid)[0]
      inputWithError.current = errField
      const field = getField(errField)
      if (!field) {
        return
      }
      field.setCustomValidity(error);
      field.reportValidity();
    }
  }

  return (
    <form className="form" ref={form} onSubmit={onSubmit}>
      {FIELDS.map((field) => (
        <Input
          key={field.name}
          field={field}
          registerField={registerField}
          onChange={handleChange}
        />
      ))}
      <button type='submit'>Submit</button>
    </form>
  )
}
