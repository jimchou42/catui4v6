<template>
  <div style="height:auto;">
  <span title="" class="k-widget k-dropdown k-header" @click="click"
    unselectable="on" role="listbox" aria-haspopup="true"
    aria-expanded="false" style="width: 100%;" tabindex="0"
    :aria-owns="attributes.ename+'_listbox'" aria-disabled="false" aria-busy="false">
    <span unselectable="on" class="k-dropdown-wrap k-state-default" :class="{'k-state-disabled':attributes.disabled, 'i-state-readonly':attributes.readonly}">
      <span unselectable="on" class="k-input">{{displaylabel}}</span>
      <span unselectable="on" class="k-select" aria-label="select">
        <span class="k-icon k-i-arrow-s"></span>
      </span>
    </span>
    <input :id="attributes.ename" :name="attributes.ename" style="width: 100%; display: none;" data-role="dropdownlist">
  </span>
  </div>
</template>

<script>
export default {
  name: 'CatSelectInline',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    // 处理click事件
    click: function(event) {
      // 触发下拉框内容是否显示
      if(this.$root.$data.config.sdata!==undefined
        &&this.$root.$el.querySelector('.k-animation-container').id===this.attributes.ename+'__listbox') {
        this.$delete(this.$root.$data.config, 'sdata');
      }
      else {
        if(this.attributes.readonly||this.attributes.disabled) {
          return;
        }
        var sdata = {
          attributes: this.attributes,
          //config: this.config,
          config: {catid: this.config.catid},
          children: this.children
        };
        var x = this.$el.getBoundingClientRect().x;
        var y = this.$el.getBoundingClientRect().y + this.$el.clientHeight + document.querySelector('.block-content.form-horizontal').scrollTop;
        this.$set(sdata.config, 'selOptPos', {x:x, y:y, mw: this.$el.clientWidth});
        if('datafor' in this.config) {
          this.$set(sdata.config, 'datafor', this.config.datafor);
        }
        this.$set(this.$root.$data.config, 'sdata', sdata);
      }
    }
  },
  // 计算属性
  computed: {
    displaylabel: function() {
      if(!this.attributes.value) {
        return '';
      }
      var children = this.children;
      for(var i in children) {
        if(children[i].attributes.value===this.attributes.value) {
          return children[i].attributes.label;
        }
      }
      return '';
    }
  }

}
</script>

<style scoped>
</style>
