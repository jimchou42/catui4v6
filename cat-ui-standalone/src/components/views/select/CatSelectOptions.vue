<template>
  <div class="k-animation-container" :style="opstyle" :id="config.sdata.attributes.ename+'__listbox'"
  	style="width: 200px; box-sizing: content-box; position: absolute; z-index: 10002;">
  	<div class="k-list-container k-popup k-group k-reset k-state-border-up"
  		:id="config.sdata.attributes.ename+'-list'" data-role="popup" :style="{'min-width': config.sdata.config.selOptPos.mw+'px'}"
  		style="position: absolute; font-size: 12px; font-family: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; font-stretch: 100%; font-style: normal; font-weight: 400; line-height: normal; width: auto; height: auto;">
  		<div class="k-group-header" style="display: none"></div>
  		<div class="k-list-scroller" unselectable="on"
  			style="height: auto;">
  			<ul unselectable="on" class="k-list k-reset" tabindex="-1"
  				aria-hidden="false" :id="config.sdata.attributes.ename+'_listbox'" aria-live="on"
  				data-role="staticlist" role="listbox">
  				<li v-for="(child, index) in config.sdata.children" :key="child.config.catid" v-if="child.attributes.$type==='option'"
            tabindex="-1" role="option" unselectable="on"
            :id="child.config.catid"
            :data-value="child.attributes.value"
            :data-ename="config.sdata.attributes.ename"
            :data-catid="config.sdata.config.catid"
            :data-for="config.sdata.config.datafor"
  					class="k-item"
            :class="{'k-state-selected k-state-focused':(child.attributes.value===config.sdata.attributes.value&&config.sdata.attributes.$type!=='multiselect'||child.config.selected)}"
            @mouseover="mouseover" @mouseout="mouseout" @click="click"
  					data-offset-index="index">{{child.attributes.label}}</li>
          <li v-for="(child, index) in config.sdata.children" :key="child.config.catid" v-if="child.attributes.$type==='options'"
            tabindex="-1" role="option" unselectable="on"
            :data-value="child.attributes.value"
            :data-ename="config.sdata.attributes.ename"
            :data-catid="config.sdata.config.catid"
            :data-for="config.sdata.config.datafor"
  					class="k-item"
            @mouseover="mouseover" @mouseout="mouseout"
  					data-offset-index="index">[blockId:{{child.attributes.blockId}}]</li>
          <li v-for="(child, index) in config.sdata.children" :key="child.config.catid" v-if="child.attributes.$type==='codeoption'"
            tabindex="-1" role="option" unselectable="on"
            :data-value="child.attributes.value"
            :data-ename="config.sdata.attributes.ename"
            :data-catid="config.sdata.config.catid"
            :data-for="config.sdata.config.datafor"
  					class="k-item"
            @mouseover="mouseover" @mouseout="mouseout"
  					data-offset-index="index">[codeName:{{child.attributes.codeName}}]</li>
  			</ul>
  		</div>
  		<div class="k-nodata" :style="nodata">
  			<div>没有数据</div>
  		</div>
  	</div>
  </div>
</template>

<script>
import finder from '../../js/finder.js'

export default {
  name: 'CatSelectOptions',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    mouseover: function(e) {
      e.target.classList.add('k-state-hover');
    },
    mouseout: function(e) {
      e.target.classList.remove('k-state-hover');
    },
    click: function(e) {
      this.$emit('select', {
        catid: e.target.dataset.catid,
        ename: e.target.dataset.ename,
        value: e.target.dataset.value,
        datafor: e.target.dataset.for
      });
      var dfcatid = e.target.dataset.catid;
      var dfdata = finder(this.$root.$data, 'config', 'catid', dfcatid);
      var autoClose = true;
      if(dfdata!==undefined&&dfdata!==null) {
        if(dfdata.attributes.$type==='multiselect') {
          autoClose = dfdata.attributes.autoClose;

          var childdata = finder(this.$root.$data, 'config', 'catid', e.target.id);
          if(childdata!==undefined&&childdata!==null) {
            this.$set(childdata.config, 'selected', (!childdata.config.selected)?true:!childdata.config.selected);
          }
        }
      }
      if(autoClose) {
        this.$delete(this.$root.$data.config, 'sdata');
      }

    }
  },
  // 计算属性
  computed: {
    // 下拉框没有option时的显示nodata框
    nodata: function() {
      //var data = this.$root.$data.config;
      var ds = "none";
      if((!this.config.sdata.children)
        || this.config.sdata.children.length===0) {
        ds = "block";
      }
      return {display: ds};
    },
    // 根据option个数计算下拉框高度
    opstyle: function() {
      var style = {};
      //var data = this.$root.$data.config;
      var oheight;
      if(this.config.sdata.children===undefined
        ||this.config.sdata.children.length===0) {
        oheight = "150px";
      }
      else {
        oheight = (this.config.sdata.children.length * 20 + 17) + "px";
      }
      style.height = oheight;

      // 下拉框内容显示与否
      if(this.config.sdata!==undefined) {
        style.display = "block";
        style.overflow = "visible";
        style.left = this.config.sdata.config.selOptPos.x + 'px';
        style.top = this.config.sdata.config.selOptPos.y + 'px';
      }
      else {
        style.display = "none";
        style.overflow = "hidden"
      }

      return style;
    }
  }

}
</script>

<style scoped>
</style>
