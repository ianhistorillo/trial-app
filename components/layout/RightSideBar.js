import React, { useState } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import SignupForm from "../forms/SignupForm";
import GetInTouchForm from "../forms/GetInTouchForm";
import SuccessfulSubmission from "../forms/SuccessfulSubmission";
import MobileMenu from '../navbar/MobileMenu';

import HeadingText from './HeadingText';
import classes from './RightSideBar.module.css';

const RightSideBar = (props) => {
  const { width } = useWindowSize();
  const [success, isSuccess] = useState(false);

  const successMsg = () => {
    isSuccess(true);
  }

  return (
    <div className={classes.container}>

        { width < 600 && (
          <MobileMenu />
        )}

        { width > 600 && (
          <div className={classes.close}  onClick={props.close}>
          </div>
        )}

        { success ? <SuccessfulSubmission form={props.activeForm} close={props.close}/> :
          props.activeForm ? 
          <HeadingText text="Sign up for early access" /> : <HeadingText text="Get in touch" />
        }

        { !success ? 
          props.activeForm ? 
          <SignupForm 
            success={successMsg} 
            close={props.close} 
          /> 
          : <GetInTouchForm 
              success={successMsg} 
              close={props.close}
            /> : '' 
        }
      
    </div>
  );
}

export default RightSideBar;