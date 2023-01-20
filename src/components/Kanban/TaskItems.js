import moment from "moment";
import React from "react";
import { useGlobalContext } from "../../utils/context";
import styles from "./TaskItem.module.css";
import { TbChecks, TbCheck, TbTrash } from "react-icons/tb";

const TaskItems = ({ text, date, id, status }) => {
  const { editTaskHandler, deleteTaskHandler } = useGlobalContext();

  return (
    <div className={styles.task}>
      <h4>{text}</h4>
      <p>{moment(date).format("L")}</p>
      <div className={styles.btns}>
        {status !== "done" && (
          <button className={styles.btn} onClick={() => editTaskHandler(id)}>
            {status === "todo" ? <TbCheck /> : <TbChecks />}
          </button>
        )}
        <button onClick={() => deleteTaskHandler(id)} className={styles.btn}>
          <TbTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItems;
