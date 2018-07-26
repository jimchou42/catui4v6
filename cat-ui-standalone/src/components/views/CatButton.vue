<template>
<CatFrame :attributes="attributes" :config="config">
<button type="button"  class="i-btn-lg" tabindex="-1" data-toggle="tooltip" :title="attributes.desc"
  :id="attributes.ename"
  :layout="attributes.layout"
  :disabled="attributes.disabled"
  @click="click">
  <template v-if="attributes.layout==='0'||attributes.layout==='1'">{{attributes.cname}}</template>
  <span v-else-if="attributes.layout==='2'" :id="attributes.ename" :class="attributes.uri+' i-btn-only-icon'"></span>
  <template v-else="attributes.layout==='3'">
  <span :class="attributes.uri" :id="attributes.ename"></span>{{attributes.cname}}</template>
</button>
</CatFrame>
</template>

<script>
export default {
  name: 'CatButton',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    click: function(event) {
      this.$emit('click', event, this);
    }
  }

}
</script>

<style scoped>
</style>
