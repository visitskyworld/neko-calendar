import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Collab from './mint/Collab';
import { Collabs } from '../../redux/mocked-data';
import { CustomLeftArrow, CustomRightArrow } from '../utils/CustomArrow';

const CollabsContainer: React.FC = () => {
  const responsive = {
    xl: {
      breakpoint: { max: 3000, min: 1800 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    lg: {
      breakpoint: { max: 1800, min: 1700 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    md: {
      breakpoint: { max: 1700, min: 1480 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    sm: {
      breakpoint: { max: 1480, min: 1240 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    xs: {
      breakpoint: { max: 1240, min: 1086 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    collapsed: {
      breakpoint: { max: 1086, min: 1050 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    collapsedSm: {
      breakpoint: { max: 1049, min: 815 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    collapsedXs: {
      breakpoint: { max: 814, min: 768 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    collapsedLg: {
      breakpoint: { max: 767, min: 560 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    collapsedMd: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <React.Fragment>
      <span className="text-xl font-semibold">Our collabs</span>
      <div className="w-full h-[calc(100%-44px)]">
        <Carousel
          infinite={false}
          swipeable={true}
          draggable={false}
          containerClass={`w-full`}
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
