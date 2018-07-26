import settreenode from './settreenode.js'
import guid from './guid.js'

export default function querytree(vm, plabel, pcatid) {
  if(!vm||!plabel||!vm.children) {
    return 0;
  }
  //var result = [];
  var children = vm.children;
  var expandcount = 0;

  var querycall = window.__vm.$root.$data.config.$querytree;

  if(!querycall||typeof querycall!=='function') {
    settreenode(vm.config.treeid, pcatid, vm.config.children);
    return 1;
  }
  else {
    querycall(vm.config.treeid, plabel, pcatid);
    return 1;
  }

}
