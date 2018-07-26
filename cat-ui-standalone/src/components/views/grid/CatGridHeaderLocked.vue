<template>
  <div class="k-grid-header-locked"
    style="touch-action: none;" :style="{width: config.lockedwd+'px'}" data-role="resizable">
    <table style="">
      <colgroup>
        <col style="width: 40px">
        <col v-if="attributes.rowNo" style="width: 40px">
        <col v-for="child in config.lockedcol" :style="{width: child.attributes.width+'px'}">
      </colgroup>
      <thead>
        <tr>
          <th scope="col" role="columnheader" aria-haspopup="true"
            rowspan="1" data-index="0" align="center"
            resizable="false" class="k-header"><input type="checkbox"
            class="check-all"></th>
          <th v-if="attributes.rowNo" scope="col" role="columnheader" aria-haspopup="true" 
            rowspan="1" data-index="1"
            resizable="false" style="padding: 3px;" class="k-header"><span>序号</span>
          </th>
          <th v-for="(child, index) in config.lockedcol" scope="col" role="columnheader" :data-field="child.attributes.ename"
            aria-haspopup="true" rowspan="1" :data-title="child.attributes.cname" :data-index="index+1"
            style="text-align: center" class="k-header" :class="{'k-with-icon k-filterable':attributes.filterable}">
            <a v-if="attributes.filterable" class="k-grid-filter" href="#" tabindex="-1"><span class="k-icon k-i-filter">过滤</span></a>
            <span v-if="child.attributes.required" class="i-input-required">*</span>
            <a v-if="child.attributes.copy" class="k-grid-copy k-state-border-down" data-type="C" href="javascript:;"><span class="k-icon k-i-maximize"></span></a>
            {{child.attributes.cname}}
          </th>
        </tr>
      </thead>
    </table>
    <div class="k-resize-handle"
      style="top: 0px; left: 137px; height: 29px; width: 9px; display: none;">
      <div class="k-resize-handle-inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatGridHeaderLocked',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  }
}
</script>

<style scoped>
</style>
