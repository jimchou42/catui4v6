<template>
  <CatFrame v-if="attributes.inline" :attributes="attributes" :config="config">
  <CatCheckboxInline :attributes="attributes" :config="config" :children="children" @change="change" />
  </CatFrame>
  <CatFrame v-else class="Checkbox" :attributes="attributes" :config="config">
    <CatCheckboxInline :attributes="attributes" :config="config" :children="children" @change="change"/>
  </CatFrame>
</template>

<script>
export default {
  name: 'CatCheckbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    change: function(event) {
      this.$emit('change', event);
    }
  }
}
</script>

<style scoped>
</style>
