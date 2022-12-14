<template>
  <div class="row main">
    <div class="row">
      <div @click="clickTreeList" :key="listShowKey" class="my-i col-1">
        <i class="material-icons" v-show="listData.show">expand_more</i>
        <i class="material-icons" v-show="!listData.show">chevron_right</i>
      </div>

      <input
        type="checkbox"
        :key="'Input' + listData.id + listShowKey"
        :Id="'Input' + listData.id + listShowKey"
        v-model="listIndeterminate"
        v-if="listIndeterminate !== 'mixed'"
        @change="checkTreeList"
        class="col-1"
      />
      <span v-else class="col-1" @click="checkTreeList">☯</span>
      <p @click="clickTreeList" class="col-9">List {{ listData.id }}</p>
    </div>
    <div v-show="listData.show" :key="listShowKey" class="my-text row">
      <ListItem
        v-for="item of listData.list"
        :key="'Item' + item.id + listShowKey"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ListItem from './ListItem/ListItem.vue';
// import { mdiChevronDown, mdiChevronUp } from '@mdi/js';

export default {
  data() {
    return {
      listKey: Math.random(),
    };
  },
  props: {
    dataList: {
      type: Object,
      validator(value) {
        return value.list?.length > 0;
      },
    },
  },
  computed: {
    listData() {
      return this.dataList;
    },
    listShowKey() {
      return this.listKey;
    },
    listIndeterminate() {
      const dataList = this.dataList;
      const list = dataList.list;

      let checkedCount = 0;
      for (const item of list) {
        if (item.checked) {
          checkedCount++;
        }
      }

      if (checkedCount === 0) {
        dataList.checked = false;
      } else if (checkedCount === list.length) {
        dataList.checked = true;
      } else {
        dataList.checked = 'mixed';
      }

      return dataList.checked;
    },
  },
  watch: {},
  methods: {
    ...mapMutations('LeftList', ['clickList', 'checkList']),
    clickTreeList() {
      this.clickList(this);
    },
    checkTreeList() {
      this.checkList(this);
    },
  },
  components: { ListItem },
};
</script>

<style scoped>
.main {
  margin-bottom: 20px;
}

.main i.material-icons {
  position: relative;
  z-index: 1;
}

.main .my-i {
  margin: 6px 14px 0px 0px;
}
</style>
