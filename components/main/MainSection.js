import classes from './MainSection.module.css';
import Logo from './Logo';
import Button from '../ui/Button';

const MainSection = (props) => {

  return (
    <div className={classes.spacing}>
      <Logo type="white"/>
        <h1 className={classes.heading}> 
          Measure and reduce
        </h1>
        <h1 className={classes.heading}> 
          the environmental
        </h1>
        <h1 className={classes.heading}> 
          impact of your
        </h1>
        <h1 className={classes.heading}> 
          website and apps
        </h1>
        <p className={classes.subHeading}> The digital sustainability analytics platform </p>
        <Button theme="primary" type="submit" onClick={props.firstForm}> Sign up for early acccess </Button>
        <p className={classes.getInTouch} onClick={props.secondForm}> Get in Touch </p>
    </div>
  );
}

export default MainSection;