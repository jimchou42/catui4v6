<template>
  <CatFrame :attributes="attributes" :config="config">
    <div class="form-group">
  		<label :data-for="attributes.ename" class="control-label" :class="'col-xs-'+attributes.ratio.split(':')[0]">{{attributes.cname}}</label>
  		<div :class="'col-xs-'+attributes.ratio.split(':')[1]">
  			<span tabindex="-1" role="presentation"
  				class="k-widget k-autocomplete k-header k-state-default" style="">
  				<input :id="attributes.ename" :name="attributes.ename" data-role="autocomplete" type="text"
  				class="k-input" autocomplete="off" role="textbox"
  				aria-haspopup="true" aria-disabled="false" aria-readonly="false"
  				:aria-owns="attributes.ename+'_listbox'" aria-autocomplete="both"
          :value="attributes.value"
  				style="width: 100%;" @input="input">
  				<span unselectable="on" class="k-icon k-i-close" title="clear" role="button" tabindex="-1" @click="click"></span>
  				<span class="k-icon k-i-loading" style="display: none"></span>
  			</span>
  		</div>
  	</div>
  </CatFrame>
</template>
<script>
import closespdata from '../../js/closespdata.js'

export default {
  name: 'CatAutoComplete',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    input: function(event) {
      if(!event.target.value) {
          closespdata(this, 'sdata');
      }
      // 触发下拉框内容是否显示
      else {
        var sdata = {
          attributes: this.attributes,
          //config: this.config,
          config: {catid: this.config.catid},
          children: this.children
        };
        var widget = this.$el.querySelector('.k-widget.k-autocomplete.k-header.k-state-default');
        var x = widget.getBoundingClientRect().x;
        var y = widget.getBoundingClientRect().y + widget.clientHeight + document.querySelector('.block-content.form-horizontal').scrollTop;
        this.$set(sdata.config, 'selOptPos', {x:x, y:y, mw: widget.clientWidth});
        if('datafor' in this.config) {
          this.$set(sdata.config, 'datafor', this.config.datafor);
        }
        this.$set(this.$root.$data.config, 'sdata', sdata);
      }
      this.$emit('input', event);
    },
    click: function(event) {
      this.$set(this.attributes, 'value', '');
      closespdata(this, 'sdata');
    }
  }
}
</script>

<style scoped>
</style>
