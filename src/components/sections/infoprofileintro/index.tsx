// External imports
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// Presentation imports
import ChatBubble, { Direction, Color } from '@utils/chatbubble';

interface ISelfProps {
  picture: string;
}

const InfoProfileIntro = (props: ISelfProps): JSX.Element => {
  const { picture } = props;
  return (
    <Row noGutters xs={1}>
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <ChatBubble
          direction={Direction.Down}
          color={Color.Green}
          innerHtml="<h1>Hi, I'm João.</h1><h1>I'm a developer!</h1>"
        />
      </Col>
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <Image className="profile-picture" src={picture} roundedCircle />
      </Col>
    </Row>
  );
};

export default InfoProfileIntro;
