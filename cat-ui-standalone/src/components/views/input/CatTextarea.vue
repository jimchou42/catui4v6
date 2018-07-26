<template>
  <CatFrame v-if="attributes.inline" :attributes="attributes" :config="config">
  <CatTextareaInline :attributes="attributes" :config="config" :children="children" @input="input"/>
  </CatFrame>
  <CatFrame v-else :attributes="attributes" :config="config">
    <div class="form-group">
      <label :data-for="attributes.ename" :class="'col-xs-'+attributes.ratio.split(':')[0]" class="control-label">
        <span class="i-input-required" v-if="attributes.required">*</span>{{attributes.cname}}
      </label>
      <div :class="'col-xs-'+attributes.ratio.split(':')[1]">
        <CatTextareaInline :attributes="attributes" :config="config" :children="children" @input="input"/>
      </div>
    </div>
  </CatFrame>
</template>

<script>
export default {
  name: 'CatTextarea',
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
