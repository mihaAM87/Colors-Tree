<template>
  <div class="row">
    <List
      v-for="list of panelData"
      :id="'List' + list.id"
      :key="'List' + list.id"
      :dataList="list"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import List from './List/List.vue';

export default {
  data() {
    return {};
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
  }),
  components: { List },
};
</script>

<style scoped></style>
