<template>
  <div>
    <div class="row">
      <div class="col-md-4" style="text-align:center;"><span>Value</span>
      </div>
      <div class="col-md-4" style="text-align:center;"><span>Label</span>
      </div>
    </div>
    <div v-for="(child,index) in children" :key="child.config.catid" v-if="child.attributes.$type==='option'" class="row">
      <div class="col-md-4">
      <CatText
          :attributes="{ename: 'value', cname: '', value: child.attributes.value, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(child.attributes, 'value', $event.target.value)"/>
      </div>
      <div class="col-md-4">
      <CatText
          :attributes="{ename: 'label', cname: '', value: child.attributes.label, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(child.attributes, 'label', $event.target.value)"/>
      </div>
      <CatButton :attributes="{ename: index, uri:'fa fa-trash', layout: '2', cname: '', colWidth: '1', desc: '删除'}"
          :config="{hideframe:true}"
          @click="children.splice(index, 1)"/>
    </div>
    <div class="row">
      <div class="col-md-4" style="text-align:center;"><span>Append Value</span>
      </div>
      <div class="col-md-4" style="text-align:center;"><span>Label</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
      <CatText
          :attributes="{ename: 'newvalue', cname: '', value: config.newvalue, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(config, 'newvalue', $event.target.value)"/>
      </div>
      <div class="col-md-4">
      <CatText
          :attributes="{ename: 'newlabel', cname: '', value: config.newlabel, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(config, 'newlabel', $event.target.value)"/>
      </div>
      <div class="col-md-1">
      <CatButton :attributes="{ename: 'save', uri:'fa fa-save', layout: '2', cname: '', colWidth: '1', desc: '添加'}"
          :config="{hideframe:true}"
          @click="click"/>
      </div>
    </div>
  </div>
</template>

<script>
import uuid from '../js/uuid.js'
import guid from '../js/guid.js'

export default {
  name: 'CatSelectFixedOptions',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    click: function(e) {
      //var catuuid = uuid(16,16);
      var catuuid = guid();
      var opts = {
        attributes: {
          $type: 'option',
          value: (!this.config.newvalue)?'':this.config.newvalue,
          label: (!this.config.newlabel)?'':this.config.newlabel
        },
        config:{
          catid: catuuid
        },children:[]
      };
      this.children.push(opts);
    }
  }
}
</script>

<style scoped>
</style>
