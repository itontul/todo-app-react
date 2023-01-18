import moment from "moment/moment";
import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../utils/context";
import AddTask from "./AddTask";
import styles from "./KanbanBoard.module.css";

const KanbanBoard = () => {
  const { id } = useParams();
  const { list } = useGlobalContext();
  const { text, date, completed, importance } = list.filter(
    (i) => i.id === id
  )[0];
  console.log(text);
  return (
    <div className={styles.kanban}>
      <h1>{text}</h1>
      <div className={styles.infobar}>
        <p> Deadline: {moment(date).format("L")} </p>
        <p>{completed ? "Completed" : "Not Completed"}</p>
        <p>{importance ? "Important" : "Not Important"}</p>
      </div>
      <AddTask />
    </div>
  );
};

export default KanbanBoard;
