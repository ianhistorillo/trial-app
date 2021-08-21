import Link from 'next/link';
   
import classes from './PreviousPage.module.css';

const PreviousPage = () => {
  
  return (
    <div>
      <Link href='/'>
        <div className={classes.icon}>
        </div>
      </Link>
      <Link href='/'>
            <h1 className={classes.label}>
                Back to previous page
            </h1>
      </Link>
    </div>
  );
} 

export default PreviousPage;