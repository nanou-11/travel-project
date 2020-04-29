import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
  Button
} from 'reactstrap';
import {Link} from 'react-router-dom'

import styles from './Start.module.css'

const items = [
  {
    src:"https://images.unsplash.com/photo-1540544660406-6a69dacb2804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=831&q=80",
    id: 1,
  },
  {
    src:"https://images.unsplash.com/photo-1588025383511-12fe4bb4aaf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80",
    id: 2,
  },
  {
    src:"https://images.unsplash.com/photo-1478382188900-5bb598fe27d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    id: 3,
  }
];

const Start = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }


  const slides = items.map((item) => {
    return (
      
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      ><img className={styles.img} src={item.src} alt={item.id}/>
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 100vh;
              
            }`
        }
      </style>
      <p className={styles.h1}>Travel during confinement</p>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/> */}
        <Button tag={Link} to="/mapworld" size="lg"className={styles.button}>Let's go !</Button>
        {slides}
        {/* <h1 className={styles.h1}>coucou</h1> */}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Start;