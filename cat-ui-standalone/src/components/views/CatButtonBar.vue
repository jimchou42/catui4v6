<template>
  <CatFrame :attributes="attributes" :config="config">
    <CatButton v-for="child in $root.$data.config.pagebuttons"
      :key="child.attributes.ename"
      v-if="child.attributes.regionId===attributes.regionId.toUpperCase()"
      :attributes="child.attributes" :config="{hideframe:true}" />
  </CatFrame>
</template>

<script>
export default {
  name: '',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  }
}
</script>

<style scoped>
</style>
