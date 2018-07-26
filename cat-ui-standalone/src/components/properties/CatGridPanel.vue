<template>
<div>
  <div class="row">
    <hr size="1"/>
    <p>Grid Toolbar Config</p>
    <label class="css-input">
      <input id="hidden" type="checkbox" :checked="attributes.toolbarConfig.hidden" @change="change">
      <span class="i-icon"></span>hidden
    </label>
    <label class="css-input" v-if="!attributes.toolbarConfig.hidden">
      <input id="insert" type="checkbox" :checked="attributes.toolbarConfig.insert" @change="change">
      <span class="i-icon"></span>insert
    </label>
    <label class="css-input" v-if="!attributes.toolbarConfig.hidden">
      <input id="save" type="checkbox" :checked="attributes.toolbarConfig.save" @change="change">
      <span class="i-icon"></span>save
    </label>
    <label class="css-input" v-if="!attributes.toolbarConfig.hidden">
      <input id="cancel" type="checkbox" :checked="attributes.toolbarConfig.cancel" @change="change">
      <span class="i-icon"></span>cancel
    </label>
    <label class="css-input" v-if="!attributes.toolbarConfig.hidden">
      <input id="delete" type="checkbox" :checked="attributes.toolbarConfig.delete" @change="change">
      <span class="i-icon"></span>delete
    </label>
  </div>
  <div class="row">
    <hr size="1"/>
    <p>Grid Event</p>
    <div class="Checkbox" v-for="(item,key) in gridevent" :key="key">
      <label class="css-input">
        <input :id="key" type="checkbox" @change="chkevent" :checked="config.gridevent&&config.gridevent[key]">
        <span class="i-icon"></span>{{key}}:{{item.title}}
      </label>
    </div>

  </div>
</div>
</template>

<script>
import gridevent from '../js/gridevent.js'

export default {
  name: 'CatGridPanel',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  data: function() {
    return {
      gridevent: gridevent
    };
  },
  methods: {
    change: function(e) {
      if(!this.attributes.toolbarConfig) {
        this.$set(this.attributes, 'toolbarConfig', {});
      }
      this.$set(this.attributes.toolbarConfig, e.target.id, e.target.checked);
      if(e.target.id==='hidden'&&e.target.checked) {
        this.$delete(this.attributes.toolbarConfig, 'insert');
        this.$delete(this.attributes.toolbarConfig, 'save');
        this.$delete(this.attributes.toolbarConfig, 'cancel');
        this.$delete(this.attributes.toolbarConfig, 'delete');
      }
    },
    chkevent: function(e) {
      if(!this.config.gridevent) {
        this.$set(this.config, 'gridevent', {});
      }
      this.$set(this.config.gridevent, e.target.id, e.target.checked);
    }
  }
}
</script>

<style scoped>
</style>
