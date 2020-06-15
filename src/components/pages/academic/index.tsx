// External imports
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useMediaQuery } from 'react-responsive';

// Presentation imports
import '@pages/academic/styles.scss';
import avatarAcademic from '@pages/academic/images/avatar-academic.svg';
import AcademicTextBubbleDr from '@sections/academictextbubbledr';
import AcademicTextBubbleMSc from '@sections/academictextbubblemsc';
import AcademicTextBubbleCert from '@sections/academictextbubblecert';

const Academic = (): JSX.Element => {
  // React media queries for conditional rendering
  const isXlScreen = useMediaQuery({ query: '(min-width: 1200px)' });
  const isLgScreen = useMediaQuery({ query: '(min-width: 992px)' });
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isSmScreen = useMediaQuery({ query: '(min-width: 576px)' });
  // Anything below that is Xs screen size

  return (
    <Row
      noGutters
      xs={1}
      className="academic w-100 h-100 d-flex flex-column justify-content-center align-items-center"
    >
      <Col className="academic-overlay flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <Row noGutters xs={1} className="w-75">
          <Col>
            <Row noGutters xs={1} lg={2}>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <AcademicTextBubbleDr
                  isXlScreen={isXlScreen}
                  isLgScreen={isLgScreen}
                  isMdScreen={isMdScreen}
                  isSmScreen={isSmScreen}
                />
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
                <AcademicTextBubbleMSc
                  isXlScreen={isXlScreen}
                  isLgScreen={isLgScreen}
                  isMdScreen={isMdScreen}
                  isSmScreen={isSmScreen}
                />
              </Col>
            </Row>
            <Row noGutters md={1} lg={2} xl={3}>
              <Col className="d-none d-xl-block" />
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <AcademicTextBubbleCert
                  isXlScreen={isXlScreen}
                  isLgScreen={isLgScreen}
                  isMdScreen={isMdScreen}
                  isSmScreen={isSmScreen}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Academic;
