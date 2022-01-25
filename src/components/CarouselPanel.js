import React from 'react';
import { Carousel } from 'react-bootstrap';
import Data from '../data/data.json';

const CarouselPanel = () => {
  return (
    <Carousel>
      {Data.map(({ id, title, image, description }) => (
        <Carousel.Item key={id}>
          <img className='d-block w-100' src={image} alt='First slide' />
          <Carousel.Caption>
            <h3>{title}</h3>
            <p>{description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselPanel;
