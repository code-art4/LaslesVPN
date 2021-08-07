import React from 'react';

//IMPORTED JSX FILES
import Card from '../../UI/Card';
import Image from '../../UI/Image';

//IMAGE FILES
import Customer1 from '../../assets/images/customer-1.jpg';
import Customer2 from '../../assets/images/customer-2.jpg';
import Customer3 from '../../assets/images/customer-3.jpg';
import Star from '../../assets/images/icon-star.svg';

//CSS FILES
import classes from './ReviewSlider.module.css'

const users = [
  {
    id: "Customer 1",
    image: Customer1,
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    ratings: 4.5,
    reviewText:
      "Wow... I am very happy to use this VPN. it turned out to be more than my expectations and so far there has been no problems. LaslesVPN always the best",
  },
  {
    id: "Customer 2",
    image: Customer2,
    name: "Yessica Christy",
    location: "Shanxi, China",
    ratings: 4.5,
    reviewText:
      "I like it because I like to travel far and still connect with high speed",
  },
  {
    id: "Customer 3",
    image: Customer3,
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    ratings: 4.5,
    reviewText:
      "This is very unusual for my business that currently requires a virtual private network that has high security",
  },
];

//CARD JSX
const userList = users.map(user => {
    return <Card className={classes.card} key={user.id}>
            <div className={`${classes.col} ${classes.row}`}>
              <figure className={classes.col}>
                <Image image={user.image} description={user.id} />
              </figure>
              <div className={classes.collg}>
                <h5>{user.name}</h5>
                <p>{user.location}</p>
              </div>
              <div className={`${classes.col} ${classes.row}`}>
                <p>{user.ratings}</p>
                <Image image={Star} description="Star" />
              </div>
            </div>

            <div className={classes.reviewText}>
              <p>"{user.reviewText}".</p>
            </div>
          </Card>
})

const ReviewSliders = () => {
    return (
      <div className={classes.ReviewSlider}>
        <div className={classes.cards}>{userList}</div>
      </div>
    );
}

export default ReviewSliders;
