import React, {Fragment, useRef, useEffect} from 'react'
import getId from '../../utils/get-id'

export default React.forwardRef(({options = [], label, registerField, ...props}, ref) => {
  const refs = useRef([])
  refs.current = options.map(item => useRef(null))
  useEffect(() => {
    registerField(props.name, refs)
  }, [registerField, props.name])
  return (
    <Fragment>
      <label>{label}</label>
      <span className="flex-col">
        {options.map((item, index) => {
          const id = getId()
          return (
            <span key={id}>
              <input id={id} {...props} value={item.value} ref={refs.current[index]} />
              <label htmlFor={id}>{item.label}</label>
            </span>
          )
        })}
      </span>
    </Fragment>
  )
})