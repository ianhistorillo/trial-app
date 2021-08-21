import Logo from '../main/Logo';

import classes from './MobileMenu.module.css';

const MainMenu = (props) => {

  return (
    <div className={classes.container}>
        <Logo type="mobile" />
        <div className={classes.close}  onClick={props.close}>
        </div>
    </div>
  );
}

export default MainMenu;