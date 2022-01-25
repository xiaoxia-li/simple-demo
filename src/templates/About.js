import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselPanel from '../components/CarouselPanel';
const About = () => {
  return (
    <>
      <h2>This is about page</h2>
      <Container>
        <Row>
          <Col className='col-12 col-md-6'>1 of 2</Col>
          <Col className='col-12 col-md-6'>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <Container>
        <CarouselPanel />
      </Container>
    </>
  );
};

export default About;
