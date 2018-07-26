<template>
<div class="form-group">
  <div class="row" v-for="opts in typeoptions" :key="opts.attributes.value" v-if="opts.config.catalog==='layout'&&opts.attributes.value!=='tabdiv'">
    <div class="col-md-12" style="margin: 2px;">
      <CatButton
        :attributes="getattr(opts)"
        :config="{hideframe:true}" @click="append"/>
    </div>
  </div>
  <hr />
  <div class="row" v-for="opts in typeoptions" :key="opts.attributes.value" v-if="opts.config.catalog==='grid'||opts.config.catalog==='col'">
    <div class="col-md-12" style="margin: 2px;">
      <CatButton
        :attributes="getattr(opts)"
        :config="{hideframe:true}" @click="append"/>
    </div>
  </div>
  <hr />
  <div class="row" v-for="opts in typeoptions" :key="opts.attributes.value" v-if="opts.config.catalog==='elm'">
    <div class="col-md-12" style="margin: 2px;">
      <CatButton
        :attributes="getattr(opts)"
        :config="{hideframe:true}" @click="append"/>
    </div>
  </div>
  <hr />
</div>
</template>

<script>
import typeoptions from '../js/typeoptions.js'
import append from '../js/append.js'
import guid from '../js/guid.js'
import uuid from '../js/uuid.js'
import finder from '../js/finder.js'

export default {
  name: 'CatComponents',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  data: function() {
    return {
      typeoptions: typeoptions
    };
  },
  methods: {
    append: append,
    getattr: function(opts){
      var disabled = false;
      var currcatalog = this.$root.$data.config.currcatalog;
      if((!currcatalog||currcatalog==='layout')
        &&opts.config.catalog!=='grid'
        &&opts.config.catalog!=='elm'
        &&opts.config.catalog!=='layout') {
        disabled = true;
      }
      else if(currcatalog==='grid'&&opts.config.catalog!=='col') {
        disabled = true;
      }

      var attr = Object.assign({}, {
        ename: opts.attributes.value,
        cname: opts.attributes.label,
        desc: opts.attributes.value,
        layout: '1',
        //colWidth: '12',
        disabled: disabled
      });
      return attr;
    },
    elmattr: function(opts) {
      var attr = Object.assign({}, {
        ename: opts.attributes.value,
        cname: opts.attributes.label+'('+opts.attributes.value+')',
        layout: '1',
        colWidth: '12',
        disabled: this.$root.$data.config.currcatalog==='grid'
      });
      return attr;
    },
    layoutattr: function(opts) {
      var attr = Object.assign({}, {
        ename: opts.attributes.value,
        cname: opts.attributes.label+'('+opts.attributes.value+')',
        layout: '1',
        colWidth: '12',
        disabled: this.$root.$data.config.currcatalog==='grid'
      });
      return attr;
    },
    colattr: function(opts) {
      var attr = Object.assign({}, {
        ename: opts.attributes.value,
        cname: opts.attributes.label+'('+opts.attributes.value+')',
        layout: '1',
        colWidth: '12',
        disabled: this.$root.$data.config.currcatalog!=='grid'
      });
      return attr;
    }

  }
}
</script>

<style scoped>
</style>
