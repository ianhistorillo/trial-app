import classes from './Layout.module.css';

const HeadingText = (props) => {
  
  return (
    <h1 className={`${classes[props.type]} ${classes.heading}`}>
        {props.text}
    </h1>
  );
}

export default HeadingText;