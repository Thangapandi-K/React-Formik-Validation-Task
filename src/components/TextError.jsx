import React from 'react'


//component created for error message styling
const TextError = (props) => {
  return (
    <div className='error'>
        {props.children}
    </div>
  )
}

export default TextError