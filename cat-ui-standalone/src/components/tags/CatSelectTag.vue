<template>
<span>&lt;EF:EFSelect{{attrstr}}&gt;
<template v-for="child in children" v-if="child.attributes.$type==='option'">
<CatOptionTag :attributes="child.attributes"/>
</template><template v-for="child in children" v-if="child.attributes.$type==='options'">
<CatOptionsTag :attributes="child.attributes"/>
</template><template v-for="child in children" v-if="child.attributes.$type==='codeoption'">
<CatCodeOptionTag :attributes="child.attributes"/>
</template>
&lt;/EF:EFSelect&gt;
</span>
</template>

<script>
import simplefy from '../js/simplefy.js'

export default {
  name: 'CatSelectTag',
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
          &&simplefy('select',key,attr)) {
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
