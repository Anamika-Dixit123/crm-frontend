import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import BreadcrumbPage from "../../components/breadcrumb/Breadcrumb";
import dummyTickets from "../../assets/data/dummyTickets.json";
import MessageHistory from "../../components/message-history/MessageHistory";
import UpdateTicket from "../../components/update-ticket/UpdateTicket";

const TicketPage = () => {
  const ticket = dummyTickets[0]; 
  const [message, setMessage] = useState(" ");
 useEffect(() => {}, [message]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setMessage(value);
  };

  const handleOnSubmit = () =>{
    alert("Submitted successfully");
  }
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbPage page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className = 'text-weight-bolder text-secondary'>
          <div className="subject">Subject:  {ticket.subject}</div>
          <div className="date">Ticket Opened:  {ticket.addedAt}</div>
          <div className="status">Status:  {ticket.status}</div>
        </Col>
        <Col className="text-end" >
        <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
        <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col>
        <UpdateTicket msg={message} handleOnChange = {handleOnChange} handleOnSubmit = {handleOnSubmit}/>
        </Col>
      </Row>
    </Container>
  );
};

export default TicketPage;
