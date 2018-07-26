<template>
<div>
  <div class="row">
    <hr size="1"/>
    <p>Tree Event</p>
    <div class="Checkbox" v-for="(item,key) in treeevent" :key="key">
      <label class="css-input">
        <input :id="key" type="checkbox" @change="chkevent" :checked="config.treeevent&&config.treeevent[key]">
        <span class="i-icon"></span>{{key}}:{{item.title}}
      </label>
    </div>

  </div>
</div>
</template>

<script>
import treeevent from '../js/treeevent.js'

export default {
  name: 'CatTreePanel',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  data: function() {
    return {
      treeevent: treeevent
    };
  },
  methods: {
    chkevent: function(e) {
      if(!this.config.treeevent) {
        this.$set(this.config, 'treeevent', {});
      }
      this.$set(this.config.treeevent, e.target.id, e.target.checked);
    }
  }
}
</script>

<style scoped>
</style>
