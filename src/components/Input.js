import React, {useRef} from 'react'
import PropTypes from 'prop-types'

import TextInputRenderer from './InputType/Text'
import RadioInputRenderer from './InputType/Radio'
import SelectInputRenderer from './InputType/Select'
import CheckboxInputRenderer from './InputType/Checkbox'

const getRenderer = (type) => {
  switch(type.toLowerCase()) {
    case 'tel':
    case 'url':
    case 'text':
    case 'date':
    case 'time':
    case 'file':
    case 'week':
    case 'month':
    case 'image':
    case 'email':
    case 'color':
    case 'range':
    case 'number':
    case 'search':
    case 'password':
      return TextInputRenderer
    case 'radio': return RadioInputRenderer
    case 'select': return SelectInputRenderer
    case 'checkbox': return CheckboxInputRenderer
    default: return 'div'
  }
}

const Input = ({
  field = {},
  onChange = () => {},
  registerField = () => {},
}) => {
  const inputRef = useRef(null)

  const Component = getRenderer(field.type)

  return (
    <div className="form-field">
      <Component
        {...field}
        ref={inputRef}
        registerField={registerField}
        onChange={(...args) => onChange(field.name, ...args)}
      />
    </div>
  )
}

Input.propTypes = {
  field: PropTypes.object.isRequired,
  registerField: PropTypes.func,
  onChange: PropTypes.func,
}

export default Input
