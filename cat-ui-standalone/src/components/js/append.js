/**
  * 将组件添加到当前选中的容器，或添加到指定的节点
  */
import typeoptions from './typeoptions.js'
import finder from './finder.js'
import guid from './guid.js'
import camelcase from './camelcase.js'

export default function append(e, vm, parentData) {
  const elmmid = '-0-';
  // 搜索组件的sample数据
  var type = e.target.id;
  var elmprefix = vm.$root.$data.config.elmprefix;
  var elmename = vm.$root.$data.config.elmename;
  var elmcname = vm.$root.$data.config.elmcname;
  var searchdata = {
    attributes: {},
    config: {},
    children: typeoptions
  };
  var cfgd = finder(searchdata, 'attributes', 'value', type);
  if(!cfgd) {
    return;
  }
  var cfg = cfgd.config;
  var nodeattrs = Object.assign({}, cfg.sample);
  var nodecfg = Object.assign({}, {
    catid: guid(),
    tag: cfg.tag,
    tagHtml: cfg.tagHtml,
    catalog: cfg.catalog
  });
  if(elmename) {
    if(cfg.catalog==='elm') {
      if(elmprefix) {
        elmename = elmprefix + elmmid + elmename;
      }
      vm.$set(nodeattrs, 'ename', elmename);
    }
    else if(cfg.catalog==='col') {
      vm.$set(nodeattrs, 'ename', elmename);
    }
    else if(cfg.catalog==='grid') {
      vm.$set(nodeattrs, 'blockId', elmename);
    }
    else if(cfg.catalog==='layout'&&('ename' in nodeattrs)) {
      vm.$set(nodeattrs, 'ename', elmename);
    }
  }
  if(elmcname) {
    if((cfg.catalog==='elm'||cfg.catalog==='col')&&('cname' in nodeattrs)) {
      vm.$set(nodeattrs, 'cname', elmcname);
    }
    else if(cfg.catalog==='layout'&&('title' in nodeattrs)) {
      vm.$set(nodeattrs, 'title', elmcname);
    }
  }

  var target;
  // 指定添加到的节点
  if(parentData!==undefined) {
    target = parentData.children;
  }
  // 搜索当前选中的容器
  else {
    var curr = finder(vm.$root.$data, 'config', 'currlayout', true);
    //node.attributes.ename = guid();
    if(curr!==undefined&&curr!==null) {
      target = curr.children
    }
  }

  // 组织组件的数据结构
  var node = Object.assign({}, {
    attributes: nodeattrs,
    config: nodecfg,
    children: []
  });

  // 获取数据区选择列表（实际是个对象{catid为key: {ename:, cname:}, ...}
  var selectlist = vm.$root.$data.config.selectlist;

  if(target!==undefined&&target!==null) {
    // 如果组件不是elm/col/tree或者数据区未选择，则添加一个组件
    if(node.config.catalog!=='elm'
      &&node.config.catalog!=='col'
      &&node.attributes.value!=='tree'
      ||!selectlist
      ||JSON.stringify(selectlist)==='{}') {
      target.push(node);
    }
    // 如果数据区做了选择，则按数据区选择内容循环添加组件
    else {
      for(var key in selectlist) {
        if(!selectlist[key].$ck) {
          continue;
        }
        var anode = Object.assign({}, {
          attributes: Object.assign({}, node.attributes),
          config: Object.assign({}, node.config),
          children: []
        });
        var ename = camelcase((!selectlist[key].ename)?'':selectlist[key].ename);
        if(elmprefix&&anode.config.catalog==='elm') {
          ename = elmprefix + elmmid +ename;
        }
        vm.$set(anode.attributes, 'ename', ename);
        vm.$set(anode.attributes, 'cname', (!selectlist[key].cname)?'':selectlist[key].cname);
        vm.$set(anode.config, 'catid', guid());
        target.push(anode);
      }
    }

  }

  // 如果是tab页，至少增加一个标签页
  if(node.attributes.$type==='tab'&&node.children.length===0) {
    this.append({target: {id: 'tabdiv'}}, vm, node);
  }

}
