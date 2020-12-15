import React, {Fragment, useRef, useEffect} from 'react'
import getId from '../../utils/get-id'

export default React.forwardRef(({registerField, ...props}, ref) => {
  const refs = useRef([])
  refs.current = (props.options || []).map(item => useRef(null))
  useEffect(() => {
    registerField(props.name, props.options ? refs : ref);
  }, [registerField, props.name, props.options, ref]);
  const id = getId()
  return (
    <Fragment>
      <label htmlFor={id}>{props.label}</label>
      {props.options ? (
        <span className="flex-col">
          {props.options.map((item, index) => {
            const id = getId()
            return (
              <span key={id}>
                <input id={id} {...props} value={item.value} ref={refs.current[index]} />
                <label htmlFor={id}>{item.label}</label>
              </span>
            )
          })}
        </span>
      ) : <input id={id} {...props} ref={ref} />}
    </Fragment>
  )
})