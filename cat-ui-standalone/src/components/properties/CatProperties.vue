<template>
  <CatFrame :attributes="{ename: '', $type:'Properties'}" :config="propconfig">
    <div class="row">
      <!-- 左移按钮 -->
      <CatButton :attributes="{ename:'mvleft', uri:'fa fa-arrow-left', layout: '2', cname:'', colWidth:'1', desc: '左移'}"
        :config="{hideframe:true}" @click.stop="mvleft">
      </CatButton>
      <!-- 右移按钮 -->
      <CatButton :attributes="{ename:'mvright', uri:'fa fa-arrow-right', layout: '2', cname:'', colWidth:'1', desc: '右移'}"
        :config="{hideframe:true}" @click.stop="mvright">
      </CatButton>
      <!-- TAB页增加标签页按钮 -->
      <CatButton v-if="attributes.$type==='tab'" :attributes="{ename:'addtabdiv', uri:'fa fa-plus', layout: '2', cname:'', colWidth:'1', desc: '增加标签页'}"
        :config="{hideframe:true}" @click.stop="addtabdiv">
      </CatButton>
      <!-- 复制新增按钮 -->
      <CatButton :attributes="{ename:'copyadd', uri:'k-icon k-add', layout: '2', cname:'', colWidth:'1', desc: '复制新增'}"
        :config="{hideframe:true}" @click.stop="copyadd">
      </CatButton>
      <span style="float:right">ID: {{config.catid}}</span>
    </div>
    <div class="row">
      <!-- 数据复选框 -->
      <div class="col-md-2">
        <CatCheckbox :attributes="{ename: 'showdata', cname: 'Data', colWidth: '12', checked: $root.$data.config.showdata}"
          :config="{hideframe:true}" @change="$set($root.$data.config, 'showdata', $event.target.checked)">
        </CatCheckbox>
      </div>
      <!-- JSP复选框 -->
      <div class="col-md-2">
        <CatCheckbox :attributes="{ename: 'showjsp', cname: 'Jsp', colWidth: '12', checked: $root.$data.config.showtag}"
          :config="{hideframe:true}" @change="$set($root.$data.config, 'showtag', $event.target.checked)">
        </CatCheckbox>
      </div>
    </div>
    <hr/>
    <div class="row">
      <!-- 组件属性区域 -->
      <div class="col-md-5">
        <p>Properties</p>
        <div v-for="(item, key) in attributes" v-if="(key==='$type'&&(item==='page'||item==='tabdiv'))===false" :key="item.value" class="row">
          <div class="col-md-10">
            <component :is="key==='$type'?'CatSelect':(typeof item==='object'?'CatPre':(typeof item==='boolean'?'CatCheckbox':'CatText'))"
              :attributes="{catid: attributes.catid, ename: key, cname: key, value: item, ratio: '4:8', checked: typeof item==='boolean'?item:false}"
              :config="{hideframe:true, catid:config.catid, datafor:key}"
              :children="key==='$type'?filtedtypeoptions(item):[]"
              @input="input" @change="change">
            </component>
          </div>
          <div class="col-md-2">
          <CatButton v-if="key!=='$type'" :attributes="{ename: key, uri:'fa fa-trash', layout: '2', cname: '', colWidth: '2', desc: '删除 '+key}"
            :config="{hideframe:true}" @click="$delete(attributes, $event.target.id)">
          </CatButton>
          </div>
        </div>
      </div>
      <!-- 组件属性编辑区域 -->
      <div class="col-md-7">
        <div class="row">
          <p>Edit Attributes</p>
          <CatAttributes :attributes="attributes" :config="config" :children="children"></CatAttributes>
        </div>
        <div class="row"  v-if="attributes.$type==='select'||attributes.$type==='combocol'||attributes.$type==='multiselect'||attributes.$type==='multiselcol'">
          <hr size="1"/>
          <p>Edit Fixed Options</p>
          <CatSelectFixedOptions :attributes="attributes" :config="config" :children="children"/>
          <hr size="1"/>
          <p>Edit Block Options</p>
          <CatSelectBlockOptions :attributes="attributes" :config="config" :children="children"/>
          <hr size="1"/>
          <p>Edit Code Options</p>
          <CatSelectCodeOptions :attributes="attributes" :config="config" :children="children"/>
        </div>
        <!-- Grid Panel -->
        <div class="row" v-if="attributes.$type==='grid'">
          <CatGridPanel :attributes="attributes" :config="config" :children="children"/>
        </div>
        <!-- Tree Panel -->
        <div class="row" v-if="attributes.$type==='tree'">
          <CatTreePanel :attributes="attributes" :config="config" :children="children"/>
        </div>
      </div>
    </div>
  </CatFrame>
</template>

<script>
import finder from '../js/finder.js'
import typeoptions from '../js/typeoptions.js'
import arraymove from '../js/arraymove.js'
import append from '../js/append.js'
import closespdata from '../js/closespdata.js'
import copyadd from '../js/copyadd.js'

export default {
  name: 'CatProperties',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  data: function() {
    return {
      propconfig: {
        hidegear: true,
        close: function(vm) {
          vm.$set(vm.$root.$data.config, 'showdata', false);
          vm.$set(vm.$root.$data.config, 'showtag', false);
          closespdata(vm, 'sdata');
          closespdata(vm, 'pdata');
        }
      },
      typeoptions: typeoptions
    };
  },
  methods: {
    mvleft: function(e) {
      arraymove(this.$root.$data, this.config.catid, -1);
    },
    mvright: function(e) {
      arraymove(this.$root.$data, this.config.catid, 1);
    },
    copyadd: function(e) {
      copyadd(this.$root.$data, this.config.catid, 1);
    },
    addtabdiv: function(e) {
      var catid = this.config.catid;
      var curr = finder(this.$root.$data, 'config', 'catid', catid);
      if(curr!==undefined&&curr!==null) {
        append({target: {id: 'tabdiv'}}, this, curr);
      }
    },
    change: function(event) {
      if(typeof this.attributes[event.target.id]==='boolean') {
        var catid = this.config.catid;
        var curr = finder(this.$root.$data, 'config', 'catid', catid);
        if(curr!==undefined&&curr!==null) {
          this.$set(curr.attributes, event.target.id, event.target.checked);
        }
      }
    },
    input: function(event) {
      var catid = this.config.catid;
      var curr = finder(this.$root.$data, 'config', 'catid', catid);
      if(curr!==undefined&&curr!==null) {
        this.$set(curr.attributes, event.target.id, event.target.value);
      }
    },
    filtedtypeoptions: function(type) {
      var filted = [];
      var searcher = {
        attributes: {},
        config: {},
        children: this.typeoptions
      };

      var curr = finder(searcher, 'attributes', 'value', type);
      if(!curr) {
        return filted;
      }
      var catalog = curr.config.catalog;
      for(var i in this.typeoptions) {
        var opts = this.typeoptions[i];
        if(opts.attributes.value==='tabdiv') {
          continue;
        }
        else if(opts.config.catalog===catalog) {
          opts.attributes.$type='option';
          filted.push(opts);
        }
      }
      return filted;
    }
  }
}
</script>

<style scoped>
</style>
