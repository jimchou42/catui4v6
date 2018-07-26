<template>
  <div v-if="!attributes.inline" :class="'col-md-'+attributes.colWidth">
    <div class="form-group">
      <label :data-for="attributes.ename" :class="'col-xs-'+attributes.ratio.split(':')[0]" class="control-label">{{attributes.cname}}</label>
      <div :class="'col-xs-'+attributes.ratio.split(':')[1]">
  	<select :id="attributes.ename" :name="attributes.ename" :value="attributes.value" @change="change">
  		<option v-for="child in children" :key="child.attributes.value" :value="child.attributes.value" :tag="child.config.tag" :tagHtml="child.config.tagHtml" :selected="attributes.value===child.attributes.value">{{child.attributes.label}}</option>
  	</select>
      </div>
    </div>
  </div>
  <select v-else :id="attributes.ename" :name="attributes.ename" :value="attributes.value" @change="change">
    <option v-for="child in children" :key="child.config.catid" :value="child.attributes.value" :tag="child.config.tag" :tagHtml="child.config.tagHtml" :selected="attributes.value===child.attributes.value">{{child.attributes.label}}</option>
  </select>

</template>

<script>
export default {
  name: 'CatSelectNative',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    change: function(event) {
      this.attributes.value = event.target.value;
      this.$emit('change', event);
    }
  }
}
</script>

<style scoped>
</style>
