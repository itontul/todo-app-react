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

    default:
      throw new Error(`Unknown action type: ${type}`);
  }
}

export default reducer;
