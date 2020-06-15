// External imports
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faMapMarkerAlt,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import { v4 as uuidv4 } from 'uuid';

interface ITextInfo {
  icon: IconDefinition;
  text: string;
  emphasized?: boolean;
}

interface ILinkInfo {
  icon: IconDefinition;
  url: string;
}

const ContactInfo = (): JSX.Element => {
  const contactTextInfo: ITextInfo[] = [
    { icon: faUser, text: 'João Spranger' },
    { icon: faEnvelope, text: 'jspranger@gmail.com', emphasized: true },
    { icon: faMapMarkerAlt, text: 'Braga, Portugal' },
  ];

  const contactLinkInfo: ILinkInfo[] = [
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/jspranger' },
    { icon: faGithub, url: 'https://github.com/jspranger' },
    { icon: faFacebookSquare, url: 'https://www.facebook.com/washburn.olo' },
  ];

  return (
    <>
      <Row noGutters className="w-75">
        <Col>
          <h5>Have a great day!</h5>
        </Col>
      </Row>

      <hr />

      <Row noGutters className="w-75">
        <Col>
          {contactTextInfo.map((textInfo, i) => (
            <p key={uuidv4()}>
              <span className="mr-3">
                <FontAwesomeIcon icon={textInfo.icon} />
              </span>
              {textInfo.emphasized ? <em>{textInfo.text}</em> : textInfo.text}
            </p>
          ))}
        </Col>
      </Row>

      <hr className="bottom-contact-line" />

      <Row noGutters className="w-75">
        <Col className="d-flex flex-column justify-content-center align-items-start">
          <p>
            {contactLinkInfo.map((linkInfo, i) => (
              <span key={uuidv4()} className="m-2">
                <a
                  href={linkInfo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={linkInfo.icon} />
                </a>
              </span>
            ))}
          </p>
        </Col>
      </Row>
    </>
  );
};

export default ContactInfo;
