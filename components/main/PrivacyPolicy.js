import HeadingText from '../layout/HeadingText'; 
import PreviousPage from '../layout/PreviousPage';

import classes from './PrivacyPolicy.module.css';



const PrivacyPolicy = () => {

  return (
    <div className={classes.main}>
        <PreviousPage />
        <HeadingText type="h1" text="Privacy Policy" />
        <HeadingText type="subheading" text="Background" />
        <p>
            We understand that your privacy is important to you and that you care about how your personal 
            data is used and shared online. We respect and value the privacy of everyone who visits our website, 
            earthmeter.com (“Our Site”) and will only collect and use personal data in ways that are described 
            here, and in a manner that is consistent with Our obligations and your rights under the law.
        </p>
        <p>
            Please read this Privacy Policy carefully and ensure that you understand it. Your acceptance of Our 
            Privacy Policy is deemed to occur upon your first use of Our Site. If you do not accept and agree 
            with this Privacy Policy, you must stop using Our Site immediately.
        </p>

        <HeadingText type="subheading" text="Definition and interpretation" />
        <p>
            In this Policy the following terms shall have the following meanings:
        </p>

        <ul>
            <li>
                <span className={classes.item}> “Account” </span> 
                means an account required to access and/or use certain areas and features of Our Site;
            </li>
            <li>
                <span className={classes.item}> “Cookie Law” </span> 
                means the relevant parts of the Privacy and Electronic Communications (EC Directive)
                Regulations 2003;
            </li>
            <li>
                <span className={classes.item}> “personal data” </span> 
                means any and all data that relates to an identifiable person who can be directly or 
                indirectly identified from that data. In this case, it means personal data that you give to Us 
                via Our Site. This definition shall, where applicable, incorporate the definitions provided in 
                the EU Regulation 2016/679 – the General Data Protection Regulation (“GDPR”); and
            </li>
            <li>
                <span className={classes.item}> “We/Us/Our” </span>  
                means EarthMeter a limited company registered in England under company number 12951412 
                whose registered address is 9 Great Chesterford Court, London Road, Great Chesterford, Essex CB10
                1PF.
            </li>
        </ul>

        <HeadingText type="subheading" text="Information about us" />
        <p>
            Our Site is owned by EarthMeter, a limited company registered in England under company number 
            12951412, whose registered address 9 Great Chesterford Court, London Road, Great Chesterford, 
            Essex CB10 1PF.
        </p>
        <p> 
            Our Data Protection Officer is Lucy Walker and can be contacted by email at hello@earthmeter.com.
        </p>


        
        <HeadingText type="subheading" text="What does this policy cover?" />
        <p> 
            This Privacy Policy applies only to your use of Our Site. Our Site may contain links to other websites. 
            Please note that We have no control over how your data is collected, stored, or used by other website and 
            We advis e you to check the privacy policies of any such website before providing any data to them.
        </p>
    </div> 
  );
}

export default PrivacyPolicy;