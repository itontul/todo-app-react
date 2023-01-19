import moment from "moment";
import React from "react";
import { useGlobalContext } from "../../utils/context";

const Doing = ({ text, date, id }) => {
  const { editTaskHandler } = useGlobalContext();

  const editTask = () => {
    editTaskHandler(id);
  };
  return (
    <>
      <h2>{text}</h2>
      <p>{moment(date).format("L")}</p>
      <button onClick={editTask}>Mark as Done</button>
    </>
  );
};

export default Doing;
