<template>
  <div class="container">
    <div class="row">
      <LeftPanel class="col-6" />
      <MainPanel class="col-6" />
    </div>
  </div>
</template>

<script>
import LeftPanel from './views/LeftPanel/LeftPanel.vue';
import MainPanel from './views/MainPanel/MainPanel.vue';
// import MainPanel from './views/MainPanel';

export default {
  // computed: {
  //   listArr() {
  //     // const list = {
  //     //   show: false,
  //     //   checked: false,
  //     //   list: [...this.defaultList],
  //     // };
  //     // const arr = [
  //     //   { ...list },
  //     //   { ...list },
  //     //   { ...list },
  //     //   { ...list },
  //     //   { ...list },
  //     // ];
  //     this.arr.forEach(function (item, idx, arr) {
  //       const id = idx + 1;
  //       item.id = id;
  //     });
  //     return this.arr;
  //   },
  // },
  components: { LeftPanel, MainPanel },
};
</script>

<style scoped></style>
