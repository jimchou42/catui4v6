/**
 * 设置当前容器
 */
import finder from './finder.js'

export default function(e) {
  if(this.config.dispointer) {
    return;
  }
  // 清除当前
  var curr = finder(this.$root.$data, 'config', 'currlayout', true);
  if(curr!==undefined&&curr!==null) {
    this.$delete(curr.config, 'currlayout');
  }

  // 置当前
  var id = this.config.catid;
  var data = finder(this.$root.$data, 'config', 'catid', id);
  if(data!==undefined&&data!==null) {
    this.$set(data.config, 'currlayout', true);
    this.$set(this.$root.$data.config, 'currcatalog', data.config.catalog);
  }
}
