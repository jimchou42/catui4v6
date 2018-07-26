/**
 * 从data的type对象(attributes或config，不能是children)中
 * 查找包含key:value的data，并遍历data.children，返回第一个匹配的data
 */
export default function finder(data, type, key, value) {
  if(!data
    ||!type
    ||type==='children'
    ||!key
    ||!data[type]) {
    return null;
  }
  var node = data[type];
  if(node[key]!==undefined&&node[key]===value) {
      return data;
  }
  else if(!data.children||data.children.length===0) {
    return null;
  }
  else {
    var cdata = data.children;
    for(var i in cdata) {
      var fdata = finder(cdata[i], type, key, value);
      if(fdata!==null&&fdata!==undefined) {
        return fdata;
      }
    }
  }

}
