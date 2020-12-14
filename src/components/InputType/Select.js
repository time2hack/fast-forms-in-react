import React, {Fragment, useEffect} from 'react'
import getId from '../../utils/get-id'

export default React.forwardRef(({options, registerField, ...props}, ref) => {
  useEffect(() => {
    registerField(props.name, ref)
  }, [registerField, props.name])

  const id = getId()
  return (
    <Fragment>
      <label htmlFor={id}>{props.label}</label>
      <select ref={ref} {...props}>
        {options.map(item => (
          <option key={item.value} value={item.value} selected={item.selected}>
            {item.label}
          </option>
        ))}
      </select>
    </Fragment>
  )
})