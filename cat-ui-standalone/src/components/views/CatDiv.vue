<template>
<CatFrame :attributes="attributes" :config="config" @click.native.stop="click">
  <div :id="attributes.ename" :class="divclass" :prefix="attributes.prefix" :title="attributes.title">
    <slot></slot>
    <template v-if="attributes.ename!==undefined||attributes.id!==undefined">
    <CatButton v-for="child in $root.$data.config.pagebuttons"
      :key="child.attributes.ename"
      v-if="showbutton(child)"
      :attributes="child.attributes" :config="{hideframe:true}" />
    </template>
  </div>
</CatFrame>
</template>

<script>
import pointer from '../js/pointer.js'

export default {
  name: 'CatDiv',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  computed: {
    divclass: function() {
      var dclass = '';
      if(this.attributes.$type==='row') {
        dclass = 'row';
      }
      return dclass;
    }
  },
  methods: {
    click: pointer,
    showbutton: function(child) {
      var show = false;
      if(this.attributes.ename!==undefined) {
        show = show || (child.attributes.regionId==='DIV:'+this.attributes.ename.toUpperCase());
      }
      if(this.attributes.id!==undefined) {
        show = show || (child.attributes.regionId==='DIV:'+this.attributes.id.toUpperCase());
      }
      return show;
    }
  }
}
</script>

<style scoped>
</style>
