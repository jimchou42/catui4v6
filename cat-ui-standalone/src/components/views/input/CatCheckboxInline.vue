<template>
  <label class="css-input">
    <input :id="attributes.ename" :name="attributes.ename" :value="attributes.value" :checked="attributes.checked" type="checkbox" @change="change">
    <span class="i-icon"></span>{{ attributes.cname }}
  </label>
</template>

<script>
export default {
  name: 'CatCheckboxInline',
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
      this.attributes.checked = event.target.checked;
      this.$emit('change', event);
    }
  }
}
</script>

<style scoped>
</style>
