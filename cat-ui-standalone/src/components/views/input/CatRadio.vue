<template>
  <CatFrame v-if="attributes.inline" :attributes="attributes" :config="config">
  <CatRadioInline :attributes="attributes" :config="config" :children="children" @change="change" />
  </CatFrame>
  <CatFrame v-else class="Radio" :attributes="attributes" :config="config">
    <CatRadioInline :attributes="attributes" :config="config" :children="children" @change="change"/>
  </CatFrame>
</template>

<script>
export default {
  name: 'CatRadio',
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
