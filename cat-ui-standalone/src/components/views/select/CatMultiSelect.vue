<template>
  <CatFrame :attributes="attributes" :config="config">
    <div class="form-group">
      <label class="control-label" :class="'col-xs-'+attributes.ratio.split(':')[0]" :data-for="attributes.ename">
        <span class="i-input-required" v-if="attributes.required">*</span>{{attributes.cname==='$type'?'type':attributes.cname}}
      </label>
      <div :class="'col-xs-'+attributes.ratio.split(':')[1]">
        <div class="k-widget k-multiselect k-header k-state-hover" deselectable="on"
					title="" style="width: 100%;"  @click="click"
          :class="{'k-state-border-down':$root.$data.config.sdata!==undefined, 'k-state-disabled':(attributes.readonly||attributes.disabled)}">
					<div class="k-multiselect-wrap k-floatwrap" :class="{'i-state-readonly':attributes.readonly, 'i-state-disabled':attributes.disabled}" deselectable="on">
						<ul role="listbox" deselectable="on" class="k-reset"
							:id="attributes.ename+'_taglist'">
							<li v-for="(sopt,sidx) in selected" :key="sopt.attributes.value"
                class="k-button" deselectable="on">
								<span deselectable="on">{{sopt.attributes.label}}</span>
								<span unselectable="on" aria-label="delete" class="k-select">
									<span class="k-icon k-i-close" @click.stop="rmseled(sopt.config.catid)"></span>
								</span>
							</li>
						</ul>
						<input class="k-input" style="width: 25px" accesskey=""
							autocomplete="off" role="listbox" title="" aria-expanded="false"
							tabindex="0" :aria-owns="attributes.ename+'_taglist '+attributes.ename+'_listbox'"
							aria-disabled="false" aria-busy="false">
						<span deselectable="on" class="k-icon k-i-close" title="clear" role="button" tabindex="-1"
              @click.stop="clear"></span>
						<span class="k-icon k-i-loading k-loading-hidden"></span>
					</div>
					<select :id="attributes.ename" :name="attributes.ename" style="width: 100%; display: none;"
						required="" data-role="multiselect" multiple="multiple"
						aria-disabled="false">
						<option v-for="opt in children"
              :key="opt.attributes.value"
              v-if="opt.attributes.$type==='option'" :value="opt.attributes.value">{{opt.attributes.label}}</option>
					</select>
					<span style="font-family: 'PingFang SC' , 'Hiragino Sans GB' , 'Microsoft YaHei' , SimSun , sans-serif; font-size: 12px; font-stretch: 100%; font-style: normal; font-weight: 400; letter-spacing: normal; text-transform: none; line-height: 15.72px; position: absolute; visibility: hidden; top: -3333px; left: -3333px;"></span>
				</div>

      </div>
    </div>
  </CatFrame>
</template>

<script>
import finder from '../../js/finder.js'

export default {
  name: 'CatMultiSelect',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  computed: {
    selected: function() {
      var seled = [];
      var val = '';
      for(var opts of this.children) {
        if(opts.config.selected) {
          seled.push(opts);
          if(val==='') {
            val = opts.attributes.value;
          }
          else {
            val = val + ',' + opts.attributes.value;
          }
        }
      }
      this.$set(this.attributes, 'value', val);
      return seled;
    }
  },
  methods: {
    rmseled: function(catid) {
      if(this.attributes.readonly||this.attributes.disabled) {
        return;
      }
      var ch = finder({attributes:{},config:{},children:this.children}, 'config', 'catid', catid);
      if(ch!==undefined&&ch!==null) {
        this.$set(ch.config, 'selected', false);
      }

    },
    clear: function() {
      if(this.attributes.readonly||this.attributes.disabled) {
        return;
      }
      for(var child of this.children) {
        this.$set(child.config, 'selected', false);
      }
    },
    // 处理click事件
    click: function(event) {
      // 触发下拉框内容是否显示
      if(this.$root.$data.config.sdata!==undefined
        &&this.$root.$el.querySelector('.k-animation-container').id===this.attributes.ename+'__listbox') {
        this.$delete(this.$root.$data.config, 'sdata');
      }
      else {
        if(this.attributes.readonly||this.attributes.disabled) {
          return;
        }
        var sdata = {
          attributes: this.attributes,
          //config: this.config,
          config: {catid: this.config.catid},
          children: this.children
        };
        var wrap = this.$el.querySelector('.k-multiselect-wrap.k-floatwrap');
        var x = wrap.getBoundingClientRect().x;
        var y = wrap.getBoundingClientRect().y + wrap.clientHeight + document.querySelector('.block-content.form-horizontal').scrollTop;
        this.$set(sdata.config, 'selOptPos', {x:x, y:y, mw: wrap.clientWidth});
        if('datafor' in this.config) {
          this.$set(sdata.config, 'datafor', this.config.datafor);
        }
        this.$set(this.$root.$data.config, 'sdata', sdata);
      }
    }
  }
}
</script>

<style scoped>
</style>
