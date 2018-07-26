<template>
<span>&lt;div{{divclass}}{{attrstr}}&gt;
  <slot></slot>
&lt;/div&gt;
</span>
</template>

<script>
export default {
  name: 'CatDivTag',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  computed: {
    divclass: function() {
      var dclass = '';
      if(this.attributes.$type==='row') {
        dclass = ' class=\"row\"';
      }
      else if(this.attributes.$type==='col') {
        if(!this.attributes.colWidth) {
          return '';
        }
        else {
          dclass = ' class=\"col-md-'+this.attributes.colWidth+'\"';
        }
      }
      return dclass;
    },
    attrstr: function() {
      var str = '';
      for(var key in this.attributes) {
        var attr = this.attributes[key];
        if(key==='$type'||key==='colWidth') {
          continue;
        }
        else if(key==='ename') {
          str = str + ' id=\"' + attr + '\"';
        }
        else if(attr!==''&&typeof attr!=='object') {
          str = str + ' ' + key + '=\"'+ attr + '\"';
        }
      }
      return str;
    }
  }
}
</script>

<style scoped>
</style>
