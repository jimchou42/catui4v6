/**
 * 在data.children中查找包含config.catid的元素，
 * 并将其所在children中的末尾位置复制新增num个
 */
import guid from './guid.js'

 export default function copyadd(data, catid, num) {
   if(!data
     ||!catid
     ||!num
     ||num===0
     ||!data.children
     ||data.children.length===0) {
     return false;
   }
   var children = data.children;
   for(var i in children) {
     var child = children[i];
     if(child.config!==undefined
       &&child.config.catid!==undefined
       &&child.config.catid===catid) {
       for(var n=0; n<num; n++) {
         var newchild = Object.assign({}, {
           attributes: Object.assign({}, child.attributes),
           config: Object.assign({}, child.config),
           children: []
         });
         newchild.config.catid = guid();
         children.push(newchild);
       }
     }
     else if(copyadd(child, catid, num)) {
       return true;
     }
   }
}
