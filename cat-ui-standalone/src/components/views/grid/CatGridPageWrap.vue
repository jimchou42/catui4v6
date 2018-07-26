<template>
    <div :class="attributes.pagerPosition==='top'?'i-pager-top':''"
      class="k-pager-wrap k-grid-pager k-widget k-floatwrap no-show-count i-grid-pager k-toolbar-first-visible k-toolbar-last-visible"
      data-role="pager">
      <a href="#" aria-label="首页" title="首页"
        class="k-link k-pager-nav k-pager-first k-state-disabled"
        data-page="1" tabindex="-1" style="display: visible;">
        <span class="k-icon k-i-seek-w"></span>
      </a>
      <a href="#" aria-label="上一页"
        title="上一页" class="k-link k-pager-nav  k-state-disabled"
        data-page="1" tabindex="-1">
        <span class="k-icon k-i-arrow-w"></span>
      </a>
      <span class="k-pager-input k-label" :style="(!attributes.showCount)?'display: none;':'display: visible;'"">
        <input class="k-textbox">/1页
      </span>
      <a href="#" aria-label="下一页"
        title="下一页" class="k-link k-pager-nav  k-state-disabled"
        data-page="1" tabindex="-1">
        <span class="k-icon k-i-arrow-e"></span>
      </a>
      <a href="#" aria-label="末页" title="末页"
        class="k-link k-pager-nav k-pager-last k-state-disabled"
        data-page="1" tabindex="-1" style="display: visible;">
        <span class="k-icon k-i-seek-e"></span>
      </a>
      <span class="k-pager-sizes k-label">
        <CatSelect :attributes="{ename:'',inline:true,value:'10'}"
          :config="{showoption:false, hideframe:true, inlineframe:true}" :children="pageoptions" />
        条/页
      </span>
      <a href="#" aria-label="总数" title="总数" class="i-grid-count k-link k-pager-nav" tabindex="-1"
        id="count_result">
        <span class="fa fa-text-width"></span>
      </a>
      <span class="k-pager-info k-label" :style="(!attributes.showCount)?'display: none;':'display: visible;'">共1条</span>
    </div>
</template>

<script>
export default {
  name: 'CatGridPageWrap',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  data: function() {
    return {
      pageoptions: [
        {
          attributes: {
            $type: 'option',
            value: '10',
            label: '10'
        },
        config: {},
        children: []
        },
        {
          attributes: {
            $type: 'option',
            value: '20',
            label: '20'
          },
          config: {},
          children: []
        },
        {
          attributes: {
            $type: 'option',
            value: '50',
            label: '50'
          },
          config: {},
          children: []
        },
        {
          attributes: {
            $type: 'option',
            value: '100',
            label: '100'
          },
          config: {},
          children: []
        }
      ]
    };
  }
}
</script>

<style scoped>
</style>
