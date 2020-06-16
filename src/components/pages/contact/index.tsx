// External imports
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Context imports
import ScreenSizeContext, { ScreenSize } from '@contexts/screensize';

// Local component imports
import '@pages/contact/styles.scss';
import Mail from '@utils/mail';
import ContactInfo from '@sections/contactinfo';

const Contact = (): JSX.Element => {
  const screenSize = useContext(ScreenSizeContext);
  const containerClasses = `d-flex flex-column ${
    screenSize > ScreenSize.sm ? 'w-75' : 'w-100'
  }`;

  return (
    <Row
      noGutters
      xs={1}
      className="contact w-100 h-100 d-flex flex-column justify-content-center align-items-center"
    >
      <Col className={containerClasses}>
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
