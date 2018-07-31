// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import CatUi from './cat-ui'

import assembly from './components/js/assembly.js'
import settreenode from './components/js/settreenode.js'
import finder from './components/js/finder.js'
//import testdata from './components/js/testdata.js'

import CatAttributes from './components/properties/CatAttributes'
import CatComponents from './components/properties/CatComponents'
import CatDialog from './components/properties/CatDialog'
import CatFrame from './components/properties/CatFrame'
import CatProperties from './components/properties/CatProperties'
import CatMetaData from './components/properties/CatMetaData'
import CatSelectFixedOptions from './components/properties/CatSelectFixedOptions'
import CatSelectBlockOptions from './components/properties/CatSelectBlockOptions'
import CatSelectCodeOptions from './components/properties/CatSelectCodeOptions'
import CatGridPanel from './components/properties/CatGridPanel'
import CatTreePanel from './components/properties/CatTreePanel'

import CatColumnTag from './components/tags/CatColumnTag'
import CatComboColumnTag from './components/tags/CatComboColumnTag'
import CatPopupColumnTag from './components/tags/CatPopupColumnTag'
import CatMultiSelectColumnTag from './components/tags/CatMultiSelectColumnTag'
import CatDatePickerTag from './components/tags/CatDatePickerTag'
import CatDateSpanTag from './components/tags/CatDateSpanTag'
import CatDivTag from './components/tags/CatDivTag'
import CatGridTag from './components/tags/CatGridTag'
import CatLayoutTag from './components/tags/CatLayoutTag'
import CatOptionTag from './components/tags/CatOptionTag'
import CatOptionsTag from './components/tags/CatOptionsTag'
import CatCodeOptionTag from './components/tags/CatCodeOptionTag'
import CatPageTag from './components/tags/CatPageTag'
import CatRegionTag from './components/tags/CatRegionTag'
import CatSelectTag from './components/tags/CatSelectTag'
import CatMultiSelectTag from './components/tags/CatMultiSelectTag'
import CatTextTag from './components/tags/CatTextTag'
import CatTreeTag from './components/tags/CatTreeTag'
import CatSwapTag from './components/tags/CatSwapTag'
import CatOnceTreeTag from './components/tags/CatOnceTreeTag'
import CatTabTag from './components/tags/CatTabTag'
import CatTabDivTag from './components/tags/CatTabDivTag'
import CatAutoCompleteTag from './components/tags/CatAutoCompleteTag'
import CatUploadTag from './components/tags/CatUploadTag'
import CatButtonBarTag from './components/tags/CatButtonBarTag'
import CatButtonTag from './components/tags/CatButtonTag'
import CatCascadeTag from './components/tags/CatCascadeTag'
import CatComboInputTag from './components/tags/CatComboInputTag'
import CatPopupInputTag from './components/tags/CatPopupInputTag'
import CatTreeInputTag from './components/tags/CatTreeInputTag'
import CatLabelTag from './components/tags/CatLabelTag'

import CatColumn from './components/views/grid/CatColumn'
import CatGrid from './components/views/grid/CatGrid'
import CatGridContent from './components/views/grid/CatGridContent'
import CatGridContentLocked from './components/views/grid/CatGridContentLocked'
import CatGridHeader from './components/views/grid/CatGridHeader'
import CatGridHeaderLocked from './components/views/grid/CatGridHeaderLocked'
import CatGridHeaderWrap from './components/views/grid/CatGridHeaderWrap'
import CatGridToolbar from './components/views/grid/CatGridToolbar'
import CatGridPageWrap from './components/views/grid/CatGridPageWrap'

import CatCheckbox from './components/views/input/CatCheckbox'
import CatCheckboxInline from './components/views/input/CatCheckboxInline'
import CatDatePicker from './components/views/input/CatDatePicker'
import CatDateSpan from './components/views/input/CatDateSpan'
import CatHidden from './components/views/input/CatHidden'
import CatRadio from './components/views/input/CatRadio'
import CatRadioInline from './components/views/input/CatRadioInline'
import CatText from './components/views/input/CatText'
import CatTextarea from './components/views/input/CatTextarea'
import CatTextareaInline from './components/views/input/CatTextareaInline'
import CatTextInline from './components/views/input/CatTextInline'
import CatAutoComplete from './components/views/input/CatAutoComplete'
import CatUpload from './components/views/input/CatUpload'
import CatComboInput from './components/views/input/CatComboInput'
import CatPopupInput from './components/views/input/CatPopupInput'
import CatTreeInput from './components/views/input/CatTreeInput'

import CatSelect from './components/views/select/CatSelect'
import CatSelectInline from './components/views/select/CatSelectInline'
import CatSelectNative from './components/views/select/CatSelectNative'
import CatSelectOptions from './components/views/select/CatSelectOptions'
import CatMultiSelect from './components/views/select/CatMultiSelect'

