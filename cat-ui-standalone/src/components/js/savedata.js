/**
 * 保存数据，简化config内容
 */
import finder from './finder.js'

export default function savedata(vm) {
  var rootdata = vm.$root.$data;
  var curr = finder(rootdata, 'config', 'currlayout', true);
  if(curr) {
    vm.$delete(curr.config, 'currlayout');
  }
  var save = Object.assign({}, {
    attributes: rootdata.attributes,
    children: rootdata.children,
    config: {
      catid: rootdata.config.catid,
      tag: rootdata.config.tag,
      tagHtml: rootdata.config.tagHtml,
      pagebuttons: rootdata.config.pagebuttons
    }
  });
  var callback = window.__catsavecallback;
  if(callback!==undefined&&typeof callback==='function') {
    __catsavecallback(save);
  }

  var setcallback = rootdata.config.$catsavecallback;
  if(setcallback!==undefined&&typeof setcallback==='function') {
    setcallback(save);
  }

}
