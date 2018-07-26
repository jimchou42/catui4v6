<template>
  <div :class="'col-md-'+attributes.colWidth">
    <div class="form-group">
      <label :data-for="attributes.ename" class="control-label" :class="'col-xs-'+attributes.ratio.split(':')[0]">{{attributes.cname}}</label>
      <div :class="'col-xs-'+attributes.ratio.split(':')[1]">
  		<pre>{{attributes.value}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatPre',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  }
}
</script>

<style scoped>
</style>
