import classes from './CheckboxInput.module.css';

const CheckboxInput = (props) => {

  return (
    <div className={classes.formControl}>
        <input className={classes.checkbox} type="checkbox" />
        <label> {props.children} </label>
    </div>
  );
}

export default CheckboxInput;