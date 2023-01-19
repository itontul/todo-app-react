import moment from "moment";
import React from "react";
import { useGlobalContext } from "../../utils/context";

const TodoItems = ({ text, date, id }) => {
  const { editTaskHandler } = useGlobalContext();

  const editTask = () => {
    console.log(id);
    editTaskHandler(id);
  };
  return (
    <>
      <h2>{text}</h2>
      <p>{moment(date).format("L")}</p>
      <button onClick={editTask}>Started to doing</button>
    </>
  );
};

export default TodoItems;
