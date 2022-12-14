export default {
  clickList(context, data) {
    data.dataList.show = !data.dataList?.show;
    data.listKey = Math.random();
  },
  checkList(context, data) {
    data.dataList.checked = !(
      data.dataList.checked && data.dataList.checked !== 'mixed'
    );

    data.dataList.list?.forEach(
      (element) => (element.checked = data.dataList?.checked)
    );
    data.listKey = Math.random();
  },
};
