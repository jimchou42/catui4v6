<template>
<component :is="config.tag" :attributes="attributes" :config="config" :children="children">
  <div v-if="children.length!==0">
  <CatLayout v-for="child of children" :key="child.config.catid"
    :attributes="child.attributes" :config="child.config" :children="child.children"/>
  </div>
</component>
</template>

<script>
export default {
  name: 'CatLayout',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  }
}
</script>

<style scoped>
</style>
