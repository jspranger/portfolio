// External imports
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// Context imports
import ScreenSizeContext, { ScreenSize } from '@contexts/screensize';

// Local component imports
import '@pages/academic/styles.scss';
import avatarAcademic from '@pages/academic/images/avatar-academic.svg';
import AcademicTextBubbleDr from '@sections/academictextbubbledr';
import AcademicTextBubbleMSc from '@sections/academictextbubblemsc';
import AcademicTextBubbleCert from '@sections/academictextbubblecert';

const Academic = (): JSX.Element => {
  const screenSize = useContext(ScreenSizeContext);

  return (
    <Row
      noGutters
      xs={1}
      className="academic w-100 h-100 d-flex flex-column justify-content-center align-items-center"
    >
      <Col className="academic-overlay flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <Row
          noGutters
          xs={1}
          className={screenSize > ScreenSize.sm ? 'w-75' : 'w-100'}
        >
          <Col>
            <Row noGutters xs={1} lg={2}>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <AcademicTextBubbleDr />
              </Col>
            </Row>
            <Row noGutters xs={1} lg={2} xl={3}>
              <Col className="d-none d-xl-block" />
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <Image
                  className="d-none d-lg-block avatar-picture"
                  src={avatarAcademic}
                  roundedCircle
                />
              </Col>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <AcademicTextBubbleMSc />
              </Col>
            </Row>
            <Row noGutters md={1} lg={2} xl={3}>
              <Col className="d-none d-xl-block" />
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <AcademicTextBubbleCert />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Academic;
