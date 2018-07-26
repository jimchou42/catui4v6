<template>
  <CatFrame v-if="attributes.inline" :attributes="attributes" :config="config">
  <CatTextInline :attributes="attributes" :config="config" :children="children" :value="attributes.value" @input="input"/>
  </CatFrame>
  <CatFrame v-else :attributes="attributes" :config="config">
    <div class="form-group">
      <label :data-for="attributes.ename" :class="'col-xs-'+attributes.ratio.split(':')[0]" class="control-label">
        <span class="i-input-required" v-if="attributes.required">*</span>{{attributes.cname}}
      </label>
      <div :class="'col-xs-'+attributes.ratio.split(':')[1]">
        <CatTextInline :attributes="attributes" :config="config" :children="children" :value="attributes.value" @input="input"/>
      </div>
    </div>
  </CatFrame>
</template>
<script>
export default {
  name: 'CatText',
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
