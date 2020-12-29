import React from 'react';

const Form = (props) => {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={event => console.log("value changed!")}
      />
    </div>
  )
}

export default Form;