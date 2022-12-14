<template>
  <div class="row">
    <div
      :style="{ backgroundColor: element.color }"
      class="itemElement col-1"
      :id="element.refId"
      :key="'itemElement' + itemElementShowKey + element.id"
      v-for="element of itemData"
      @click="deleteItemElement"
    ></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return { itemElementKey: Math.random() };
  },
  props: {
    item: {
      type: Object,
      default(value) {
        return {};
      },
      validator(value) {
        return value?.count >= 0 && value?.count <= 10;
      },
    },
    itemArr: {
      type: Object,
      default(value) {
        return [{}];
      },
      validator(value) {
        return value?.length >= 0;
      },
    },
    mod: {
      type: Boolean,
      default(value) {
        return false;
      },
    },
  },
  methods: {
    ...mapMutations({
      storeDeleteItemElement: 'MainListItem/deleteItemElement',
      shuffle: 'MainListItem/shuffle',
    }),
    deleteItemElement(event) {
      this.storeDeleteItemElement({ event, value: this });
    },
  },
  computed: {
    itemData: {
      get() {
        const item = this.item;
        const itemArr = this.itemArr;
        let result = [];
        if (this.mod && itemArr.length > 0) {
          for (let i = 0; i < itemArr.length; ++i) {
            for (let j = 0; j < itemArr[i].count; ++j) {
              itemArr[i].refId = Math.random();
              result.push(itemArr[i]);
            }
          }

          this.shuffle(result);
        } else {
          for (let i = 0; i < item?.count; ++i) {
            result.push(item);
          }
        }
        return result;
      },
      set(newValue) {
        if (newValue?.count >= 0 && newValue?.count <= 10) {
          this.count = newValue?.count;
        }
        if (['red', 'yellow', 'green'].includes(newValue?.color)) {
          this.color = newValue?.color;
        }
      },
    },
    itemElementShowKey() {
      return this.itemElementKey;
    },
  },
};
</script>

<style scoped>
.itemElement {
  width: 50px;
  height: 50px;
  margin: 2px;
}
</style>
