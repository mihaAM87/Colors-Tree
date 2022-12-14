<template>
  <div class="row main">
    <div class="row">
      <div :class="[listData.show ? 'col-6' : 'row']">
        <button @click="clickList" type="button" class="btn btn-light">
          List {{ listData.id }}
        </button>
      </div>
      <div class="col-6" v-show="listData.show" :key="listShowKey">
        <button class="btn btn-info" type="button" @click="mixElements">
          {{ listShowKeyChanged ? 'Сортировать' : 'Перемешать' }}
        </button>
      </div>
    </div>
    <div v-show="listData.show" :key="listShowKey" class="row">
      <div
        v-for="item of listData.list"
        :key="item.changeId + listShowKey"
        class="row"
        v-show="!mixElementsState && item.checked"
      >
        <ListItem :item="item" :mod="mixElementsState" />
      </div>
      <div :key="'Item' + listShowKey" class="row" v-show="listShowKeyChanged">
        <ListItem :itemArr="listArr" :mod="mixElementsState" />
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem/ListItem.vue';

export default {
  data() {
    return {
      listKey: Math.random(),
      mixState: false,
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
    listArr() {
      return this.dataList.list.filter((item) => item.checked);
    },
    listShowKey() {
      return this.listKey;
    },
    listShowKeyChanged() {
      return (
        this.mixState &&
        this.dataList.list.filter((item) => item.count > 0).length > 0
      );
    },
    mixElementsState() {
      return this.mixState;
    },
  },
  methods: {
    mixElements() {
      this.mixState = !this.mixState;
      this.listKey = Math.random();
    },
    clickList() {
      this.dataList.show = !this.dataList?.show;
      this.listKey = Math.random();
    },
  },
  components: { ListItem },
};
</script>

<style scoped>
.main {
  margin-bottom: 20px;
}
</style>
