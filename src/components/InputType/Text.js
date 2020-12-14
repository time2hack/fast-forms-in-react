import React, {Fragment, useEffect} from 'react'
import getId from '../../utils/get-id'

export default React.forwardRef(({registerField, ...props}, ref) => {
  useEffect(() => {
    registerField(props.name, ref)
  }, [registerField, props.name])

	const id = getId()
	return (
		<Fragment>
			<label htmlFor={id}>{props.label}</label>
			<input id={id} {...props} ref={ref} />
		</Fragment>
	)
})