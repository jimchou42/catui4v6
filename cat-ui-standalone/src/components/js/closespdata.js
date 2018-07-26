/**
 * 删除Properties或下拉框弹出数据，主要用于保存data前
 * 清理掉不必要的数据
 */
export default function closespdata(vm, sp) {
  if(!vm) {
    return;
  }
  if(vm.$root.$data.config[sp]!==undefined) {
    vm.$delete(vm.$root.$data.config, sp);
  }
}
