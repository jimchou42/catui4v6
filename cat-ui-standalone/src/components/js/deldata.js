/**
 * 从data.children中查找包含config.catid数据，并从data.children中删除
 */
export default function deldata(data, catid, sc) {
  if(!data
    ||!catid
    ||!data.children
    ||data.children.length===0) {
    return false;
  }
  if(!sc) {
    sc = false;
  }
  var children = data.children;
  for(var i in children) {
    var child = children[i];
    if(child.config!==undefined
      &&child.config.catid!==undefined
      &&child.config.catid===catid) {
      var self = children.splice(i, 1);
      if(sc) {
        for(var n in self[0].children) {
          children.push(self[0].children[n]);
        }
      }
      return true;
    }
    else if(deldata(child, catid, sc)) {
      return true;
    }
  }
}
