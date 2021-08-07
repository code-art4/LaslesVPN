import React from 'react';

//IMPORTED JSX FILES
import Section from '../../UI/Section';
import Button from '../../UI/Button';

//CSS FILES
import classes from './Subscribe.module.css';

const Subscribe = () => {
    return (
      <Section className={`${classes.Subscribe} ${classes.row}`}>
        <div className={classes.col}>
          <h3>Subscribe Now for Get Special Features!</h3>
          <p>Let's subscribe with us and find the fun.</p>
        </div>
        <div className={classes.col}>
          <Button className={classes.btn}>Subscribe Now</Button>
        </div>
      </Section>
    );
}

export default Subscribe;
