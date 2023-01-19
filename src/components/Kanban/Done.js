import moment from "moment/moment";
import React from "react";

const Done = ({ text, date, id }) => {
  return (
    <>
      <h2>{text}</h2>
      <p>{moment(date).format("L")}</p>
    </>
  );
};

export default Done;
