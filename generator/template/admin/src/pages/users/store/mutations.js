export default {
  setList(state, list) {
    state.list = list;
  },
  deleteItem(state, id) {
    state.list = state.list.filter((user) => user.id !== id);
  },
  setItem(state, item) {
    state.item = item;
  },
  clearList(state) {
    state.list = [];
  },
  clearItem(state) {
    state.item = {};
  },
};
