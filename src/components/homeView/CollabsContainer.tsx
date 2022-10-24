import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Collab from './mint/Collab';
import { Collabs } from '../../redux/mocked-data';
import { CustomLeftArrow, CustomRightArrow } from '../utils/CustomArrow';

const CollabsContainer: React.FC = () => {
  const responsive = {
    xl: {
      breakpoint: { max: 3000, min: 1680 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    lg: {
      breakpoint: { max: 1680, min: 1590 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    md: {
      breakpoint: { max: 1590, min: 1340 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    sm: {
      breakpoint: { max: 1340, min: 1135 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    xs: {
      breakpoint: { max: 1135, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <React.Fragment>
      <span className="text-xl font-semibold">Our collabs</span>
      <div className="h-[calc(100%-44px)]">
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {Collabs.map((item, index) => (
            <Collab collab={item} key={index} />
          ))}
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export default CollabsContainer;
