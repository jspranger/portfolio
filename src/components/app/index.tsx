// System imports
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Presentation imports
import '@app/styles.scss';
import Info from '@pages/info';
import Academic from '@pages/academic';
import Experience from '@pages/experience';
import Interest from '@pages/interest';
import Contact from '@pages/contact';
import ScrollUpToTop from '@utils/scrolluptotop';

const App = (): JSX.Element => {
  return (
    <Container fluid className="p-0">
      <Row noGutters>
        <Col className="min-vh-100">
          <Info />
        </Col>
      </Row>
      <Row noGutters id="academic">
        <Col className="min-vh-100">
          <Academic />
        </Col>
      </Row>
      <Row noGutters id="experience">
        <Col className="min-vh-100">
          <Experience />
        </Col>
      </Row>
      <Row noGutters id="interest">
        <Col className="min-vh-100">
          <Interest />
        </Col>
      </Row>
      <Row noGutters id="contact">
        <Col className="min-vh-100">
          <Contact />
        </Col>
      </Row>
      <ScrollUpToTop />
    </Container>
  );
};

export default App;
