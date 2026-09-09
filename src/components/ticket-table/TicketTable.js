import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

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
              <td>{row.subject}</td>
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