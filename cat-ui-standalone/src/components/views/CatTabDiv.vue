<template>
  <div :title="attributes.title" :id="config.catid" class="k-content" :class="{'k-state-active':config.active}"
    role="tabpanel" :aria-expanded="config.active" :aria-hidden="!config.active"
    style="height: auto;" :style="{opacity: config.active?1:0, display: config.active?'block':'none'}">
    <CatFrame :attributes="attributes" :config="config" @click.native.stop="click">
      <div>
        <slot></slot>
      </div>
    </CatFrame>
  </div>
</template>

<script>
import pointer from '../js/pointer.js'

export default {
  name: 'CatTabDiv',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    click: pointer
  }
}
</script>

<style scoped>
</style>
