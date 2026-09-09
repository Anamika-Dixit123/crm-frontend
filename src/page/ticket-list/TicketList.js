import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadcrumbPage from "../../components/breadcrumb/Breadcrumb";
import SearchForm from "../../components/search-form/SearchForm";
import TicketTable from "../../components/ticket-table/TicketTable";
import dummyTickets from "../../assets/data/dummyTickets.json";

const TicketList = () => {
  const [str, setStr] = useState("");
  const [dispTicket, setDispTicket] = useState(dummyTickets);

  useEffect(() => {}, [str, dispTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };
  const searchTicket = (sttr) => {
    const displayTicket = dummyTickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase()),
    );

    console.log(displayTicket);
    setDispTicket(displayTicket);
  };

  return (
    <Container className="ticket-list">
      <Row>
        <Col>
          <BreadcrumbPage page="Ticket List" />
        </Col>
      </Row>
      <Row className="ticket-actions align-items-center">
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col>
          <Button variant="secondary" className="text-end">
            <SearchForm handleOnChange={handleOnChange} str={str} />
          </Button>
        </Col>
        <Row className="mt-4">
          <Col>
            <TicketTable dummyTickets={dispTicket} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default TicketList;
