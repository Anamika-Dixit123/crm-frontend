import React from 'react'
import { Button, Form } from 'react-bootstrap';
import PropTypes from "prop-types";


const UpdateTicket = ({msg, handleOnChange, handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label className='d-block'>Reply</Form.Label>
      <Form.Text className='d-block'>Please type your reply here...</Form.Text>
      <Form.Control value ={msg} onChange={handleOnChange} as= "textarea" rows={5} name="detail"    />
      <div className='mt-3 mb-3 text-end'>
      <Button variant="info" type='submit'> Reply</Button>

      </div>
    </Form>
  )
}

export default UpdateTicket;

UpdateTicket.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
};