import React from 'react';


//IMPORTED JS FILES
import Image from '../../UI/Image';
import FooterSocials from './FooterSocials';
import FooterLinks from './FooterLinks';

//IMAGES FILES
import Logo from '../../assets/images/Logo2x.svg';

//CSS FILES
import classes from './Footer.module.css'

const Footer = () => {
    return (
      <footer className={`${classes.Footer} ${classes.row}`}>
        <div className={classes.col}>
          <div className={classes.logo}>
            <Image image={Logo} description="Logo" />
          </div>

          <p>
            LaslesVPN is a private virtual network that has unique features and
            has high security.
          </p>

          <FooterSocials/>

          <p className={classes.copyright}>&copy;2020LaslesVPN</p>
        </div>

        <div className={`${classes.col} ${classes.row} ${classes.vertical}`}>
            <FooterLinks/>
        </div>
      </footer>
    );
}

export default Footer;
