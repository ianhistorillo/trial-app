import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
     className={`${classes.button} ${classes[props.theme]}`}
     type={props.type || 'button'}
     onClick={props.onClick}
     >
        {props.children}
     </button>
  );
}

export default Button;