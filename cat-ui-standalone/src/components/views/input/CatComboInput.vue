<template>
  <CatFrame :attributes="attributes" :config="config">
    <div class="comboinput" :class="'col-md-'+attributes.colWidth">
      <div class="form-group">
        <label :class="'col-xs-'+attributes.ratio.split(':')[0]" class="control-label" data-for="comboinput">{{attributes.cname}}</label>
        <div :class="'col-xs-'+attributes.ratio.split(':')[1]">
          <div class="col-xs-5" style="padding: 0;">
            <input style="width: auto;border: 1px solid;border-right: 0;border-color: #C6CDD0;" type="text"
            :name="attributes.ename" :id="attributes.ename" v-model="attributes.value">
          </div>
          <div class="col-xs-5">
            <CatSelect :attributes="selectdata.attributes" :config="selectdata.config" :children="selectdata.children" />
          </div>
        </div>
      </div>
    </div>
  </CatFrame>
</template>
<script>
import closespdata from '../../js/closespdata.js'

export default {
  name: 'CatComboInput',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  computed: {
    selectdata: function() {
      var sltdata = Object.assign({}, {
        attributes: Object.assign({}, {
          $type: 'select',
          ename: this.attributes.ename+'_unit',
          inline: true
        }),
        config: Object.assign({}, {
          hideframe: true
        }),
        children: []
      });
      if(this.attributes.codeName!==undefined
        &&this.attributes.codeName!==null
        &&this.attributes.codeName!=='') {
        sltdata.children.push({
          attributes: {
            $type: 'codeoption',
            codeName: this.attributes.codeName
          },
          config: {},
          children: []
        });
      }
      if(this.attributes.resultId!==undefined
        &&this.attributes.resultId!==null
        &&this.attributes.resultId!=='') {
        sltdata.children.push({
          attributes: {
            $type: 'options',
            blockId: this.attributes.resultId
          },
          config: {},
          children: []
        });
      }

      return sltdata;
    }
  }
}
</script>

<style scoped>
</style>
