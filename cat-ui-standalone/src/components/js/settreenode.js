import finder from './finder.js'
import guid from './guid.js'

export default function settreenode(treeid, pcatid, treeitems) {
  if(!treeid||!pcatid||!treeitems) {
    return;
  }
  var target;
  if(treeid==='__metadatatree') {
    target = this.$root.$data.config.metadata;
  }
  else if(treeid==='__dbdatatree') {
    target = this.$root.$data.config.dbdata;
  }
  else {
    return;
  }
  var pnode = finder(target, 'config', 'catid', pcatid);
  if(!pnode) {
    return;
  }
  for(var node of treeitems) {
    var ti = Object.assign({}, {
      attributes: {
        $type: 'treeitem',
        ename: node.label,
        cname: node.text,
        type: node.type
      },
      config: {
        catid: guid(),
        hideframe: true,
        isleaf: (!node.isleaf)?false:parseInt(node.isleaf),
        treeid: treeid,
        checkbox: (!node.checkbox)?true:node.checkbox
      },
      children: []
    });
    pnode.children.push(ti);
  }


}
