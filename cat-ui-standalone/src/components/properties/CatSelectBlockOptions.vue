<template>
  <div>
    <div class="row">
      <div class="col-md-3" style="text-align:center;"><span>blockId</span>
      </div>
      <div class="col-md-3" style="text-align:center;"><span>valueField</span>
      </div>
      <div class="col-md-3" style="text-align:center;"><span>textField</span>
      </div>
    </div>
    <div v-for="(child,index) in children" :key="child.config.catid" v-if="child.attributes.$type==='options'" class="row">
      <div class="col-md-3">
      <CatText
          :attributes="{ename: 'blockId', cname: '', value: child.attributes.blockId, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(child.attributes, 'blockId', $event.target.value)"/>
      </div>
      <div class="col-md-3">
      <CatText
          :attributes="{ename: 'valueField', cname: '', value: child.attributes.valueField, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(child.attributes, 'valueField', $event.target.value)"/>
      </div>
      <div class="col-md-3">
      <CatText
          :attributes="{ename: 'textField', cname: '', value: child.attributes.textField, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(child.attributes, 'textField', $event.target.value)"/>
      </div>
      <CatButton :attributes="{ename: index, uri:'fa fa-trash', layout: '2', cname: '', colWidth: '1', desc: '删除'}"
          :config="{hideframe:true}"
          @click="children.splice(index, 1)"/>
    </div>
    <div class="row">
      <div class="col-md-3" style="text-align:center;"><span>Append blockId</span>
      </div>
      <div class="col-md-3" style="text-align:center;"><span>valueField</span>
      </div>
      <div class="col-md-3" style="text-align:center;"><span>textField</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
      <CatText
          :attributes="{ename: 'newblockid', cname: '', value: config.newblockid, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(config, 'newblockid', $event.target.value)"/>
      </div>
      <div class="col-md-3">
      <CatText
          :attributes="{ename: 'newvaluefield', cname: '', value: config.newvaluefield, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(config, 'newvaluefield', $event.target.value)"/>
      </div>
      <div class="col-md-3">
      <CatText
          :attributes="{ename: 'newtextfield', cname: '', value: config.newtextfield, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(config, 'newtextfield', $event.target.value)"/>
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
  name: 'CatSelectBlockOptions',
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
          $type: 'options',
          blockId: (!this.config.newblockid)?'':this.config.newblockid,
          valueField: (!this.config.newvaluefield)?'':this.config.newvaluefield,
          textField: (!this.config.newtextfield)?'':this.config.newtextfield
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
