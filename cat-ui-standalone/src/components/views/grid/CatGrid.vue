<template>
  <CatFrame :attributes="attributes" :config="config" @click.native.stop="click">
  <div class="k-content" style="overflow: auto" :id="config.catid">
		<div :id="'ef_grid_'+attributes.blockId" :style="{height: attributes.height?attributes.height+'px':undefined}"
			class="no-scrollbar k-grid k-widget k-editable k-grid-lockedcolumns"
			data-role="grid" v-if="$root.$data.config.preview">
    <CatGridToolbar :attributes="attributes" :config="config" :children="children" />
    <CatGridHeader :attributes="attributes" :config="gridconfig" :children="children" />
    <CatGridContentLocked :attributes="attributes" :config="gridconfig" :children="children" />
    <CatGridContent :attributes="attributes" :config="gridconfig" :children="children" />
    <CatGridPageWrap :attributes="attributes" v-if="attributes.pagerPosition==='bottom'" />
    </div>
    <div v-else>
      <div v-for="child in children" :key="child.config.catid">
        <CatColumn :attributes="child.attributes" :config="child.config" />
      </div>
    </div>
  </div>
  </CatFrame>
</template>

<script>
import pointer from '../../js/pointer.js'

export default {
  name: 'CatGrid',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    click: pointer,
  },
  mounted: function() {
    var content = this.$el.querySelector('.k-content');
    var contentwidth=content.getBoundingClientRect().width;
    this.$set(this.config, 'contentwd', Math.ceil(contentwidth));
  },
  updated: function() {
    var content = this.$el.querySelector('.k-content');
    var contentwidth=content.getBoundingClientRect().width;
    this.$set(this.config, 'contentwd', Math.ceil(contentwidth));
  },
  computed: {
    gridconfig: function() {
      var gc = Object.assign({}, this.config);
      var lktw = 40;
      if(this.attributes.rowNo) {
        lktw = 80;
      }
      var cltw = 0;
      var lk = [];
      var hd = [];
      var children = this.children;
      for(var i in children) {
        var child = children[i];
        if(child.attributes.hidden) {
          continue;
        }
        var tw = 0;
        if(!child.attributes.width) {
          this.$set(child.attributes, 'width', '100');
          tw = 100;
        }
        else {
          tw = parseInt(child.attributes.width);
        }
        // col
        if(!child.attributes.locked) {
          cltw = cltw + tw;
          hd.push(child);
        }
        // locked col
        else {
          lktw = lktw + tw;
          lk.push(child);
        }

      }
      this.$set(gc, 'lockedcol', lk);
      this.$set(gc, 'col', hd);
      this.$set(gc, 'colwd', cltw);
      this.$set(gc, 'lockedwd', lktw);
      return gc
    }
  }

}
</script>

<style scoped>
</style>
