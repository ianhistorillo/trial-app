import Logo from '../main/Logo';
import Button from '../ui/Button';

import classes from './MainMenu.module.css';

const MainMenu = (props) => {

  return (
    <div className={classes.container}>
        <Logo type="transparent"/>
        <Button theme="navbar" type="submit" onClick={props.success}> Get in touch </Button>
    </div>
  );
}

export default MainMenu;