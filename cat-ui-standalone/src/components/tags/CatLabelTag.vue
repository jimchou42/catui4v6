<template>
<span>&lt;label class="control-label"{{attrstr}}&gt;
{{text}}
&lt;/label&gt;
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
    text: function() {
      var txt = '';
      if(this.attributes.text) {
        txt = this.attributes.text;
      }
      return txt;
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
