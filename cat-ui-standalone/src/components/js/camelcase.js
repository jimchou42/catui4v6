/**
 * 转换成驼峰命名
 */
export default function camelcase(value) {
  if(!value) {
    return value;
  }
  value =  value.toString().toLowerCase();
  if(value.indexOf('_')===-1) {
    return value;
  }
  var words = value.split('_');
  var result = words[0];
  for(var i=1;i<words.length;i++) {
    result = result+words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return result;
}
