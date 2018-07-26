<template>
<span>&lt;EF:EFSwap{{attrstr}}/&gt;
</span>
</template>

<script>
import simplefy from '../js/simplefy.js'

export default {
  name: 'CatSwapTag',
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
        else if(this.$root.$data.config.codesimplify
          &&simplefy('swap',key,attr)) {
          continue;
        }
        else if(attr!==''&&typeof attr!=='object'||key==='ename'||key==='id') {
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
