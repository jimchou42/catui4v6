/**
 * 从data中提取所有grid
 */
export default function getnodelist(data, resultlist, querytype) {
  if(!data&&!data.attributes&&!data.attributes.$type&&!querytype) {
    return;
  }
  if(!resultlist) {
    resultlist = [];
  }

  if(data.attributes.$type===querytype) {
    var obj = Object.assign({}, {
      attributes: Object.assign({}, data.attributes),
      config: Object.assign({}, data.config),
      children: []
    });
    resultlist.push(obj);
    return;
  }
  else {
    for(var child of data.children) {
      getnodelist(child, resultlist, querytype);
    }
  }

}
