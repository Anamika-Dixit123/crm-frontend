import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TicketTable = ({ dummyTickets }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>

      <tbody>
        {dummyTickets.length ? (
          dummyTickets.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td><Link to={`/ticketpage/${row.id}`}>{row.subject}</Link></td> 
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr >
            <td colSpan="4" className="text-center"> No Tickets Found</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TicketTable;

TicketTable.propTypes = {
  dummyTickets: PropTypes.array.isRequired,
};