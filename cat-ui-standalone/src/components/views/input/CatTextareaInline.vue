<template>
  <textarea :id="attributes.ename" :name="attributes.ename"
         :required="attributes.required" :disabled="attributes.disabled"
         class="k-textarea" :class="{'i-state-readonly i-input-readonly': attributes.readonly}"
         :style="{'ime-mode: disabled': attributes.readonly}" @input="input">{{attributes.value}}</textarea>
</template>

<script>
export default {
  name: 'CatTextareaInline',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    input: function(event) {
      this.$emit('input', event);
    }
  }
}
</script>

<style scoped>
</style>
