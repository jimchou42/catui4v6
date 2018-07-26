<template>
  <CatFrame :attributes="attributes" :config="config">
    <div :id="attributes.ename" class="tree k-widget k-treeview"
       data-role="treeview" tabindex="0"
      :aria-activedescendant="attributes.ename+'_tv_active'">
      <ul class="k-group k-treeview-lines" role="tree">
        <li role="treeitem" class="k-item k-first k-last" :id="config.catid">
          <div class="k-top k-bot">
            <span class="k-icon" @click.stop="expand"
              :class="{'k-i-expand':!config.expand, 'k-i-collapse':config.expand}"></span><!--k-i-expand k-i-collapse -->
            <span class="k-in">{{attributes.cname}}</span>
          </div>
          <CatTreeItem :config="config" :children="children" :attributes="attributes" />
        </li>
      </ul>

    </div>
  </CatFrame>
</template>

<script>
import querytree from '../js/querytree.js'

export default {
  name: 'CatTree',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  beforeMount: function() {
    this.$set(this.config, 'treeid', this.config.catid);
    for(var child of this.children) {
      this.$set(child.config, 'treeid', this.config.catid);
    }
  },
  methods: {
    expand: function(e) {
      var expanded = !this.config.expand?true:!this.config.expand;
      this.$set(this.config, 'expand', expanded);
      if(expanded&&this.children.length===0) {
        querytree(this, '_root_', this.config.catid);
      }
    }
  }
}
</script>

<style scoped>
</style>
