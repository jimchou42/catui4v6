<template>
  <div :id="attributes.ename" class="dialog" :style="{width: attributes.width+'px', height: attributes.height+'px', left: attributes.left, top: attributes.top}">
      <div class="dialog-title">{{attributes.title}}<div class="dialog-button fa fa-close"></div><div v-if="!config.hidegear" class="dialog-button fa fa-gear"></div></div>
      <div class="dialog-content" :style="{width: attributes.width+'px', height: (parseInt(attributes.height)-20)*2/3+'px'}">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CatDialog',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  }
}
</script>

<style scoped>
.dialog {
  background-color:#fff;
  -webkit-box-shadow:1px 1px 3px #292929;
  -moz-box-shadow:1px 1px 3px #292929;
  box-shadow:1px 1px 3px #292929;
  padding: 0px;
}

.dialog-title {
  height: 18px;
  color:#fff;
  background-color:#404040;
  font-size:8pt;
  font-weight:bold;
  padding:1px 6px;
  cursor:move;
}

.dialog-content {
  padding:4px;
  overflow: auto;
}
.dialog-button {
  margin: 2px 2px 2px 2px;
  float: right;
  cursor: pointer;
}
</style>
