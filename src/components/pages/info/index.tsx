// External imports
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Context imports
import ScreenSizeContext, { ScreenSize } from '@contexts/screensize';

// Local component imports
import '@pages/info/styles.scss';
import jspranger from '@pages/info/images/jspranger.png';
import NavigationBar from '@utils/navigationbar';
import InfoProfileIntro from '@sections/infoprofileintro';
import InfoProfileDescription from '@sections/infoprofiledescription';

const Info = (): JSX.Element => {
  const screenSize = useContext(ScreenSizeContext);

  return (
    <Row
      noGutters
      xs={1}
      className="info w-100 h-100 d-flex flex-column justify-content-center align-items-center"
    >
      <Col className="info-overlay flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <Row
          noGutters
          xs={1}
          className={screenSize > ScreenSize.sm ? 'w-75' : 'w-100'}
        >
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
