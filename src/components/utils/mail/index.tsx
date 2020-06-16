// External imports
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

// Local component imports
import '@utils/mail/styles.scss';

const Mail = (): JSX.Element => {
  const [validated, setValidated] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const form = event.currentTarget;

    const sendEmail = async (
      name: string,
      email: string,
      message: string
    ): Promise<boolean> => {
      try {
        await axios.post('https://jspranger.herokuapp.com/sendmail', {
          name,
          email,
          message,
        });

        return true;
      } catch (error) {
        return false;
      }
    };

    if (form.checkValidity() === true) {
      setSubmitDisabled(true);
      sendEmail(form.name.value, form.email.value, form.message.value)
        .then((result: boolean) => {
          // TODO:
          // Deal with failure
          form.reset();
          setValidated(false);
        })
        .finally(() => {
          setSubmitDisabled(false);
        });
    }

    setValidated(true);
  };

  return (
    <div className="mail">
      <h2>
        Let&apos;s keep in touch
        <span className="ml-2">
          <FontAwesomeIcon icon={faCommentDots} />
        </span>
      </h2>
      <p>Help me make you reach further!</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Control placeholder="Enter name" type="text" required />
          <Form.Control.Feedback type="invalid">
            Please enter your name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Control placeholder="Enter email" type="email" required />
          <Form.Control.Feedback type="invalid">
            Please enter your email
          </Form.Control.Feedback>
          <Form.Text>
            Your email will never be shared with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="Write your message here..."
            required
          />
          <Form.Control.Feedback type="invalid">
            Please fill in your message
          </Form.Control.Feedback>
        </Form.Group>
        <Row noGutters className="w-100">
          <Col className="d-flex flex-row justify-content-end align-items-center">
            <Button
              className="w-50"
              variant="dark"
              type="submit"
              disabled={submitDisabled}
            >
              Send
              <span className="ml-2">
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Mail;
