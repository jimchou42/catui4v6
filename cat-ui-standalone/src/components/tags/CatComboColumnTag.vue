<template>
<span>&lt;EF:EFComboColumn{{attrstr}}&gt;
  <template v-for="child in children">
  <CatOptionTag :attributes="child.attributes"/>
  </template>
&lt;/EF:EFComboColumn&gt;
</span>
</template>

<script>
import simplefy from '../js/simplefy.js'

export default {
  name: 'CatComboColumnTag',
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
          &&simplefy('combocol',key,attr)) {
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
