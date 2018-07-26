<template>
  <CatFrame :attributes="attributes" :config="config">
      <div class="form-group">
      	<label class="control-label" :class="'col-xs-'+attributes.ratio.split(':')[0]"
          :data-for="attributes.ename+'_textField'">
      		<span v-if="attributes.required" class="i-input-required">*</span>{{attributes.cname}}
        </label>
      	<div :class="'col-xs-'+attributes.ratio.split(':')[1]">
      		<input style="display: none" type="text" :name="attributes.ename" :id="attributes.ename" :value="attributes.value" data-hidden="true">
      		<span class="k-widget k-dropdown i-popup-input k-header">
      			<span class="k-dropdown-wrap" :class="{'i-state-readonly':attributes.readonly, 'i-state-disabled':attributes.disabled}">
      				<input type="text" :name="attributes.ename+'_textField'" :id="attributes.ename+'_textField'"
                :value="attributes.value" :disabled="attributes.disabled" @input="input"
                class="popupInput" :class="{'i-state-readonly i-input-readonly':attributes.readonly}"
                :style="{'ime-mode: disabled': attributes.readonly}">
      				<span class="k-select k-icon-container">
      					<span :style="attributes.disabled?'display: none;':''" class="k-icon k-i-close" title="清除" role="button" :data-target="attributes.ename" data-action="clear" :data-for="attributes.ename+','+attributes.ename+'_textField'"></span>
      					<span :id="'icon_'+attributes.ename+'_textField'" class="i-icon i-popup-grid"></span>
      				</span>
      			</span>
      		</span>
      	</div>
      </div>
  </CatFrame>
</template>
<script>
export default {
  name: 'CatPopupInput',
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
