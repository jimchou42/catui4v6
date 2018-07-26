<template>
<div class="row hldivborder">
  <!-- Components -->
  <div class="col-xs-2" id="__cat-compos" v-if="config.preview!==true">
      <CatFrame :attributes="{ename: '', $type:'Components'}" :config="{hidegear: true, hideclose: true}">
          <div class="row">
            <CatCheckbox :attributes="{ename: 'preview', cname: '预览', colWidth: '4', checked: $root.$data.config.preview}" :config="{hideframe:true}" @change="preview"/>
            <CatCheckbox :attributes="{ename: 'code', cname: '代码', colWidth: '4', checked: $root.$data.config.pagecode}" :config="{hideframe:true}" @change="$set($root.$data.config, 'pagecode', $event.target.checked)"/>
            <CatButton :attributes="{ename:'save', cname:'保存', layout:'1'}" :config="{hideframe:true}" @click="save" />
          </div>
          <div class="row">
            <hr />
            <CatText :attributes="{ename:'_elmprefix', cname:'块', colWidth:'12', ratio:'2:10', value: config.elmprefix}"
              :config="{hideframe:true}" @input="$set(config, 'elmprefix', $event.target.value)"/>
            <CatText :attributes="{ename:'_elmename', cname:'英', colWidth:'12', ratio:'2:10', value: config.elmename}"
              :config="{hideframe:true}" @input="$set(config, 'elmename', $event.target.value)"/>
            <CatText :attributes="{ename:'_elmcname', cname:'中', colWidth:'12', ratio:'2:10', value: config.elmcname}"
              :config="{hideframe:true}" @input="$set(config, 'elmcname', $event.target.value)"/>
          </div>
          <div class="row">
            <hr />
            <CatComponents/>
          </div>
      </CatFrame>
  </div>
  <!-- Page -->
  <div :class="config.preview!==true?'col-xs-10':'col-md-12'">
    <!-- Page Layout -->
    <div class="row">
      <CatLayout :attributes="attributes" :config="config" :children="children"/>
    </div>
    <!-- Page JSP Pre -->
    <div class="row" v-if="config.pagecode">
      <div class="row">
        <CatCheckbox :attributes="{ename: 'codesimplify', cname: '简化', colWidth: '3', checked: $root.$data.config.codesimplify}" :config="{hideframe:true}" @change="$set($root.$data.config, 'codesimplify', $event.target.checked)"/>
      </div>
      <div class="row">
        <pre id="_jspcode"><CatLayoutTag :attributes="attributes" :config="config" :children="children"/></pre>
      </div>
      <div class="row">
        <CatPageSrc :attributes="attributes" :config="config" :children="children"/>
      </div>
    </div>
    <!-- Components JSP Pre Frame -->
    <div id="__cat-tag" v-drag class="dragable" v-if="config.showtag&&config.pdata!==undefined&&config.preview!==true">
      <div class="col-md-12">
      <CatFrame :attributes="{ename: '', $type:'Tag'}" :config="tagconfig">
        <div class="row">
          <CatCheckbox :attributes="{ename: 'codesimplify', cname: '简化', colWidth: '3', checked: $root.$data.config.codesimplify}" :config="{hideframe:true}" @change="$set($root.$data.config, 'codesimplify', $event.target.checked)"/>
        </div>
        <div class="row">
          <pre><CatLayoutTag :attributes="config.pdata.attributes" :config="config.pdata.config" :children="config.pdata.children"/></pre>
        </div>
      </CatFrame>
      </div>
    </div>
    <!-- Data Pre Frame -->
    <div id="__cat-data" v-drag class="dragable" v-if="config.showdata&&config.pdata!==undefined&&config.preview!==true">
      <div class="col-md-12">
      <CatFrame :attributes="{ename: '', $type:'Data'}" :config="dataconfig">
        <div class="row">
          <CatPre :attributes="dataattr" />
        </div>
      </CatFrame>
      </div>
    </div>
    <!-- Properties Frame -->
    <div id="__cat-props" v-drag class="dragable" v-if="config.pdata!==undefined&&config.preview!==true" >
      <div class="col-md-12">
      <CatProperties :attributes="config.pdata.attributes" :config="config.pdata.config" :children="config.pdata.children"/>
      </div>
    </div>
    <!-- Metadata Frame    -->
    <div id="__cat-meta" v-drag class="dragable" v-if="config.showmeta&&config.preview!==true" > <!-- &&$root.$data.config.selectlist -->
      <div class="col-md-12">
        <CatMetaData :attributes="attributes" :config="config"/>
      </div>
    </div>

  </div>
  <!-- end Page -->
  <!-- select options -->
  <CatSelectOptions v-if="config.sdata!==undefined" :config="config" :attributes="attributes" @select="select" />
  <!-- Preview Escape Button -->
  <div v-if="config.preview" class="escpreivew-button fa fa-close" @click="escpreview"></div>
</div>
</template>

<script>
import drag from './components/js/drag.js'
import finder from './components/js/finder.js'
import typeoptions from './components/js/typeoptions.js'
import closespdata from './components/js/closespdata.js'
import settreeseled from './components/js/settreeseled.js'
import savedata from './components/js/savedata.js'

