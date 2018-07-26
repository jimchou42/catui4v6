<template>
  <CatFrame :attributes="attributes" :config="config">
    <div class="swapWrapper" style="display: block;">
        <div :style="{width: attributes.width+'px'}" style="display: inline-block; vertical-align: middle;">
            <label :data-for="attributes.leftName" style="display: block; padding-left: 18px;">{{(!attributes.leftCname)?'左侧树':attributes.leftCname}}</label>
            <div :style="{width: attributes.width+'px', height: attributes.height+'px'}" style="padding: 5px 15px; border: 1px solid #d9d9d9; border-radius: 3px; overflow: auto;">
                <div :id="attributes.leftName">
                </div>
            </div>
        </div>
        <div class="btnParent" style="text-align: center; display: inline-block; vertical-align: middle; margin: 0 5px;">
            <button id="btnR" type="button" class="i-btn-lg fa fa-angle-right" style="display:block; width: 34px; margin-bottom: 8px; margin-left: 0;"></button>
            <button id="btnL" type="button" class="i-btn-lg fa fa-angle-left" style="display:block; width: 34px; margin-left: 0;"></button>
        </div>
        <div :style="{width: attributes.width+'px'}" style="display: inline-block; vertical-align: middle;">
            <label :data-for="attributes.rightName" style="display: block; padding-left: 18px;">{{(!attributes.rightCname)?'右侧树':attributes.rightCname}}</label>
            <div :style="{width: attributes.width+'px', height: attributes.height+'px'}" style="padding: 5px 15px; border: 1px solid #d9d9d9; border-radius: 3px; overflow: auto;">
                <div :id="attributes.rightName">
                </div>
            </div>
        </div>
    </div>
  </CatFrame>
</template>

<script>
export default {
  name: 'CatSwap',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  }
}
</script>

<style scoped>
</style>
