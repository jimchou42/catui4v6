/**
 * 在data.children中查找包含config.catid的元素，
 * 并将其所在children中的位置左(右)移一位，头(尾)位置不移动
 */
 export default function arraymove(data, catid, step) {
   if(!data
     ||!catid
     ||!step
     ||step===0
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
       if(i==='0'&&step<0||step>0&&i===children.length+1+'') {
         return true;
       }
       else {
         var self = children.splice(i, 1);
         children.splice(parseInt(i)+step, 0, self[0]);
         return true;
       }
     }
     else if(arraymove(child, catid, step)) {
       return true;
     }
   }
}