import CatButton from './components/views/CatButton'
import CatDiv from './components/views/CatDiv'
import CatLayout from './components/views/CatLayout'
import CatPre from './components/views/CatPre'
import CatRegion from './components/views/CatRegion'
import CatTab from './components/views/CatTab'
import CatTabDiv from './components/views/CatTabDiv'
import CatTree from './components/views/CatTree'
import CatTreeItem from './components/views/CatTreeItem'
import CatSwap from './components/views/CatSwap'
import CatButtonBar from './components/views/CatButtonBar'
import CatLabel from './components/views/CatLabel'

import CatPageSrc from './components/srctags/CatPageSrc'

Vue.config.productionTip = true

var sampledata = {
    attributes: {
      $type: 'page',
      prefix: '',
      title: '',
      ename: ''
    },
    config: {
      catid: 'PAGE',
      tag: 'CatDiv',
      tagHtml: 'CatPageTag',
      catalog: 'layout',
      showdata: false,
      showtag: false,
      pagebuttons: []
    },
    children: []
};

Vue.component('CatLayout', CatLayout)
Vue.component('CatAttributes', CatAttributes)
Vue.component('CatComponents', CatComponents)
Vue.component('CatDialog', CatDialog)
Vue.component('CatFrame', CatFrame)
Vue.component('CatProperties', CatProperties)
Vue.component('CatMetaData', CatMetaData)
Vue.component('CatSelectFixedOptions', CatSelectFixedOptions)
Vue.component('CatSelectBlockOptions', CatSelectBlockOptions)
Vue.component('CatSelectCodeOptions', CatSelectCodeOptions)
Vue.component('CatGridPanel', CatGridPanel)
Vue.component('CatTreePanel', CatTreePanel)

Vue.component('CatColumnTag', CatColumnTag)
Vue.component('CatComboColumnTag', CatComboColumnTag)
Vue.component('CatPopupColumnTag', CatPopupColumnTag)
Vue.component('CatMultiSelectColumnTag', CatMultiSelectColumnTag)
Vue.component('CatDatePickerTag', CatDatePickerTag)
Vue.component('CatDateSpanTag', CatDateSpanTag)
Vue.component('CatDivTag', CatDivTag)
Vue.component('CatGridTag', CatGridTag)
Vue.component('CatLayoutTag', CatLayoutTag)
Vue.component('CatOptionTag', CatOptionTag)
Vue.component('CatOptionsTag', CatOptionsTag)
Vue.component('CatCodeOptionTag', CatCodeOptionTag)
Vue.component('CatPageTag', CatPageTag)
Vue.component('CatRegionTag', CatRegionTag)
Vue.component('CatSelectTag', CatSelectTag)
Vue.component('CatMultiSelectTag', CatMultiSelectTag)
Vue.component('CatTextTag', CatTextTag)
Vue.component('CatTreeTag', CatTreeTag)
Vue.component('CatSwapTag', CatSwapTag)
Vue.component('CatOnceTreeTag', CatOnceTreeTag)
Vue.component('CatTabTag', CatTabTag)
Vue.component('CatTabDivTag', CatTabDivTag)
Vue.component('CatAutoCompleteTag', CatAutoCompleteTag)
Vue.component('CatUploadTag', CatUploadTag)
Vue.component('CatButtonBarTag', CatButtonBarTag)
Vue.component('CatButtonTag', CatButtonTag)
Vue.component('CatCascadeTag', CatCascadeTag)
Vue.component('CatComboInputTag', CatComboInputTag)
Vue.component('CatPopupInputTag', CatPopupInputTag)
Vue.component('CatTreeInputTag', CatTreeInputTag)
Vue.component('CatLabelTag', CatLabelTag)

Vue.component('CatColumn', CatColumn)
Vue.component('CatGrid', CatGrid)
Vue.component('CatGridContent', CatGridContent)
Vue.component('CatGridContentLocked', CatGridContentLocked)
Vue.component('CatGridHeader', CatGridHeader)
Vue.component('CatGridHeaderLocked', CatGridHeaderLocked)
Vue.component('CatGridHeaderWrap', CatGridHeaderWrap)
Vue.component('CatGridToolbar', CatGridToolbar)
Vue.component('CatGridPageWrap', CatGridPageWrap)

