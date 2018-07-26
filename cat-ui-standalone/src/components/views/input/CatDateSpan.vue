<template>
  <CatFrame :attributes="frameattr" :config="config">
      <CatDatePicker :attributes="startdata.attributes" :config="startdata.config"/>
      <CatDatePicker :attributes="enddata.attributes" :config="enddata.config"/>
  </CatFrame>
</template>

<script>
export default {
  name: 'CatDateSpan',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods:{
    totalwd: function(attr) {
      var startwd = attr.ratio.split(':')[0];
      startwd = (!startwd)?'4':startwd;
      var endwd = attr.ratio.split(':')[1];
      endwd = (!endwd)?'4':endwd;
      return parseInt(startwd) + parseInt(endwd);
    },
    startrd:function(attr) {
      var startwd = attr.ratio.split(':')[0];
      startwd = (!startwd)?'4':startwd;
      var endwd = attr.ratio.split(':')[1];
      endwd = (!endwd)?'4':endwd;
      return Math.ceil((parseInt(startwd) + parseInt(endwd)) / parseInt(startwd));
    }
  },
  computed: {
    frameattr: function() {
      var attr = Object.assign({}, this.attributes);

      this.$set(attr, 'colWidth', this.totalwd(attr) + '');
      return attr;
    },
    startdata: function() {
      var attr = Object.assign({}, this.attributes);
      var startwd = Math.ceil(12 / this.startrd(attr));
      this.$set(attr, 'colWidth', startwd+'');
      this.$set(attr, 'ratio', attr.startRatio);
      this.$set(attr, 'ename', attr.startName);
      this.$set(attr, 'cname', attr.startCname);
      this.$set(attr, 'value', attr.startValue);

      var conf = Object.assign({}, this.config);
      this.$set(conf, 'hideframe', true);

      var data = Object.assign({}, {
        attributes: attr,
        config: conf
      });

      return data;
    },
    enddata: function() {
      var attr = Object.assign({}, this.attributes);
      var endwd = 12 - Math.ceil(12 / this.startrd(attr));
      this.$set(attr, 'colWidth', endwd+'');
      this.$set(attr, 'ratio', attr.endRatio);
      this.$set(attr, 'ename', attr.endName);
      this.$set(attr, 'cname', attr.endCname);
      this.$set(attr, 'value', attr.endValue);

      var conf = Object.assign({}, this.config);
      this.$set(conf, 'hideframe', true);

      var data = Object.assign({}, {
        attributes: attr,
        config: conf
      });

      return data;

    }
  }
}
</script>

<style scoped>
</style>
