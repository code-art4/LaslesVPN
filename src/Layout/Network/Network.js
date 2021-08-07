import React from 'react';

//IMPORTED JSX FILES
import Section from '../../UI/Section';
import Image from '../../UI/Image';
import NetworkSponsors from './NetworkSponsors';

//CSS FILES
import classes from './Network.module.css';

//IMAGE FILES
import NetworkImage from './../../assets/images/Map.svg';

const Network = () => {
    return (
      <Section className={classes.Network}>
        <header>
            <h2>Huge Global Network of Fast VPN</h2>
            <p>
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
            </p>
        </header>
        <figure>
        <Image
          image={NetworkImage}
          description="Huge Global Network of Fast VPN"
          className={classes.image}
        />
        </figure>

        <NetworkSponsors/>
      </Section>
    );
}

export default Network;
