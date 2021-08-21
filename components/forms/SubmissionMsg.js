import classes from './Form.module.css';

const SubmissionMsg = (props) => {

  return (
    <div>
      <div className={`${classes[props.icon]}`}></div>
        <h1 className={classes.successMessage}> {props.heading} </h1>
        <p className={classes.textMessage}> {props.subHeading}  </p>
    </div>
  );
}

export default SubmissionMsg;