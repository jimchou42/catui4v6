<template>
  <CatFrame :attributes="attributes" :config="config">
    <div class="form-group">
  		<label :data-for="attributes.ename" :class="'col-xs-'+attributes.ratio.split(':')[0]" class="control-label">
  			<span v-if="attributes.required" class="i-input-required">*</span>{{attributes.cname}}
  		</label>
  		<div :class="'col-xs-'+attributes.ratio.split(':')[1]">
  			<span class="k-widget" :class="{'k-datepicker k-header':(!attributes.role||attributes.role==='date'), 'k-datetimepicker k-header':(attributes.role!==undefined&&attributes.role==='datetime'), 'i-input-readonly':attributes.readonly}" style="">
  				<span class="k-picker-wrap k-state-default" :class="{'k-state-disabled':attributes.disabled}"
            @mouseover="mouseover"
            @mouseout="mouseout">
  					<input :id="attributes.ename" :name="attributes.ename" :disabled="attributes.disabled"
              :required="attributes.required" :class="{'i-input-readonly':attributes.readonly}" class="k-input"
  					  :data-role="(!attributes.role||attributes.role==='date')?'datepicker':((attributes.role!==undefined&&attributes.role==='datetime')?'datetimepicker':'')"
              style="width: 100%;" type="text" :value="attributes.value"
  					  role="combobox" aria-expanded="false" aria-disabled="false">
  					<span v-if="(!attributes.role)||attributes.role==='date'" unselectable="on" class="k-select" :class="{'i-state-readonly':attributes.readonly}" aria-label="select" role="button">
  						<span class="k-icon k-i-calendar"></span>
  					</span>
            <span v-if="attributes.role!==undefined&&attributes.role==='datetime'" unselectable="on" class="k-select" :class="{'i-state-readonly':attributes.readonly}">
  						<span class="k-link k-link-date" aria-label="Open the date view">
  							<span unselectable="on" class="k-icon k-i-calendar" aria-controls="adate_dateview"></span>
  						</span>
  						<span class="k-link k-link-time" aria-label="Open the time view">
  							<span unselectable="on" class="k-icon k-i-clock" aria-controls="adate_timeview"></span>
  						</span>
  					</span>
  				</span>
  			</span>
  		</div>
  	</div>
  </CatFrame>
</template>

<script>
export default {
  name: 'CatDatePicker',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    mouseover: function(e) {
      if(this.attributes.disabled) {
        return;
      }
      var wrap = this.$el.querySelector('.k-picker-wrap.k-state-default');
      if(wrap!==undefined&&wrap!==null) {
        wrap.classList.add('k-state-hover');
      }
    },
    mouseout: function(e) {
      if(this.attributes.disabled) {
        return;
      }
      var wrap = this.$el.querySelector('.k-picker-wrap.k-state-default.k-state-hover');
      if(wrap!==undefined&&wrap!==null) {
        wrap.classList.remove('k-state-hover');
      }
    }
  }
}
</script>

<style scoped>
</style>
