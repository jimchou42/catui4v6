/**
 * Properties/Data/Tag等标签页的拖拽实现
 */
export default function(el) {
  var oDiv=el;

  if(oDiv.id==='__cat-props'&&oDiv.style.left==='') {
    oDiv.style.left = '-240px';
    var wd = oDiv.querySelector('.dialog-title').style.width;
  }
  else if(oDiv.id==='__cat-data'&&oDiv.style.left==='') {
    oDiv.style.left = '210px';
  }
  else if(oDiv.id==='__cat-tag'&&oDiv.style.left==='') {
    oDiv.style.left = '620px';
  }

  oDiv.onmousedown=function(e){
    if(e.target.className!=='dialog-title dialog-title-config') {
      return;
    }
    oDiv.style.zIndex = 1002;
    var l=e.clientX-oDiv.offsetLeft;
    var t=e.clientY-oDiv.offsetTop;
    var sDiv=document.querySelector('.k-animation-container');
    var sl,st
    if(sDiv!==null) {
      sl=e.clientX-sDiv.offsetLeft;
      st=e.clientY-sDiv.offsetTop;
    }
    document.onmousemove=function(e){
      oDiv.style.left=e.clientX-l+'px';
      oDiv.style.top=e.clientY-t+'px';
      if(sDiv!==null&&sDiv.id==='$type__listbox') {
        sDiv.style.left=e.clientX-sl+'px';
        sDiv.style.top=e.clientY-st+'px';
      }
    };
    oDiv.onmouseup=function(e){
      oDiv.style.zIndex = '';
      document.onmousemove=null;
      oDiv.onmouseup=null;
    }
  }
}
