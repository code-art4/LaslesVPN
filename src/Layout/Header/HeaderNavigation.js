
//IMPORTED JSX FILES
import Image from '../../UI/Image';
import Button from '../../UI/Button';

//IMAGE FILES
import Logo from '../../assets/images/logo.svg'

//CSS FILES
import classes from './HeaderNavigation.module.css';

const HeaderNavigation = () => {
    return (
      <div className={classes.HeaderNavigation}>
        <figure className={`${classes.col} ${classes.Logo}`}>
          <Image image={Logo} description="LaslesVPN" />
        </figure>

        <div className={`${classes.col} ${classes.mainNav}`}>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Help</li>
          </ul>
        </div>

        <div className={`${classes.col} ${classes.remNav}`}>
          <Button className={classes.btn}>Sign In</Button>
          <Button className={`${classes.btn} ${classes.active}`}>Sign Up</Button>
        </div>
      </div>
    );
}

export default HeaderNavigation;