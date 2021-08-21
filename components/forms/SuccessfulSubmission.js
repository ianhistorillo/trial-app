import SubmissionMsg from './SubmissionMsg';
import Button from '../ui/Button';
import classes from './Form.module.css';

const SuccessfulSubmission = (props) => {

  return (
    <div className={classes.successfulSubmission}>
      { props.form ? 
        <SubmissionMsg 
          heading="You have signed up successfully"
          subHeading="We’ll be in touch soon when we’re ready to launch."
          icon="check"
        /> : 
        <SubmissionMsg 
          heading="Message Sent"
          subHeading="We’ll get back to you in two working days."
          icon="envelope"
        />
       }
        <Button theme="pdefault" type="submit" onClick={props.close}> Close </Button>
    </div>
  );
}

export default SuccessfulSubmission;