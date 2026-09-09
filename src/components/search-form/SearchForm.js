  import React from 'react'
  import { Row, Col, Form} from 'react-bootstrap'
  import PropTypes from 'prop-types'
  
  const SearchForm = ({handleOnChange, str}) => {

    
    return (
      <div>
         <Form>
            <Form.Group as={Row} >
              <Form.Label column sm="3">
                Search: 
              </Form.Label>
              <Col sm="9">
                <Form.Control name =" SearchStr" onChange = {handleOnChange} value={str} placeholder="Enter search term"/>
                </Col>
            </Form.Group>
         </Form>
      </div>
    )
  }
  
  export default SearchForm
  
  SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str : PropTypes.string.isRequired
  }