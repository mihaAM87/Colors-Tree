<template>
  <div class="row">
    <div class="col-6 form-group">
      <input
        type="checkbox"
        v-model="itemData.checked"
        class="col-2"
        @change="itemData.changeId = Math.random()"
      />
      <p class="col-10">Item {{ itemData.id }}</p>
    </div>
    <div class="col-6 form-group">
      <input
        type="number"
        max="10"
        min="0"
        v-model="itemData.count"
        class="col-6"
      />
      <input type="color" v-model="itemData.color" class="col-6" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default(value) {
        return { id: 0, color: 'red', count: 1, checked: false };
      },
      validator(value) {
        return value?.count >= 0 && value?.count <= 10;
      },
    },
  },
  computed: {
    itemData: {
      get() {
        return this.item;
      },
      set(newValue) {
        if (newValue?.count >= 0 && newValue?.count <= 10) {
          this.count = newValue?.count;
        }
      },
    },
  },
};
</script>

<style scoped></style>
