import React from "react";
import PropTypes from "prop-types";
import "./MessageHistory.css";

const MessageHistory = ({ msg }) => {
  if (!msg) return null;
  console.log(msg);
  return msg.map((row, i) => (
    <div key={i} className="message-history">
      <div className="send font-weight-bold text-secondary mt-3">
        <div className="sender">{row.messageBy}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className="message">{row.message}</div>
    </div>
  ));
};

export default MessageHistory;

MessageHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};
