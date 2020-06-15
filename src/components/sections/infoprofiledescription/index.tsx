// External imports
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const InfoProfileDescription = (): JSX.Element => {
  return (
    <Row noGutters xs={1}>
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="m-0">
          <strong>I am...</strong>
        </h2>
      </Col>
      <Col>
        <Jumbotron fluid className="profile-description">
          <Container>
            <ul className="increased-line-height">
              <li>determined</li>
              <li>specialized, yet generalist at heart</li>
              <li>passionate about the artistic side of technology</li>
              <li>a musician</li>
            </ul>
          </Container>
        </Jumbotron>
      </Col>
    </Row>
  );
};

export default InfoProfileDescription;
