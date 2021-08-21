import classes from './Logo.module.css';

const Logo = (props) => {
  return (
    <div className={`${classes[props.type]}`}>
    </div>
  );
}

export default Logo;