<template>
  <CatFrame :attributes="attributes" :config="config" @click.native.stop="click">
  <div :id="attributes.ename" :data-title="attributes.title" class="i-region block nav-region"
      :class="{'block-opt-fullscreen':config.fullscreen, 'block-opt-hidden':config.hidden}">
    <div class="block-header i-region-header" v-if="attributes.head!=='hidden'">
      <span class="i-title">{{ attributes.title }}</span>
      <ul class="block-options">
        <li v-if="attributes.showClear">
          <button type="button" id="aregion-trash">
            <i class="fa fa-trash"></i>
          </button>
        </li>
        <li>
          <button type="button" data-toggle="block-option" data-action="fullscreen_toggle" @click="fullscreen">
            <i class="si" :class="{'si-size-actual':config.fullscreen, 'si-size-fullscreen':(!config.fullscreen||config.fullscreen===false)}"></i>
          </button>
        </li>
        <li>
          <button type="button" data-toggle="block-option" data-action="content_toggle" @click="hidden">
            <i class="si" :class="{'si-arrow-down':config.hidden, 'si-arrow-up':(!config.hidden||config.hidden===false)}"></i>
          </button>
        </li>
      </ul>
    </div>
    <div class="block-content form-horizontal">
      <slot></slot>
    </div>
    <div class="row">
      <div class="button-region">
        <button v-for="child in $root.$data.config.pagebuttons"
          :key="child.attributes.ename"
          v-if="attributes.ename&&child.attributes.regionId===attributes.ename.toUpperCase()"
          type="button" class="i-btn-lg" tabindex="-1" data-toggle="tooltip" :title="child.attributes.desc"
            :id="child.attributes.ename"
            :layout="child.attributes.layout"
            :disabled="child.attributes.disabled">
          <template v-if="child.attributes.layout==='0'||child.attributes.layout==='1'">{{child.attributes.cname}}</template>
          <span v-else-if="child.attributes.layout==='2'" :id="child.attributes.ename" :class="child.attributes.uri+' i-btn-only-icon'"></span>
          <template v-else-if="child.attributes.layout==='3'">
          <span :class="child.attributes.uri" :id="child.attributes.ename"></span>{{child.attributes.cname}}</template>
        </button>
      </div>
    </div>
  </div>
</CatFrame>
</template>

<script>
import pointer from '../js/pointer.js'

export default {
  name: 'CatRegion',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    click: pointer,
    fullscreen: function(e) {
      if(!this.config.fullscreen) {
        this.$set(this.config, 'fullscreen', true);
      }
      else {
        this.$set(this.config, 'fullscreen', !this.config.fullscreen);
      }
    },
    hidden: function(e) {
      if(!this.config.hidden) {
        this.$set(this.config, 'hidden', true);
      }
      else {
        this.$set(this.config, 'hidden', !this.config.hidden);
      }
    }
  }
}
</script>

<style scoped>
.emptyrow {
	height: 50px;
}
</style>
