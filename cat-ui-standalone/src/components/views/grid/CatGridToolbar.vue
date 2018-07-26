<template>
  <div class="k-header k-grid-toolbar">
    <div id="ef_grid_toolbar_result"
      class="grid_toolbar k-toolbar k-widget k-toolbar-resizable"
      data-role="toolbar" tabindex="0" style="touch-action: none;">
      <div v-if="showInsertButton()" class="kendo-xplat-add xplat-float-right" id="add" data-overflow="never" style="visibility: visible;">
        <button class="i-btn-lg k-grid-add" type="button"><span class="k-icon k-add"></span><span>新增</span></button>
      </div>
      <CatGridPageWrap :attributes="attributes" v-if="attributes.pagerPosition==='top'" />
      <div v-if="showSaveButton()" class="kendo-xplat-save-changes xplat-float-right" id="save-changes" data-overflow="never" style="visibility: visible;">
        <button class="i-btn-lg k-grid-save-changes" type="button"><span class="k-icon k-update"></span><span>保存</span></button>
      </div>
      <div v-if="showCancelButton()" class="kendo-xplat-cancel-changes xplat-float-right" id="cancel-changes" data-overflow="never" style="visibility: visible;">
        <button class="i-btn-lg k-grid-cancel-changes" type="button"><span class="k-icon k-cancel"></span><span>取消</span></button>
      </div>
      <div v-if="showDeleteButton()" class="kendo-xplat-delete xplat-float-right" id="delete" data-overflow="never" style="visibility: visible;">
        <button class="i-btn-lg k-grid-delete" type="button"><span class="k-icon k-delete"></span><span>删除</span></button>
      </div>
      <div v-for="child in $root.$data.config.pagebuttons"
        :key="child.attributes.ename"
        v-if="showCustomButton(child)">
        <button type="button" class="i-btn-lg" tabindex="-1" data-toggle="tooltip" :title="child.attributes.desc"
            :id="child.attributes.ename"
            :layout="child.attributes.layout"
            :disabled="child.attributes.disabled">
          <template v-if="child.attributes.layout==='0'||child.attributes.layout==='1'">{{child.attributes.cname}}</template>
          <span v-else-if="child.attributes.layout==='2'" :id="child.attributes.ename" :class="child.attributes.uri+' i-btn-only-icon'"></span>
          <template v-else-if="child.attributes.layout==='3'">
          <span :class="child.attributes.uri" :id="child.attributes.ename"></span>{{child.attributes.cname}}</template>
        </button>
      </div>
      <div v-if="attributes.needAuth===false" tabindex="0" class="k-overflow-anchor k-button" style="visibility: hidden; width: 1px;"><span class="k-icon k-i-arrow-s"></span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatGridToolbar',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    showCustomButton: function(child) {
      if(child.attributes.ename==='INSERT'||child.attributes.ename.indexOf('INSERT_')===0) {
        return false;
      }
      else if(child.attributes.ename==='SAVE'||child.attributes.ename.indexOf('SAVE_')===0) {
        return false;
      }
      else if(child.attributes.ename==='CANCEL'||child.attributes.ename.indexOf('CANCEL_')===0) {
        return false;
      }
      else if(child.attributes.ename==='DELETE'||child.attributes.ename.indexOf('DELETE_')===0) {
        return false;
      }
      else  {
        return this.attributes.blockId&&(child.attributes.regionId==='GRID:EF_GRID_'+this.attributes.blockId.toUpperCase());
      }
    },
    showInsertButton: function() {
      if(this.attributes.needAuth) {
        for(var child of this.$root.$data.config.pagebuttons) {
          if(child.attributes.ename==='INSERT'||child.attributes.ename.indexOf('INSERT_')===0) {
            return true;
          }
        }
        return false;
      }
      else  {
        return !this.attributes.toolbarConfig.hidden&&this.attributes.toolbarConfig.insert;
      }
    },
    showSaveButton: function() {
      if(this.attributes.needAuth) {
        for(var child of this.$root.$data.config.pagebuttons) {
          if(child.attributes.ename==='SAVE'||child.attributes.ename.indexOf('SAVE_')===0) {
            return true;
          }
        }
        return false;
      }
      else  {
        return !this.attributes.toolbarConfig.hidden&&this.attributes.toolbarConfig.save;
      }
    },
    showCancelButton: function() {
      if(this.attributes.needAuth) {
        for(var child of this.$root.$data.config.pagebuttons) {
          if(child.attributes.ename==='CANCEL'||child.attributes.ename.indexOf('CANCEL_')===0) {
            return true;
          }
        }
        return false;
      }
      else  {
        return !this.attributes.toolbarConfig.hidden&&this.attributes.toolbarConfig.cancel;
      }
    },
    showDeleteButton: function() {
      if(this.attributes.needAuth) {
        for(var child of this.$root.$data.config.pagebuttons) {
          if(child.attributes.ename==='DELETE'||child.attributes.ename.indexOf('DELETE_')===0) {
            return true;
          }
        }
        return false;
      }
      else  {
        return !this.attributes.toolbarConfig.hidden&&this.attributes.toolbarConfig.delete;
      }
    }
  }
}
</script>

<style scoped>
</style>
