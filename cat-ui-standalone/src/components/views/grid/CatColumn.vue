<template>
  <CatFrame :attributes="colattr" :config="config">
    <span>{{attributes.cname}}</span>
  </CatFrame>
</template>

<script>
export default {
  name: 'CatColumn',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  computed: {
    colattr: function() {
      return Object.assign({}, this.attributes, {colWidth: 2});
    }
  }
}
</script>

<style scoped>
</style>
