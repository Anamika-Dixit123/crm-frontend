import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadcrumbPage from "../../components/breadcrumb/Breadcrumb";
import AddTicketForm from "../../components/add-ticket-form/AddTicketForm";

 const initialFrmData = {
    subject: "",
    issueDate: "",
    detail: ""
 }

const AddTicket = () => {

  const [frmData, setFrmData] = useState(initialFrmData);

  useEffect(() => {}, [frmData]);

   const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFrmData({...frmData, [name]: value});
    console.log(name, value);
   }

   const handleOnSubmit = (e) => {

    e.preventDefault();
    console.log("Form data received", frmData);
   }
  
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbPage page="Add Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} frmData={frmData} />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;