Vue.component('CatCheckbox', CatCheckbox)
Vue.component('CatCheckboxInline', CatCheckboxInline)
Vue.component('CatDatePicker', CatDatePicker)
Vue.component('CatDateSpan', CatDateSpan)
Vue.component('CatHidden', CatHidden)
Vue.component('CatRadio', CatRadio)
Vue.component('CatRadioInline', CatRadioInline)
Vue.component('CatText', CatText)
Vue.component('CatTextarea', CatTextarea)
Vue.component('CatTextareaInline', CatTextareaInline)
Vue.component('CatTextInline', CatTextInline)
Vue.component('CatAutoComplete', CatAutoComplete)
Vue.component('CatUpload', CatUpload)
Vue.component('CatComboInput', CatComboInput)
Vue.component('CatPopupInput', CatPopupInput)
Vue.component('CatTreeInput', CatTreeInput)

Vue.component('CatSelect', CatSelect)
Vue.component('CatSelectInline', CatSelectInline)
Vue.component('CatSelectNative', CatSelectNative)
Vue.component('CatSelectOptions', CatSelectOptions)
Vue.component('CatMultiSelect', CatMultiSelect)

Vue.component('CatButton', CatButton)
Vue.component('CatDiv', CatDiv)
Vue.component('CatLayout', CatLayout)
Vue.component('CatPre', CatPre)
Vue.component('CatRegion', CatRegion)
Vue.component('CatTab', CatTab)
Vue.component('CatTabDiv', CatTabDiv)
Vue.component('CatTree', CatTree)
Vue.component('CatTreeItem', CatTreeItem)
Vue.component('CatSwap', CatSwap)
Vue.component('CatButtonBar', CatButtonBar)
Vue.component('CatLabel', CatLabel)

Vue.component('CatPageSrc', CatPageSrc)

var getRequest = function() {
   var url = window.location.search; //获取url中"?"符后的字串
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      var strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
   }
   return theRequest;
};

var initVM = function(initData) {
  $.extend(initData.config, {
    "$catsavecallback": function(savedata) {
      console.log("s", savedata);
      if(!savedata.attributes.ename) {
        alert("PAGE ename CAN NOT EMPTY");
        return false;
      }
      var sanddata = Object.assign({}, {
        "data": JSON.stringify(savedata, null, 2),
        "pageid": savedata.attributes.ename
      });
      // 提交servlet或者jsp保存json对象
      $.ajax({
          url: "/savejson.jsp",
          type: "POST",
          dataType: "json",
          contentType: "application/x-www-form-urlencoded",
          data: sanddata,
          success: function (data, textStatus, jqXhr) {
             console.log('success', data);
             if(data.status==="error") {
               alert(data.msg);
             }
             else if(data.status==="success") {
               alert('CAT DATA SAVED');
               window.location=window.location.origin+"?page="+data.data.attributes.ename;
             }
          },
          error: function (jqXhr, textStatus, errorThrown) {
             console.error("error", textStatus);
          }
      });
    }
  });
  /* eslint-disable no-new */
  var vm = new Vue({
    el: '#cat-ui',
    template: "<CatUi :attributes='attributes' :config='config' :children='children'/>",
    components: { CatUi },
    data: function() {
      return initData;
    },
    methods: {
      /**
       * data schema
       * {
       *    attributes: {
       *      $type: '',
       *      key: value
       *      ...
       *    },
       *    config: {
       *      catid: 'unique id'
       *      ...
       *    },
       *    children: [ data ]
       * }
       */
      setvmdata: function(data, callback) {
        var assembled=assembly(data, this);
        if(assembled!==undefined&&assembled!==null) {
          this.$set(this.$root.$data, 'attributes', assembled.attributes);
          this.$set(this.$root.$data, 'config', assembled.config);
          this.$set(this.$root.$data, 'children', assembled.children);
        }
        if(callback!==undefined&&typeof callback==='function') {
          this.$set(this.$root.$data.config, '$catsavecallback', callback);
        }
      },
      /**
       * settreenode = function(treeid, pcatid, treeitems)
       * @param treeid - tree id
       * @param pcatid - catid of parent node
       * @param treeitems - tree node : [{text:,label:,leaf:,...}]
       * @return 0:error, >0:success
       */
      settreenode: settreenode,
      /**
       * find = function(data, type, key, value)
       * @param data find from data
       * @param type 'attributes' or 'config'
       * @param key key of object to be found
       * @param value value of object to be found
       * @return null:not found, $data: found
       */
      find: finder
    }
  });
  //vm.setvmdata(testdata);
  //vm.setvmdata(sampledata, function(data) { alert('saved'); });
  //$.extend(window,{__vm: vm});
  //$('#JPEE01').data('vm', vm);
  $('#page-container').data('vm', vm);

}

var pagename = getRequest().page;

if(pagename) {
    $.getJSON("/cat/cat-ui-standalone/data/"+pagename+".json", function(jsondata) {
      initVM(jsondata);
    }).error(function (jqXhr, textStatus, error) {
      console.error("ERROR: " + textStatus + ", "+pagename+".json " + error);
      initVM(sampledata);
    });
}
else {
  initVM(sampledata);
}
