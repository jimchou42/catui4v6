<template>
  <CatFrame :attributes="{ename: attributes.ename, $type: attributes.$type, colWidth: '12', inline: false}" :config="config">
    <div class="form-group" v-if="$root.$data.config.preview!==true">
    <div class="col-xs-12">
    <input :id="attributes.ename" :name="attributes.ename" :value="'[隐藏域:'+attributes.cname+']:'+attributes.value" type="text"
         class="k-textbox i-state-readonly i-input-readonly" style="ime-mode: disabled">
    </div>
  </div>
  </CatFrame>
</template>

<script>
export default {
  name: 'CatHidden',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  }
}
</script>

<style scoped>
</style>
