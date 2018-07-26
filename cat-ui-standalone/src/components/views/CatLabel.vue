<template>
<CatFrame :attributes="attributes" :config="config">
<label class="control-label" :class="attributes.colWidth?'col-md-'+attributes.colWidth:''" :style="attributes.style">{{attributes.text}}</label>
</CatFrame>
</template>

<script>
export default {
  name: 'CatLabel',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  }
}
</script>

<style scoped>
</style>
