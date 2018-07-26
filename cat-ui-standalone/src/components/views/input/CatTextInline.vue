<template>
  <input :id="attributes.ename" :name="attributes.ename" type="text"
         :required="attributes.required" :disabled="attributes.disabled"
         class="k-textbox" :class="{'i-state-readonly i-input-readonly': attributes.readonly}"
         :style="{'ime-mode: disabled': attributes.readonly}" :value="attributes.value" @input="input">
</template>

<script>
export default {
  name: 'CatTextInline',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    input: function(event) {
      this.attributes.value = event.target.value;
      this.$emit('input', event);
    }
  }
}
</script>

<style scoped>
</style>
