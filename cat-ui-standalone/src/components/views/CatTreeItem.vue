<template>
  <ul class="k-group" role="tree" :style="{display: config.expand?'block':'none'}">
    <li v-for="(itm,idx) in children" :key="itm.config.catid"
      role="treeitem" class="k-item" :id="itm.attributes.ename+'_li'"
      :class="{'k-last':((idx+1)===children.length)}">
      <div :class="{'k-top':(idx===0), 'k-bot':(idx!==0&&((idx+1)===children.length)), 'k-mid':(idx!==0&&(idx+1)!==children.length)}">
        <span v-if="itm.children.length!==0||!itm.config.isleaf" @click.stop="expand(itm)"
          class="k-icon" :class="{'k-i-expand':!itm.config.expand, 'k-i-collapse':itm.config.expand}"></span>
        <input v-if="config.checkbox" :id="itm.attributes.ename+'_ck'"
            :name="itm.attributes.ename+'_ck'"
            :value="itm.attributes.ename"
            :checked="itm.config.checked" type="checkbox" @change="checked(itm)">
        <span class="k-in" :id="itm.config.catid"
          @mouseover="$event.target.classList.add('k-state-hover')"
          @mouseout="$event.target.classList.remove('k-state-hover')"
          @click.stop="click">{{itm.attributes.type}}:【{{itm.attributes.ename}}】{{itm.attributes.cname}}</span>
      </div>
      <CatTreeItem :attributes="itm.attributes" v-if="itm.children.length!==0"
        :config="itm.config"
        :children="itm.children" />
    </li>
  </ul>
</template>

<script>
import settreeseled from '../js/settreeseled.js'
import finder from '../js/finder.js'
import querytree from '../js/querytree.js'

export default {
  name: 'CatTreeItem',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  beforeMount: function() {
    for(var child of this.children) {
      this.$set(child.config, 'treeid', this.config.treeid);
    }
  },
  methods: {
    click: function(e) {
      //alert(e.target.id);
    },
    expand: function(itm) {
      var expanded = !itm.config.expand?true:!itm.config.expand;
      this.$set(itm.config, 'expand', expanded);
      if(expanded&&itm.children.length===0) {
        var count = querytree(itm, itm.attributes.ename, itm.config.catid);
        if(count===0) {
          this.$set(itm.config, 'expand', false);
          this.$set(itm.config, 'isleaf', true);
        }
      }
    },
    checked: function(itm) {
      var checked = !itm.config.checked

      var tree;
      /*
      if(this.config.treeid==='__metadatatree') {
        tree = this.$root.$data.config.metadata;
      }
      else if(this.config.treeid==='__dbdatatree') {
        tree = this.$root.$data.config.dbdata;
      }
      else {
      */
        tree = finder(this.$root.$data, 'config', 'catid', this.config.treeid);
      /*
      }
      */

      this.$set(itm.config, 'checked', checked);
      settreeseled(this, tree, itm, checked);
    }
  }
}
</script>

<style scoped>
</style>
