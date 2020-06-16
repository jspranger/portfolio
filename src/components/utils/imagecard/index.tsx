// External imports
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { v4 as uuidv4 } from 'uuid';

// Local component imports
import '@utils/navigationbar/styles.scss';

interface ISelfProps {
  description: string;
  footer?: string;
  imageStyle?: string;
  images?: string[];
}

const ImageCard = (props: ISelfProps): JSX.Element => {
  const { description, footer, imageStyle, images } = props;

  return (
    <Card className="m-3">
      <Card.Body>
        <p className="mb-3" dangerouslySetInnerHTML={{ __html: description }} />
        {images && images.length > 0 && (
          <Row
            noGutters
            xl={3}
            lg={3}
            md={3}
            sm={3}
            xs={2}
            className="d-flex flex-row justify-content-center align-items-center"
          >
            {images.map((image, i) => (
              <Col
                key={uuidv4()}
                className="d-flex flex-row justify-content-center align-items-center mb-3"
              >
                <Image className={imageStyle} src={image} />
              </Col>
            ))}
          </Row>
        )}
        {footer && footer.length > 0 && (
          <p className="mt-3" dangerouslySetInnerHTML={{ __html: footer }} />
        )}
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
