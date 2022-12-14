<template>
  <div class="row">
    <List
      v-for="list of panelData"
      :id="'List' + list.id"
      :key="'List' + list.id + listShow"
      :dataList="list"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import List from './List/List.vue';

export default {
  data() {
    return { panelKey: Math.random() };
  },
  props: {
    // dataArr: {
    //   type: Array,
    //   validator(value) {
    //     return value?.length > 0;
    //   },
    // },
  },
  computed: mapGetters({
    panelData: 'dataArr',
    listShow: 'MainPanel/listShow',
  }),
  // {
  //   panelData() {
  //     // console.log('dataArr', dataArr);
  //     return this.$store.getters.dataArr;
  //   },
  //   listShow() {
  //     return this.$store.getters.listShow;
  //   },
  // },
  components: { List },
};
</script>

<style scoped></style>
