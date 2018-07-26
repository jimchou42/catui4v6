<template>
  <div>
    <div class="row">
      <div class="col-md-2" style="text-align:center;"><span>codeName</span>
      </div>
      <div class="col-md-2" style="text-align:center;"><span>valueField</span>
      </div>
      <div class="col-md-2" style="text-align:center;"><span>textField</span>
      </div>
      <div class="col-md-2" style="text-align:center;"><span>condition</span>
      </div>
    </div>
    <div v-for="(child,index) in children" :key="child.config.catid" v-if="child.attributes.$type==='codeoption'" class="row">
      <div class="col-md-2">
      <CatText
          :attributes="{ename: 'codeName', cname: '', value: child.attributes.codeName, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(child.attributes, 'codeName', $event.target.value)"/>
      </div>
      <div class="col-md-2">
      <CatText
          :attributes="{ename: 'valueField', cname: '', value: child.attributes.valueField, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(child.attributes, 'valueField', $event.target.value)"/>
      </div>
      <div class="col-md-2">
      <CatText
          :attributes="{ename: 'textField', cname: '', value: child.attributes.textField, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(child.attributes, 'textField', $event.target.value)"/>
      </div>
      <div class="col-md-2">
      <CatText
          :attributes="{ename: 'condition', cname: '', value: child.attributes.condition, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(child.attributes, 'condition', $event.target.value)"/>
      </div>
      <CatButton :attributes="{ename: index, uri:'fa fa-trash', layout: '2', cname: '', colWidth: '1', desc: '删除'}"
          :config="{hideframe:true}"
          @click="children.splice(index, 1)"/>
    </div>
    <div class="row">
      <div class="col-md-2" style="text-align:center;"><span>Append codeName</span>
      </div>
      <div class="col-md-2" style="text-align:center;"><span>valueField</span>
      </div>
      <div class="col-md-2" style="text-align:center;"><span>textField</span>
      </div>
      <div class="col-md-2" style="text-align:center;"><span>condition</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
      <CatText
          :attributes="{ename: 'newcodename', cname: '', value: config.newcodename, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(config, 'newcodename', $event.target.value)"/>
      </div>
      <div class="col-md-2">
      <CatText
          :attributes="{ename: 'newcdvaluefield', cname: '', value: config.newcdvaluefield, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(config, 'newcdvaluefield', $event.target.value)"/>
      </div>
      <div class="col-md-2">
      <CatText
          :attributes="{ename: 'newcdtextfield', cname: '', value: config.newcdtextfield, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(config, 'newcdtextfield', $event.target.value)"/>
      </div>
      <div class="col-md-2">
      <CatText
          :attributes="{ename: 'newcondition', cname: '', value: config.newcondition, ratio: '4:8', inline:true}"
          :config="{hideframe:true}"
          @input="$set(config, 'newcondition', $event.target.value)"/>
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
  name: 'CatSelectCodeOptions',
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
          $type: 'codeoption',
          codeName: (!this.config.newcodename)?'':this.config.newcodename,
          valueField: (!this.config.newcdvaluefield)?'':this.config.newcdvaluefield,
          textField: (!this.config.newcdtextfield)?'':this.config.newcdtextfield,
          condition: (!this.config.newcondition)?'':this.config.newcondition
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
