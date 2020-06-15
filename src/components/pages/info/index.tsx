// External imports
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Presentation imports
import '@pages/info/styles.scss';
import jspranger from '@pages/info/images/jspranger.png';
import NavigationBar from '@utils/navigationbar';
import InfoProfileIntro from '@sections/infoprofileintro';
import InfoProfileDescription from '@sections/infoprofiledescription';

const Info = (): JSX.Element => {
  return (
    <Row
      noGutters
      xs={1}
      className="info w-100 h-100 d-flex flex-column justify-content-center align-items-center"
    >
      <Col className="info-overlay flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <Row noGutters xs={1} className="w-75">
          <Col>
            <NavigationBar />
          </Col>
          <Col>
            <Row noGutters xs={1} md={1} lg={1} xl={2}>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <InfoProfileIntro picture={jspranger} />
              </Col>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <InfoProfileDescription />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Info;
