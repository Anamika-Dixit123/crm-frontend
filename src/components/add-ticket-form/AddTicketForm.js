import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import "./AddTicketForm.css";

const AddTicketForm = ({ handleOnSubmit, handleOnChange , frmData}) => {
  console.log(frmData);
  return (
    <Container className="py-5 mt-5 add-ticket-form bg-light">
      <h1 className="text-center text-info" >Add New Ticket</h1>
      <hr />
      <Row >
        <Col>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Subject
              </Form.Label>

              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="subject"
                  value={frmData.subject}
                  placeholder="Enter subject"
                  onChange={handleOnChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Issue Found
              </Form.Label>

              <Col sm={9}>
                <Form.Control
                  type="date"
                  name="issueDate"
                  value={frmData.issueDate}
                  onChange={handleOnChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Details
              </Form.Label>

              <Col sm={9}>
                <Form.Control
                  as="textarea"
                  name="detail"
                  value={frmData.detail}
                  rows={5}
                  onChange={handleOnChange}
                  required
                />
              </Col>
            </Form.Group>

            {/* <Button  type="submit" variant="info" block>
              Login
            </Button> */}
            <Button type="submit" variant="info" className="w-100">
              Login
            </Button>

         
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicketForm;


AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  frmData: PropTypes.object.isRequired
};