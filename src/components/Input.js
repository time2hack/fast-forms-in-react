import React, {useRef} from 'react';

const getEventProp = (eventName) => {
  // cases orders by dictionary order of eventName
  switch(eventName) {
    case 'blur': return 'onBlur';
    case 'change': return 'onChange';
    case 'click': return 'onClick';
    case 'focus': return 'onFocus';
    default: return undefined;
  }
}

const Input = ({
  field : { label, type, name, placeholder, validations = [] }
}) => {
  const inputRef = useRef(null)
  const id = `input-id-${+Date.now()}-${Math.random()}`

  const props = validations.reduce((acc, item) => {
    acc[getEventProp(item.on)] = () => {
      console.log(inputRef.current.value)
    }
    return acc;
  }, { id, type, name, placeholder })
  
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input ref={inputRef} {...props} />
    </div>
  )
}

export default Input
