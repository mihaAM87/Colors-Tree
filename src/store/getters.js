export default {
  dataArr(state) {
    state.dataArr.forEach(function (item, idx, arr) {
      const id = idx + 1;
      item.id = id;
    });
    return state.dataArr;
  },
};
