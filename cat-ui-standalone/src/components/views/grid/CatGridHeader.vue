<template>
  <div class="k-grid-header" style="padding-right: 9px;">
    <CatGridHeaderLocked :attributes="attributes" :config="config" :children="children"/>
    <CatGridHeaderWrap :attributes="attributes" :config="config" :children="children"/>
  </div>
</template>

<script>
export default {
  name: 'CatGridHeader',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  }
}
</script>

<style scoped>
</style>
