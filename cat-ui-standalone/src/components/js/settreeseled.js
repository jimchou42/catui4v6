/**
 * 根据数据区复选框追加/清楚选择项，$type必须为'mdfield'
 */
import finder from './finder.js'

export default function settreeseled(vm, tree, item, checked) {
  if(!checked) {
    checked = false;
  }
  if(!item
    ||!vm.$root.$data.config.metadata
    ||item.attributes.$type!=='treeitem') {
    return;
  }
  //var tree = finder(vm.$root.$data, 'config', 'catid', item.config.treeid);
  if(!tree) {
    return;
  }
  if(!vm.$root.$data.config.selectlist) {
    vm.$set(vm.$root.$data.config, 'selectlist', {});
  }
  var catid = item.config.catid;
  if(checked&&item.attributes.type==='field') {
    var obj = Object.assign({}, item.attributes);
    vm.$set(vm.$root.$data.config.selectlist, catid, obj);
  }
  else {
    vm.$delete(vm.$root.$data.config.selectlist, catid);
  }
  if(item.children!==undefined) {
    for(var ichild of item.children) {
      vm.$set(ichild.config, 'checked', checked);
      settreeseled(vm, tree, ichild, checked);
    }
  }
}
