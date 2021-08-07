import React from 'react';

//IMPORTED JSX FILES
import Section from '../../UI/Section';
import Card from '../../UI/Card';
import Image from '../../UI/Image';
import Button from '../../UI/Button';

//CSS FILES
import classes from './Plan.module.css';

//IMAGE FILES
import PlanPackage from '../../assets/images/Free.svg'
import DifferentCheck from "../../assets/images/icon-no-background-check.svg";


//DECLARED EACH CARD FOR EASY DYNAMIC MAPPING IN ARRAY
const Free =  {
    name: "Free",
    Bandwidth: "Unlimited Bandwidth",
    Encryption: "Encrypted Connection",
    TrafficLog: "No Traffic Logs",
    OperationalDevices: "Works on All Devices",
    Possibities: { Connectivity: false, Features: false, payFee: false },
    price: "Free",
  }

const Standard = {
  name: "Standard",
  Bandwidth: "Unlimited Bandwidth",
  Encryption: "Encrypted Connection",
  TrafficLog: "No Traffic Logs",
  OperationalDevices: "Works on All Devices",
  Possibities: { Connectivity: true, Features: false, payFee: true },
  Connectivity: "Connect Anywhere",
  price: "$9",
};

const Premium = {
  name: "Premium",
  Bandwidth: "Unlimited Bandwidth",
  Encryption: "Encrypted Connection",
  TrafficLog: "No Traffic Logs",
  OperationalDevices: "Works on All Devices",
  Possibities: { Connectivity: true, Features: true, payFee: true },
  Connectivity: "Connect Anywhere",
  Features: "Get New Features",
  price: "$12",
};


//ASSIGNED plans TO THE ABOVE DECLARED VARIABLES
const plans = [Free,Standard,Premium];
  

//MAPPING THE plans
const PlanCard = plans.map(plan => {
    return (
      <Card className={classes.card} key={plan.name}>
        <figure>
          <Image image={PlanPackage} description="Plan Package" />
        </figure>
        <div className={classes.content}>
          <h5>{plan.name} Plan</h5>
          <ul>
            <li>
              <Image image={DifferentCheck} />
              <span>{plan.Bandwidth}</span>
            </li>
            <li>
              <Image image={DifferentCheck} />
              <span>{plan.Encryption}</span>
            </li>
            <li>
              <Image image={DifferentCheck} />
              <span>{plan.TrafficLog}</span>
            </li>
            <li>
              <Image image={DifferentCheck} />
              <span>{plan.OperationalDevices}</span>
            </li>
            {plan.Possibities.Connectivity && (
              <li>
                <Image image={DifferentCheck} />
                <span>{plan.Connectivity}</span>
              </li>
            )}

            {plan.Possibities.Features && (
              <li>
                <Image image={DifferentCheck} />
                <span>{plan.Features}</span>
              </li>
            )}
          </ul>          
            <div className={classes.last}>
              <p className={classes["plan-type"]}>
                <strong>{plan.price}</strong> {plan.price !== "Free" && "/mo"}
              </p>
              <Button className={classes.planBtn}>Select</Button>
            </div>
        </div>
        
      </Card>
    );
}) 

const Plan = () => {
    return (
        <Section className={classes.Plan}>
            <header>
                <h2>Choose Your Plan</h2>
                <p>Let's choose the best package that is best for you and explore it happily and cheerfully.</p>
            </header>
            <main>
                {PlanCard}
            </main>

        </Section>
    );
}

export default Plan;
