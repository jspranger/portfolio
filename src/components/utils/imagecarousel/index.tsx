// External imports
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { v4 as uuidv4 } from 'uuid';

export interface IImageInfo {
  title: string;
  description: string;
  image: string;
}

interface ISelfProps {
  imageInfos: IImageInfo[];
}

const ImageCarousel = (props: ISelfProps): JSX.Element => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const { imageInfos } = props;

  return (
    <Carousel
      activeIndex={index}
      indicators
      touch
      slide={false}
      interval={3000}
      onSelect={handleSelect}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      {imageInfos.map((imageInfo, i) => {
        const altText = `Slide ${i}`;
        return (
          <Carousel.Item key={uuidv4()}>
            <img
              className="d-block mw-100 mh-100"
              src={imageInfo.image}
              alt={altText}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
