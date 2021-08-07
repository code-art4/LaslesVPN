import React,{Fragment} from 'react';

import classes from './FooterLinks.module.css';


const links = [
  {
    name: "Product",
    links: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"],
  },
  {
    name: "Engage",
    links: [
      "LaslesVPN ?",
      "FAQ",
      "Tutorials",
      "About Us",
      "Privacy Policy",
      "Terms of Service",
    ],
  },
  {
    name: "Earn Money",
    links: [
      "Affliate",
      "Become Partner",
    ],
  },
];

const EachLink = links.map(link => {
    return (
      <div className={`${classes.col} ${classes.FooterLinks}`} key={link.name}>
        <h5>{link.name}</h5>

        <ul>
          <li>{link.links[0]}</li>
          <li>{link.links[1]}</li>
          {link.links.length > 2 && <li>{link.links[2]}</li>}
          {link.links.length > 2 && <li>{link.links[3]}</li>}
          {link.links.length > 2 && <li>{link.links[4]}</li>}
          {link.links.length > 2 && <li>{link.links[5]}</li>}
        </ul>
      </div>
    );
})

const FooterLinks = () => {
    return <Fragment>{EachLink}</Fragment>;
}

export default FooterLinks;
