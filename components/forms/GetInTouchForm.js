import Link from 'next/link';

import useWindowSize from '../../hooks/useWindowSize';
import TextInput from '../ui/TextInput';
import CheckboxInput from '../ui/CheckboxInput';
import Button from '../ui/Button';

import classes from './Form.module.css';
import { Fragment } from 'react';

const GetInTouch = (props) => {
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
        <TextInput type="textarea" label="Message" width="fullwidth"/>
        
        <CheckboxInput> 
          By checking this box I agree with the 
          <Link href='/privacy-policy'>
            <span className={classes.link}> Privacy Policy.</span>
          </Link>
           Opt out. anytime.
        </CheckboxInput>
        <CheckboxInput> 
          I agree to receive marketing communications, newsletters and promotional offers from EarthMeter.
        </CheckboxInput>

        { width > 600 ? (
          <Fragment>
            <Button theme="sdefault" type="submit" onClick={props.close}> Cancel </Button>
            <Button theme="pdefault" type="submit" onClick={props.success}> Send </Button>
          </Fragment>
        ) :
          <Fragment>
            <Button theme="pdefault" type="submit" onClick={props.success}> Send </Button>
            <Button theme="sdefault" type="submit" onClick={props.close}> Cancel </Button>
          </Fragment>
        }

        
    </form>
  );
}

export default GetInTouch;