<template>
<span>
<component :is="config.tagHtml" :attributes="attributes" :config="config" :children="children">
  <span v-if="children.length!==0">
  <CatLayoutTag v-for="child in children" :key="child.config.catid" :attributes="child.attributes" :config="child.config" :children="child.children" />
  </span>
</component>
</span>
</template>

<script>
export default {
  name: 'CatLayoutTag',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  }

}
</script>

<style scoped>
</style>
