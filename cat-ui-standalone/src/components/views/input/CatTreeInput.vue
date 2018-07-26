<template>
  <CatFrame :attributes="attributes" :config="config">
      <div class="form-group">
      	<label class="control-label" :class="'col-xs-'+attributes.ratio.split(':')[0]">
          <span v-if="attributes.required" class="i-input-required">*</span>{{attributes.cname}}
        </label>
      	<div :class="'col-xs-'+attributes.ratio.split(':')[1]">
      		<input :name="attributes.ename" :id="attributes.ename" :value="attributes.value" style="display: none">
      		<span class="k-widget k-dropdown i-popup-input k-header">
      			<span class="k-dropdown-wrap" :class="{'i-state-readonly':attributes.readonly, 'i-state-disabled':attributes.disabled}">
      				<input :disabled="attributes.disabled" type="text" :name="'show_'+attributes.ename" :id="'show_'+attributes.ename"
                :value="attributes.value" class="popupInput" @input="input"
                :class="{'i-state-readonly i-input-readonly':attributes.readonly}"
                :style="{'ime-mode: disabled':attributes.readonly}">
      				<span class="k-select k-icon-container">
      					<span class="k-icon k-i-close" title="清除" role="button" data-action="clear"
                  :data-for="attributes.ename+',show_'+attributes.ename"
                  :style="attributes.disabled?'display: none;':''"></span>
      					<span class="i-icon i-popup-tree" :id="'icon_'+attributes.ename" :data-for="'popup_'+attributes.ename"></span>
      				</span>
      			</span>
      		</span>
      	</div>
      </div>
  </CatFrame>
</template>
<script>
export default {
  name: 'CatTreeInput',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    input: function(event) {
      this.$emit('input', event);
    }
  }
}
</script>

<style scoped>
</style>
