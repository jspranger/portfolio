// External imports
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { v4 as uuidv4 } from 'uuid';

// Local component imports
import '@utils/imagecarousel/styles.scss';
import ImagePreview from '@utils/imagepreview';

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
  const [interval, setInterval] = useState<number | null>(3000);
  const [showPreview, setShowPreview] = useState(false);
  const [previewTitle, setPreviewTitle] = useState('');
  const [previewDescription, setPreviewDescription] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  const { imageInfos } = props;

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const openImagePreview = (i: number) => {
    setInterval(null);
    setPreviewTitle(imageInfos[i].title);
    setPreviewDescription(imageInfos[i].description);
    setPreviewImage(imageInfos[i].image);
    setShowPreview(true);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        indicators
        touch
        slide={false}
        interval={interval}
        onSelect={handleSelect}
        className="cursor-pointer d-flex flex-column justify-content-center align-items-center"
      >
        {imageInfos.map((imageInfo, i) => {
          const altText = `Slide ${i}`;
          return (
            <Carousel.Item key={uuidv4()} onClick={() => openImagePreview(i)}>
              <img
                className="d-block mw-100 mh-100"
                src={imageInfo.image}
                alt={altText}
              />
              <Carousel.Caption>
                <Jumbotron className="m-0 p-0 caption-container">
                  <p>
                    <strong>{imageInfo.title}</strong>
                  </p>
                </Jumbotron>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <ImagePreview
        show={showPreview}
        onHide={() => {
          setShowPreview(false);
          setInterval(3000);
        }}
        title={previewTitle}
        description={previewDescription}
        image={previewImage}
      />
    </>
  );
};

export default ImageCarousel;
