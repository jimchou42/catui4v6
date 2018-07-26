<template>
  <CatFrame :attributes="{ename: '', $type:'MetaData'}" :config="metaconfig">
  <div class="form-group">
    <div class="row">
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-2">
            <input v-if="$root.$data.config.selectlist&&(Object.getOwnPropertyNames($root.$data.config.selectlist).length-1)!==0"
              type="checkbox" @change="checkall">
          </div>
          <div class="col-md-4">英文</div>
          <div class="col-md-4">中文</div>
          <CatButton :attributes="{ename: '', uri:'fa fa-trash', layout: '2', cname: '', colWidth: '2', desc: '删除所有'}"
            :config="{hideframe:true}" @click="$delete($root.$data.config, 'selectlist')" />
        </div>
        <div class="row" v-for="(child, key) in $root.$data.config.selectlist" :key="key">
          <div class="col-md-2">
            <input type="checkbox" :id="key" :name="key"
              :checked="child.$ck"
              @change="$set(child, '$ck', $event.target.checked)">
          </div>
          <div class="col-md-4">{{child.ename}}</div>
          <div class="col-md-4">{{child.cname}}</div>
          <CatButton v-if="key!=='$type'" :attributes="{ename: key, uri:'fa fa-trash', layout: '2', cname: '', colWidth: '2', desc: '删除 '+key}"
            :config="{hideframe:true}" @click="$delete($root.$data.config.selectlist, key)">
          </CatButton>
        </div>
      </div>
      <div class="col-md-2">
      </div>
  </div>
</div>

  </CatFrame>
</template>

<script>
import guid from '../js/guid.js'

export default {
  name: 'CatMetaData',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  data: function() {
    return {
      metaconfig: {
        hidegear: true,
        close: function(vm) {
          vm.$set(vm.$root.$data.config, 'showmeta', false);
        }
      }
    };
  },
  methods: {
    checkall: function(e) {
      var selectlist = this.$root.$data.config.selectlist;
      if(!selectlist) {
        return;
      }
      for(var key in selectlist) {
        this.$set(this.$root.$data.config.selectlist[key], '$ck', e.target.checked);
      }
    }
  }
}
</script>

<style scoped>
</style>