export default {
  name: 'cat-ui',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  watch: {
    // 如果 attributes和children 发生改变，这个函数就会运行
    attributes: function (newattr) {
      this.$set(this.config, 'unsave', true);
    },
    children: function(newchild) {
      this.$set(this.config, 'unsave', true);
    }
  },
  computed: {
    // 计算data frame要显示的数据
    dataattr: function() {
      var dat = Object.assign({}, {
        ename:'data',
        cname:'data',
        colWidth:'12',
        ratio:'2:10'
      });
      if(!this.config.pdata) {
        return dat;
      }
      var valueobj = Object.assign({}, {
        attributes: this.config.pdata.attributes,
        children: this.config.pdata.children
      });
      // page 显示data时，去除pdata，防止JSON.stringify时无限递归
      if(this.attributes.$type==='page') {
        var configobj = Object.assign({});
        for(var key in this.config.pdata.config) {
          if(key==='pdata') {
            continue;
          }
          this.$set(configobj, key, this.config.pdata.config[key]);
        }
        this.$set(valueobj, 'config', configobj);
      }
      else {
        this.$set(valueobj, 'config', this.config.pdata.config);
      }
      this.$set(dat, 'value', JSON.stringify(valueobj, null, 2));
      return dat;
    },
    selectcount: function() {
      var count = 0;
      var selectlist = this.config.selectlist;
      if(selectlist!==undefined) {
        count = Object.getOwnPropertyNames(selectlist).length-1;
      }
      return count;
    }
  },
  data: function() {
    return {
      dataconfig: {
        hidegear: true,
        close: function(vm) {
          vm.$root.$data.config.showdata = false;
        }
      },
      tagconfig: {
        hidegear: true,
        close: function(vm) {
          vm.$root.$data.config.showtag = false;
        }
      },
      typeoptions: typeoptions,
    };
  },
  methods: {
    // preview勾选事件
    preview: function(event) {
      closespdata(this, 'pdata');
      closespdata(this, 'sdata');
      this.$set(this.$root.$data.config, 'pagecode', false);
      this.$set(this.$root.$data.config, 'preview', event.target.checked);
    },
    // 退出preview事件
    escpreview: function(event) {
      closespdata(this, 'sdata');
      this.$set(this.$root.$data.config, 'preview', false);
    },
    // 保存按钮事件
    save: function(e) {
      savedata(this);
    },
    // 刷新数据按钮事件
    refresh: function(e) {

    },
    dbselonclick: function(e) {
      var call = this.$root.$data.config.dbselonclick
      if(call&&typeof call==='function') {
        call(e);
      }
    },
    taselonclick: function(e) {
      var call = this.$root.$data.config.taselonclick
      if(call&&typeof call==='function') {
        call(e);
      }
    },
    // 清除数据选择事件
    clearsel: function(e) {
      //this.$delete(this.config, 'selectlist');
      //settreeseled(this, this.config.metadata, this.config.metadata, false);
      //settreeseled(this, this.config.dbdata, this.config.dbdata, false);
      this.$set(this.config, 'showmeta', true);
    },
    // select选项选择事件
    select: function(e) {
      var data = finder(this.$root.$data, 'config', 'catid', e.catid);
      if(data!==undefined&&data!==null) {
        if(data.attributes.$type==='multiselect') {

        }
        else {
          // 默认选择后往组件的value属性上赋值
          var datafor = (!e.datafor)?'value':e.datafor;
          this.$set(data.attributes, datafor, e.value);
        }
        // 如果是Properties的type选择
        if(datafor==='$type') {
          // 查找选择tag的sample数据
          var tagdata = finder(Object.assign({}, {
            attributes: {},
            config: {},
            children: this.typeoptions
          }), 'attributes', 'value', e.value);

          if(tagdata!==undefined&&tagdata!==null) {
            var sample = tagdata.config.sample;
            // 根据sample数据，补齐当前组件的属性
            for(var k in sample) {
              if(k in data.attributes) {
                continue;
              }
              this.$set(data.attributes, k, sample[k]);
            }
            // 变更当前组件的类型
            this.$set(data.config, 'tag', tagdata.config.tag);
            this.$set(data.config, 'tagHtml', tagdata.config.tagHtml);
          }
        }
      }
    }
  },
  // 可拖拽的Frame的拖拽指令，详见drag.js
  directives: {
    drag: drag
  }

}
</script>

<style>
#cat-ui {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.dragable {
  position: absolute;
  width: auto;
  top: 50px;
}
.escpreivew-button {
  margin: 2px 2px 2px 2px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
.hldivborder {
	border: 1px solid #ccc;
}
.currlayout {
	border: 2px solid #f00;
}
.highrow {
	height: 500px;
}
.v-algin {
	display:inline-block;
	vertical-align: middle;
}
pre {
  text-align: left;
	white-space: pre-wrap;
	white-space: -moz-pre-wrap;
	white-space: -pre-wrap;
	white-space: -o-pre-wrap;
	word-wrap: break-word;
}
hr {
  margin: 5px 0px 5px 0px;
}
.row {
  margin-left: 0px;
  margin-right: 0px;
}
</style>
