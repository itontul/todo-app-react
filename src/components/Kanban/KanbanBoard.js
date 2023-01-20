import moment from "moment/moment";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../utils/context";
import AddTask from "./AddTask";
import styles from "./KanbanBoard.module.css";
import KanbanList from "./KanbanList";

const KanbanBoard = () => {
  const { id } = useParams();
  const { list } = useGlobalContext();
  const { text, date, completed, importance } = list.filter(
    (i) => i.id === id
  )[0];
  return (
    <div className={styles.kanban}>
      <h1>{text}</h1>
      <div className={styles.infobar}>
        <p> Deadline: {moment(date).format("L")} </p>
        <p>{completed ? "Completed" : "Not Completed"}</p>
        <p>{importance ? "Important" : "Not Important"}</p>
      </div>
      <div className={styles.infobar}>
        <button>Back to home</button>
      </div>
      <Link to="/"></Link>
      <AddTask />
      <KanbanList />
    </div>
  );
};

export default KanbanBoard;
