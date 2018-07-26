<template>
  <div class="k-grid-content-locked"
    style="height: 25px;" :style="{width: config.lockedwd+'px'}">
    <table data-role="selectable" class="k-selectable" tabindex="0"
      style="touch-action: none;">
      <colgroup>
        <col style="width: 40px">
        <col v-if="attributes.rowNo" style="width: 40px">
        <col v-for="child in config.lockedcol" :style="{width: child.attributes.width+'px'}">
      </colgroup>
      <tbody>
        <tr data-uid="749afa8e-df0d-4eaa-aeac-4ac7d3e4dd21" role="row"
          class="">
          <td align="center" role="gridcell" style="text-align: center;"><input
            type="checkbox" value="749afa8e-df0d-4eaa-aeac-4ac7d3e4dd21"
            class="kendo-check-box check-one"></td>
          <td v-if="attributes.rowNo" align="center" role="gridcell"><span class="row-no">1</span></td>
          <td v-for="child in config.lockedcol" role="gridcell"><div
              class="i-validate-helper i-edit-helper"></div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CatGridContentLocked',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  }
}
</script>

<style scoped>
</style>
