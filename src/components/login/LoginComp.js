import React from 'react'
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginComp = ({ handleOnChange, email, pass, handleOnSubmit, formSwitcher}) => {
  return (
    <Container>
      <Row>
        <Col>
        <h1>Client login</h1>
        <hr/>
        <Form onSubmit={handleOnSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label> Email Address</Form.Label>
                <Form.Control type='email' name="email" placeholder='Enter email' onChange={handleOnChange} value={email} required/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label> Password</Form.Label>
                <Form.Control type='password' name="password" placeholder='Enter password' onChange={handleOnChange} value={pass} required/>
            </Form.Group>

            <Button className='mt-3' type='submit'>Login</Button>

            <hr/>
            <Row>
                <Col>
                <a href='#' onClick={() => formSwitcher("Reset")}>Forgot password?</a>
                </Col>
            </Row>
        </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginComp


LoginComp.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
}