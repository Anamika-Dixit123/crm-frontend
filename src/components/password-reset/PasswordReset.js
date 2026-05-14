import React from 'react'
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ResetPassword = ({ handleOnChange, email, handleOnSubmit ,handleOnResetSubmit, formSwitcher}) => {
  return (
    <Container>
      <Row>
        <Col>
        <h1> Reset Password</h1>
        <hr/>
        <Form onSubmit={handleOnResetSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label> Email Address</Form.Label>
                <Form.Control type='email' name="email" placeholder='Enter email' onChange={handleOnChange} value={email} required/>
            </Form.Group>
            

            <Button className='mt-3' type='submit'>Reset Password</Button>

            <hr/>
            <Row>
                <Col>
                <a href='#' onClick={() => formSwitcher("Login")}> Login Now</a>
                </Col>
            </Row>
        </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ResetPassword


ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}