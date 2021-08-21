import React, { useState } from 'react';
import classes from './TextInput.module.css';

const TextInput = (props) => {
  const [value, setValue] = useState('');
  
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className={`${classes.inputContainer} ${classes[props.width]}`}>
      <input className={classes.inputText} type={props.type} value={value} onChange={handleChange} />
      <label className={value && `${classes.filled}`} htmlFor="name">
      {props.label}
      </label>
    </div>
  );
}

export default TextInput;