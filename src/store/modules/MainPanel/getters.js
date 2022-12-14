export default {
  listShow(state, getters, rootState, rootGetters) {
    rootGetters.dataArr.forEach((element) => {
      element.show = element.show;
    });
    return Math.random();
  },
};
