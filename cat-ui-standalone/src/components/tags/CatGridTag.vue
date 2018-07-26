<template>
<span>&lt;EF:EFGrid{{attrstr}}&gt;
<slot></slot>
&lt;/EF:EFGrid&gt;
</span>
</template>

<script>
import simplefy from '../js/simplefy.js'

export default {
  name: 'CatGridTag',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  computed: {
    attrstr: function() {
      var str = '';
      for(var key in this.attributes) {
        var attr = this.attributes[key];
        if(key==='$type') {
          continue;
        }
        else if(key==='blockId') {
          str = str + ' blockId=\"'+ attr+'\"';
        }
        else if(this.$root.$data.config.codesimplify
          &&simplefy('grid',key,attr)) {
          continue;
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
