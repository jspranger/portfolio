// External imports
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Presentation imports
import '@pages/contact/styles.scss';
import Mail from '@utils/mail';
import ContactInfo from '@sections/contactinfo';

const Contact = (): JSX.Element => {
  return (
    <Row
      noGutters
      xs={1}
      className="contact w-100 h-100 d-flex flex-column justify-content-center align-items-center"
    >
      <Col className="d-flex flex-column w-75">
        <Row
          noGutters
          xs={1}
          md={1}
          lg={1}
          xl={2}
          className="flex-grow-1 d-flex flex-row justify-content-center align-items-center"
        >
          <Col className="p-5">
            <Mail />
          </Col>
          <Col className="p-5 d-flex flex-column justify-content-center align-items-center">
            <ContactInfo />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Contact;
