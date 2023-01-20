function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD":
      return { ...state, list: [...state.list, { ...payload }] };

    case "COMPLETE":
      let tempList = state.list.map((item) => {
        if (item.id === payload) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      return { ...state, list: tempList };

    case "REMOVE":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== payload),
      };

    case "EDIT":
      let editedList = state.list.map((item) => {
        if (item.id === payload.id) {
          return { ...item, ...payload.item };
        }
        return item;
      });
      return { ...state, list: editedList };

    case "ADD_TASK":
      let taskAddedList = state.list.map((item) => {
        if (item.id === payload.id) {
          if (!item.task) {
            return { ...item, task: [payload.task] };
          } else {
            return { ...item, task: [...item.task, payload.task] };
          }
        }
        return item;
      });
      return { ...state, list: taskAddedList };

    case "HANDLE_TASK":
      let taskEditedList = state.list.map((item) => {
        let editedTask = item.task.map((specificTask) => {
          if (specificTask.id === payload.id) {
            if (specificTask.status === "todo") {
              return { ...specificTask, status: "doing" };
            }
            if (specificTask.status === "doing") {
              return { ...specificTask, status: "done" };
            }
          }
          return specificTask;
        });
        return { ...item, task: editedTask };
      });
      return { ...state, list: taskEditedList };

    case "DELETE_TASK":
      let taskDeletedList = state.list.map((item) => {
        let deletedTask = item.task.map((taskDeleted) => {
          if (taskDeleted.id === payload) {
            return { task: taskDeleted.filter((item) => item.id !== payload) };
          }
          return taskDeleted;
        });
        return { ...item, task: deletedTask };
      });
      return { ...state, list: taskDeletedList };

    default:
      throw new Error(`Unknown action type: ${type}`);
  }
}

export default reducer;
