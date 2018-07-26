<template>
  <div v-if="config.hideframe||$root.$data.config.preview===true""
    :id="config.catid" :key="config.catid" :style="config.inlineframe?'display: inline-block':''"
    :class="attributes.colWidth!==undefined?'col-md-'+attributes.colWidth:undefined">
  <slot></slot>
  </div>
  <div v-else :id="config.catid" :key="config.catid" class="dialog"
    :class="attributes.inline?'':((!attributes.colWidth)?'':'col-md-'+attributes.colWidth)" :style="istyle">
      <div class="dialog-title" @dblclick="dblclick"
        :class="{'dialog-title-config':(hidegear!==false),'dialog-title-current':($root.$data.config.pdata!==undefined&&config.catid===$root.$data.config.pdata.config.catid)}">{{attributes.$type}} : {{attributes.ename}}{{(!attributes.title)?'':' / '+attributes.title}}{{(!attributes.blockId)?'':' '+attributes.blockId}}
        <div v-if="hideclose===false" class="dialog-button fa fa-close" @click="close"></div>
        <div v-if="hidegear===false" class="dialog-button fa fa-gear" @click="settings"></div>
      </div>
      <div class="dialog-content" :class="{'currlayout':config.currlayout}" style="min-height: 40px;">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import deldata from '../js/deldata.js'
import finder from '../js/finder.js'
import closespdata from '../js/closespdata.js'

export default {
  name: 'CatFrame',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  computed: {
    hidegear: function() {
      if(this.attributes.$type==='page') {
        return true;
      }
      else if(!this.config||!this.config.hidegear) {
        return false;
      }
      else {
        return this.config.hidegear;
      }
    },
    hideclose: function() {
      if(this.attributes.$type==='page') {
        return true;
      }
      else if(!this.config||!this.config.hideclose) {
        return false;
      }
      else {
        return this.config.hideclose;
      }
    },
    istyle: function() {
      if(!this.config||!this.config.style) {
        return {display: 'visible'};
      }
      else {
        return this.config.style;
      }
    }
  },
  methods: {
    // Frame框关闭删除事件
    close: function(event) {
      // 默认Frame的关闭事件
      if(!this.config||!this.config.close) {
        // 如果Properties开着，且显示的是本组件数据，关闭Properties
        if(this.$root.$data.config.pdata!==undefined
          &&this.config.catid===this.$root.$data.config.pdata.config.catid) {
          closespdata(this, 'pdata');
        }
        // 如果select选项显示着，且显示的是本组件数据，关闭select选项
        if(this.$root.$data.config.sdata!==undefined
          &&this.config.catid===this.$root.$data.config.sdata.config.catid) {
          closespdata(this, 'sdata');
        }
        // 定位当前组件data，判断是否包含子组件，提示是否保留
        var curr = finder(this.$root.$data, 'config', 'catid', this.config.catid);
        var sc = false;
        if(curr!==undefined
          &&curr.children.length!==0
          &&curr.config.catalog!=='grid'
          &&curr.attributes.$type!=='tab'
          &&curr.children[0].config.catalog!==undefined) {
          sc = confirm("是否保留子组件？【确定】保留，【取消】不保留");
        }
        deldata(this.$root.$data, this.config.catid, sc);
        console.log('delete:'+this.config.catid);
      }
      // 如果指定了close处理方法，执行指定的方法
      else if(typeof this.config.close==='function') {
        this.config.close(this);
      }
    },
    // Frame框设置按钮事件
    settings: function(event) {
      var catid = this.config.catid;
      var curr = finder(this.$root.$data, 'config', 'catid', catid);
      if(curr!==undefined&&curr!==null) {
        var pdata = Object.assign({}, curr);
        this.$set(this.$root.$data.config, 'pdata', pdata);
      }
    },
    // Frame框双击事件
    dblclick: function(e) {
      this.settings(e);
    }
  }
}
</script>

<style scoped>
.dialog {
  /*height: 55px;*/
  background-color: #fff;
  -webkit-box-shadow: 1px 1px 3px #292929;
  -moz-box-shadow: 1px 1px 3px #292929;
  box-shadow: 1px 1px 3px #292929;
  padding: 0px;
  margin-left: -1px;
  margin-right: -1px;
  display: visible;
}

.dialog-title {
  height: 18px;
  color: #fff;
  background-color: #404040;
  font-size: 8pt;
  font-weight: bold;
  padding: 1px 1px;
  cursor: move;
  text-align: center;
}
.dialog-title-config {
  background-color: #448;
  /*color: #000;*/
}
.dialog-title-current {
  background-color: #39f;
  /*color: #000;*/
}
.dialog-content {
  padding: 4px;
  overflow-y: scroll;
  height: auto;
  overflow-x: hidden;
}
.dialog-button {
  margin: 2px 2px 2px 2px;
  float: right;
  cursor: pointer;
}
</style>
