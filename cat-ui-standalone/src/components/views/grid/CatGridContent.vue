<template>
  <div class="k-grid-content k-auto-scrollable" :style="{width: showwd+'px'}" @scroll.passive="onScroll">
    <table role="grid" style="touch-action: none;" :style="{width: config.colwd+'px'}"
      data-role="selectable" class="k-selectable" tabindex="0">
      <colgroup>
        <col v-for="child in config.col" :style="{width: child.attributes.width+'px'}">
      </colgroup>
      <tbody role="rowgroup">
        <tr role="row"
          class="">
          <td v-for="child in config.col" role="gridcell"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CatGridContent',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  computed: {
    showwd: function() {
      if(this.config.colwd>(this.config.contentwd-this.config.lockedwd)) {
        return this.config.contentwd-this.config.lockedwd-5;
      }
      else {
        return this.config.colwd;
      }
    }
  },
  methods: {
    onScroll: function(e) {
      var head = this.$root.$el.querySelector('.k-grid-header-wrap.k-auto-scrollable');
      if(head!==undefined&&head!==null) {
        head.scrollLeft = e.target.scrollLeft;
      }
    }
  }
}
</script>

<style scoped>
</style>
