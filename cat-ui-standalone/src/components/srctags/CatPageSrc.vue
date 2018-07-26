<template>
  <pre>
{{jscode}}
  </pre>
</template>

<script>
import getnodelist from '../js/getnodelist.js'
import gridevent from '../js/gridevent.js'
import treeevent from '../js/treeevent.js'
import jsbeautify from '../js/jsbeautify.js'

export default {
  name: 'CatPageSrc',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  data: function() {
    return {
      gridevent: gridevent,
      treeevent: treeevent
    };
  },
  mounted: function() {
    jsbeautify(this.$el);
  },
  updated: function() {
    jsbeautify(this.$el);
  },
  computed: {
    jscode: function() {
      var source = '$(function() {\n';
      for(var i in this.config.pagebuttons) {
        var item = this.config.pagebuttons[i];
        if(item.attributes.ename==='INSERT'
        ||item.attributes.ename.indexOf('INSERT_')===0
        ||item.attributes.ename==='SAVE'
        ||item.attributes.ename.indexOf('SAVE_')===0
        ||item.attributes.ename==='CANCEL'
        ||item.attributes.ename.indexOf('CANCEL_')===0
        ||item.attributes.ename==='DELETE'
        ||item.attributes.ename.indexOf('DELETE_')===0
        ||item.attributes.regionId.indexOf('GRID:')===0
        ) {
          continue;
        }
        source += '// TODO '+item.attributes.cname+' 按钮事件\n'
                + '$(\'#'+item.attributes.ename+'\').on(\'click\', function() {\n'
                + '\n'
                + '});\n\n';
      }
      // 组织IPLATUI.EFGrid
      var gridlist = [];
      getnodelist(this.$root.$data, gridlist, 'grid');
      if(gridlist&&gridlist.length!=0) {
        source += 'IPLATUI.EFGrid = {\n';

        for(var idx in gridlist) {
          var grid = gridlist[idx];
          source += '"'+grid.attributes.blockId+'": {\n';
          var gc = this.gridcontent(grid);
          for(var cidx in gc) {
            var item = gc[cidx];
            source += item;
            if(parseInt(cidx)!==gc.length-1) {
              source += ',';
            }
            source += '\n';
          }

          source += '}';
          if(parseInt(idx)!=gridlist.length-1) {
            source += ',';
          }
          source += '\n';
        }

        source += '};\n\n';
      }

      // 组织IPLATUI.EFTree
      var treelist = [];
      getnodelist(this.$root.$data, treelist, 'tree');
      if(treelist&&treelist.length!=0) {
        source += 'IPLATUI.EFTree = {\n';

        for(var idx in treelist) {
          var tree = treelist[idx];
          source += '"'+tree.attributes.bindId+'": {\n';
          // TODO tree options
          var tc = this.treecontent(tree);
          for(var cidx in tc) {
            var item = tc[cidx];
            source += item;
            if(parseInt(cidx)!==tc.length-1) {
              source += ',';
            }
            source += '\n';
          }

          source += '}';
          if(parseInt(idx)!=treelist.length-1) {
            source += ',';
          }
          source += '\n';
        }

        source += '};\n';
      }

      source += '});\n\n';

      return jsbeautify(source);
    }
  },
  methods: {
    gridcontent: function(grid) {
      var gridCList = [];
      // toolbarConfig
      if(grid.attributes.toolbarConfig) {
        gridCList.push('toolbarConfig: '+JSON.stringify(grid.attributes.toolbarConfig, null, 2));
      }
      // grid event
      if(grid.config.gridevent) {
        for(var ent in grid.config.gridevent) {
          if(grid.config.gridevent[ent]) {
            var funcStr = this.gridevent[ent].func;
            var gridButons = this.gridbutton();
            funcStr = funcStr.replace('#gridbutton#', gridButons);
            gridCList.push(funcStr);
          }
        }
      }
      return gridCList;
    },
    gridbutton: function() {
      var html = "";
      for(var child of this.$root.$data.config.pagebuttons) {
        if(child.attributes.ename==='INSERT'
        ||child.attributes.ename.indexOf('INSERT_')===0
        ||child.attributes.ename==='SAVE'
        ||child.attributes.ename.indexOf('SAVE_')===0
        ||child.attributes.ename==='CANCEL'
        ||child.attributes.ename.indexOf('CANCEL_')===0
        ||child.attributes.ename==='DELETE'
        ||child.attributes.ename.indexOf('DELETE_')===0
        ) {
          continue;
        }
        if(child.attributes.regionId.indexOf('GRID:')===0) {
          html += '// TODO '+child.attributes.cname+' 按钮事件\n'
                  + '$(\'#'+child.attributes.ename+'\').on(\'click\', function() {\n'
                  + '\n'
                  + '});\n\n';
        }
      }
      return html;
    },
    treecontent: function(tree) {
      var treeCList = [];
      // ROOT
      if(tree.attributes.root) {
        treeCList.push('ROOT:'+JSON.stringify(tree.attributes.root));
      }
      // tree event
      var te = tree.config.treeevent
      if(te) {
        if('check' in te&&te.check) {
          treeCList.push('checkboxes: true');
        }
        if('dragstart' in te&&te.dragstart
         ||'drag' in te&&te.drag
         ||'drop' in te&&te.drop
         ||'dragend' in te&&te.dragend) {
          treeCList.push('dragAndDrop: true');
        }
        for(var ent in te) {
          if(te[ent]) {
            treeCList.push(this.treeevent[ent].func);
          }
        }
      }
      return treeCList;
    }
  }
}
</script>

<style scoped>
</style>
