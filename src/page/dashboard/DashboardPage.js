import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TicketTable from "../../components/ticket-table/TicketTable";
import dummyTickets from "../../assets/data/dummtTickets.json";
import BreadcrumbPage from "../../components/breadcrumb/Breadcrumb";

const DashboardPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbPage page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ "fontSize": "2rem", padding: "10px 30px" }}
          >
            Add New Ticekt{" "}
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total ticekt : 10</div>
          <div>Pending ticket : 5</div>
        </Col>
      </Row>

      <Row>
        <Col className="mt-2 ">Recently Added Tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable dummyTickets={dummyTickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
