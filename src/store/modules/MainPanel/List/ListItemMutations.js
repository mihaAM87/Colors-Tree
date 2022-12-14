export default {
  shuffle(context, array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

      // поменять элементы местами
      // мы используем для этого синтаксис "деструктурирующее присваивание"
      // подробнее о нём - в следующих главах
      // то же самое можно записать как:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  },
  deleteItemElement(context, data) {
    if (!data.value.mod) {
      --data.value.item.count;
    } else {
      const findElement = data.value.itemData.find(
        (item) => item.refId == data.event.target.id
      );
      --data.value.itemArr.find((item) => item.id == findElement.id).count;
      data.value.itemData = data.value.itemData.filter(
        (item) => item.refId === data.event.target.id
      );
    }
    data.value.itemElementKey = Math.random();
  },
};
