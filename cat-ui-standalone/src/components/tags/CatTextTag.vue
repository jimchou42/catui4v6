<template>
<span>&lt;EF:EFInput{{attrstr}}/&gt;
</span>
</template>

<script>
import simplefy from '../js/simplefy.js'

export default {
  name: 'CatTextTag',
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
        if(this.$root.$data.config.codesimplify
          &&simplefy('text',key,attr)) {
          continue;
        }
        else if(key==='$type') {
          str = str + ' type=\"' + attr + '\"'
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
