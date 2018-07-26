<template>
<div>
  <div class="row">
      <CatSelectNative
      	:attributes="{ename:'newattrtype', cname:'Type',colWidth:'6', ratio:'4:8',value:(!config.newattrtype)?'string':config.newattrtype}"
      	:children="attrType"
      	:config="config"
      	@change="$set(config, 'newattrtype', $event.target.value)"/>
    <div class="col-md-2">
      <CatButton :attributes="{ename:'addnew', uri:'fa fa-save', layout: '2', cname: '', colWidth: '2', desc: '保存'}"
        :config="{hideframe:true}" @click="click"/>
    </div>
  </div>
  <div class="row">
      <CatText :attributes="{ename:'newattrkey', cname:'Key', colWidth:'6', ratio: '4:8', value: config.newattrkey}"
        :config="{hideframe:true}"
        @input="$set(config, $event.target.id, $event.target.value)"/>
      <CatText :attributes="{ename:'newattrvalue', cname:'Value', colWidth:'6', ratio: '4:8', value: config.newattrvalue}"
        :config="{hideframe:true}"
        @input="$set(config, $event.target.id, $event.target.value)"/>
  </div>
</div>
</template>

<script>
export default {
  name: 'CatAttributes',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  data: function() {
    return {
      attrType: [
        {
          attributes: {
            value: 'string',
            label: 'String'
          },
          config: {
            tag: '',
            tagHtml: ''
          }
        },
        {
          attributes: {
            value: 'boolean',
            label: 'Boolean'
          },
          config: {
            tag: '',
            tagHtml: ''
          }
        },
        {
          attributes: {
            value: 'object',
            label: 'Object'
          },
          config: {
            tag: '',
            tagHtml: ''
          }
        }
      ]
    };
  },
  methods: {
    click: function(event) {
      if(this.config.newattrtype==='boolean') {
        this.$set(this.attributes, this.config.newattrkey, this.config.newattrvalue.toLowerCase()==='true');
      }
      else if(this.config.newattrtype==='object') {
        this.$set(this.attributes, this.config.newattrkey, JSON.parse(this.config.newattrvalue));
      }
      else {
        var key = this.config.newattrkey;
        if(!key) {
          console.error('Key is null or undefined');
          return;
        }
        else if(key==='$type') {
          alert('Select Type from Properties');
          return;
        }
        var val = (!this.config.newattrvalue)?"":this.config.newattrvalue;
        this.$set(this.attributes, key, val);
      }
    }
  }
}
</script>

<style scoped>
</style>
