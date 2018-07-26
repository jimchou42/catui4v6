<template>
  <CatFrame :attributes="attributes" :config="config">
    <div class="k-tabstrip-wrapper">
  		<div :id="attributes.ename" style="visibility: visible;" data-role="tabstrip" tabindex="0"
  			class="k-widget k-header k-tabstrip k-floatwrap"
        :class="'k-tabstrip-'+((!attributes.tabPosition)?'top':attributes.tabPosition)"
  			role="tablist" aria-activedescendant="atab_ts_active">
        <slot v-if="attributes.tabPosition==='bottom'"></slot>
  			<ul class="k-tabstrip-items k-reset">
  				<li v-for="(child,idx) in children" :key="child.config.catid"
            class="k-item k-state-default" :class="{'k-first': idx===0, 'k-tab-on-top k-state-active': child.config.active}"
            :aria-controls="config.catid+'-'+idx" style="z-index:0" :aria-selected="child.config.active"
  					role="tab" :id="child.config.active?(config.catid+'_ts_active'):''" @click="click(idx)">
  					<span class="k-loading k-complete"></span>
  					<span class="k-link">{{child.attributes.title}}</span>
  				</li>
  			</ul>
  			<slot v-if="((!attributes.tabPosition)||attributes.tabPosition!=='bottom')"></slot>
  		</div>
  	</div>
  </CatFrame>
</template>

<script>
import pointer from '../js/pointer.js'
import closespdata from '../js/closespdata.js'

export default {
  name: 'CatTab',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  created: function() {
    var hasactive = false;
    for(var idx in this.children) {
      var child = this.children[idx];
      hasactive = hasactive||child.config.active;
    }
    if(!hasactive) {
      this.$set(this.children[0].config, 'active', true);
    }
  },
  methods: {
    click: function(e) {
      closespdata(this, 'sdata');
      for(var idx in this.children) {
        var child = this.children[idx];
        if(parseInt(idx)===e) {
          this.$set(child.config, 'active', true);
          if(this.$root.$data.config.pdata!==undefined) {
            this.$set(this.$root.$data.config, 'pdata', child);
          }
        }
        else {
          this.$set(child.config, 'active', false);
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
