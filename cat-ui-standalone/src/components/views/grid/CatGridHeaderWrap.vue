<template>
  <div class="k-grid-header-wrap k-auto-scrollable"
    data-role="resizable" style="touch-action: none;" :style="{width: showwd+'px'}">
    <table role="grid" :style="{width: config.colwd+'px'}">
      <colgroup>
        <col v-for="child in config.col" :style="{width: child.attributes.width+'px'}">
      </colgroup>
      <thead role="rowgroup">
        <tr role="row">
          <th v-for="(child, index) in config.col" scope="col" role="columnheader" :data-field="child.attributes.ename"
            aria-haspopup="true" rowspan="1" :data-title="child.attributes.cname" :data-index="index+1+config.lockedcol.length"
            style="text-align: center" class="k-header" :class="{'k-with-icon k-filterable':attributes.filterable}">
            <a v-if="attributes.filterable" class="k-grid-filter" href="#" tabindex="-1"><span class="k-icon k-i-filter">过滤</span></a>
            <span v-if="child.attributes.required" class="i-input-required">*</span>
            <a v-if="child.attributes.copy" class="k-grid-copy k-state-border-down" data-type="C" href="javascript:;"><span class="k-icon k-i-maximize"></span></a>{{child.attributes.cname}}
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CatGridHeaderWrap',
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
  }
}
</script>

<style scoped>
</style>
