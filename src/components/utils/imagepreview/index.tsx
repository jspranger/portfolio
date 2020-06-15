// External imports
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';

interface ISelfProps {
  show: boolean;
  onHide: any;
  title: string;
  description: string;
  image: string;
}

// TODO:
// Under construction, could not yet implement this
// due to an issue in the react image carousel, which can
// not be stopped programatically, causing the image preview
// to flicker

const ImagePreview = (props: ISelfProps): JSX.Element => {
  const { show, onHide, title, description, image } = props;
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-row justify-content-center align-items-center">
        <Figure className="d-flex flex-column justify-content-center align-items-center">
          <Figure.Image alt={title} src={image} />
          <Figure.Caption>{description}</Figure.Caption>
        </Figure>
      </Modal.Body>
      <Modal.Footer>
        <Button className="w-50" variant="dark" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImagePreview;
