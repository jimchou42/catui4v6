<template>
  <CatFrame v-if="attributes.inline" :attributes="attributes" :config="config">
  <CatSelectInline :children="children" :attributes="attributes" :config="config"/>
  </CatFrame>
  <CatFrame v-else :attributes="attributes" :config="config">
    <div class="form-group">
      <label class="control-label" :class="'col-xs-'+attributes.ratio.split(':')[0]" :data-for="attributes.ename">
        <span class="i-input-required" v-if="attributes.required">*</span>{{attributes.cname==='$type'?'type':attributes.cname}}
      </label>
      <div :class="'col-xs-'+attributes.ratio.split(':')[1]">
        <CatSelectInline :children="children" :attributes="attributes" :config="config"/>
      </div>
    </div>
  </CatFrame>
</template>

<script>
export default {
  name: 'CatSelect',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  }
}
</script>

<style scoped>
</style>
