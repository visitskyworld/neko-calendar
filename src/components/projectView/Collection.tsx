import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { NFTData } from '../../ts-generalTypes/InitialStateInterfaces';
import { CustomLeftArrow, CustomRightArrow } from '../utils/CustomArrow';

type Props = {
  data: NFTData;
};

const responsive = {
  xl: {
    breakpoint: { max: 3000, min: 1880 },
    items: 10,
    slidesToSlide: 5, // optional, default to 1.
  },
  lg: {
    breakpoint: { max: 1880, min: 1680 },
    items: 8,
    slidesToSlide: 4, // optional, default to 1.
  },
  md: {
    breakpoint: { max: 1680, min: 1380 },
    items: 6,
    slidesToSlide: 3, // optional, default to 1.
  },
  sm: {
    breakpoint: { max: 1380, min: 1080 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  xs: {
    breakpoint: { max: 1080, min: 920 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  xxs: {
    breakpoint: { max: 920, min: 470 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  base: {
    breakpoint: { max: 470, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Collection: React.FC<Props> = ({ data }) => {
  return (
    <div className="mt-8 flex flex-col w-full">
      <span className="font-semibold text-3xl mb-3">Media</span>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {data.images.map((img, index) => {
          return (
            <div
              className="w-[140px] h-[140px] shrink-0 m-1 rounded-[20px] select-none cursor-pointer"
              key={`neko${index}`}
            >
              <img
                src={img}
                className="w-full h-full select-none"
                alt="Media"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Collection;
