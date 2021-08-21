import Link from 'next/link';

import useWindowSize from '../../hooks/useWindowSize';
import TextInput from '../ui/TextInput';
import CheckboxInput from '../ui/CheckboxInput';
import Button from '../ui/Button';

import classes from './Form.module.css';
import { Fragment } from 'react';

const SignupForm = (props) => {
  const { width } = useWindowSize();

  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log('submission');
  };

  return (
    <form className={classes.form} onSubmit={formSubmissionHandler}>
        <TextInput type="text" label="First Name"/>
        <TextInput type="text" label="Last Name" />
        <TextInput type="text" label="Company" width="fullwidth"/>
        <TextInput type="email" label="Email" width="fullwidth"/>
        <CheckboxInput> 
          By checking this box I agree with the 
        <Link href='/privacy-policy'>
          <span className={classes.link}> Privacy Policy.</span>
        </Link>
        </CheckboxInput>

        { width > 600 ? (
          <Fragment>
            <Button theme="sdefault" type="submit" onClick={props.close}> Cancel </Button>
            <Button theme="pdefault" type="submit" onClick={props.success}> Sign Up </Button>
          </Fragment>
        ) :
          <Fragment>
            <Button theme="pdefault" type="submit" onClick={props.success}> Sign Up </Button>
            <Button theme="sdefault" type="submit" onClick={props.close}> Cancel </Button>
          </Fragment>
        }
      
        <p className={classes.agreementText}> 
          We will handle your information in line with our 
          <Link href='/privacy-policy'>
            <span className={classes.link}> Privacy Policy.</span>
          </Link>
          If you prefer not to receive marketing emails from EarthMeter, you can opt out 
          of all marketing communications or customise your preferences <span className={classes.link}> here.</span>
        </p>
        <p className={classes.styledLink}> Terms & Conditions </p>
        <Link href='/privacy-policy'>
          <p className={classes.styledLink}> Privacy Policy </p>
        </Link>
    </form>
  );
}

export default SignupForm;