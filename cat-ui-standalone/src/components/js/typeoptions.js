/**
 * 数据类型集合
 */
const typeoptions = [
  {
    attributes: {
      value: 'label',
      label: '纯文本'
    },
    config: {
      tag: 'CatLabel',
      tagHtml: 'CatLabelTag',
      catalog: 'elm',
      sample: {
          $type: 'label',
          text: ''
      }
    }
  },
  {
    attributes: {
      value: 'text',
      label: '文本框'
    },
    config: {
      tag: 'CatText',
      tagHtml: 'CatTextTag',
      catalog: 'elm',
      sample: {
          $type: 'text',
          ename: '',
          cname: '文本框',
          value: '',
          colWidth: '3',
          ratio: '4:8',
          required: false,
          readonly: false,
          disabled: false,
          inline: false,
          blockId: '',
          bindId: '',
          row: '',
          format: ''
      }
    }
  },
  {
    attributes: {
      value: 'select',
      label: '下拉框'
    },
    config: {
      tag: 'CatSelect',
      tagHtml: 'CatSelectTag',
      catalog: 'elm',
      sample: {
        $type: 'select',
        ename: '',
        cname: '下拉框',
        value: '',
        colWidth: '3',
        ratio: '4:8',
        required: false,
        readonly: false,
        disabled: false,
        inline: false,
        bindId: '',
        blockId: '',
        row: '',
        defaultValue: '',
        serviceName: '',
        methodName: '',
        resultId: '',
        template: '',
        textField: '',
        valueField: '',
        valueTemplate: ''
      }
    }
  },
  {
    attributes: {
      value: 'multiselect',
      label: '多选下拉框'
    },
    config: {
      tag: 'CatMultiSelect',
      tagHtml: 'CatMultiSelectTag',
      catalog: 'elm',
      sample: {
        $type: 'multiselect',
        ename: '',
        cname: '多选下拉框',
        value: '',
        colWidth: '3',
        ratio: '4:8',
        required: false,
        readonly: false,
        disabled: false,
        autoClose: true,
        bindId: '',
        blockId: '',
        row: '',
        defaultValue: '',
      }
    }
  },
  {
    attributes: {
      value: 'cascade',
      label: '级联下拉框'
    },
    config: {
      tag: 'CatSelect',
      tagHtml: 'CatCascadeTag',
      catalog: 'elm',
      sample: {
        $type: 'cascade',
        ename: '',
        cname: '级联下拉框',
        value: '',
        colWidth: '3',
        ratio: '4:8',
        required: false,
        readonly: false,
        disabled: false,
        autoBind: true,
        cascadeFrom: '',
        defaultValue: '',
        serviceName: '',
        methodName: '',
        resultId: '',
        template: '',
        textField: '',
        valueField: '',
        valueTemplate: '',
        blockId: '',
        row: ''
      }
    }
  },
  {
    attributes: {
      value: 'comboinput',
      label: '值|单位'
    },
    config: {
      tag: 'CatComboInput',
      tagHtml: 'CatComboInputTag',
      catalog: 'elm',
      sample: {
        $type: 'comboinput',
        ename: '',
        cname: '值|单位',
        value: '',
        colWidth: '3',
        ratio: '4:8',
        defaultValue: '',
        codeName: '',
        serviceName: '',
        methodName: '',
        resultId: '',
        textField: '',
        valueField: '',
        blockId: '',
        row: ''
      }
    }
  },
  {
    attributes: {
      value: 'textarea',
      label: '多行文本框'
    },
    config: {
      tag: 'CatTextarea',
      tagHtml: 'CatTextTag',
      catalog: 'elm',
      sample: {
        $type: 'textarea',
        ename: '',
        cname: '多行文本框',
        value: '',
        colWidth: '3',
        ratio: '4:8',
        required: false,
        readonly: false,
        disabled: false,
        inline: false
      }
    }
  },
  {
    attributes: {
      value: 'checkbox',
      label: '复选框'
    },
    config: {
      tag: 'CatCheckbox',
      tagHtml: 'CatTextTag',
      catalog: 'elm',
      sample: {
        $type: 'checkbox',
        ename: '',
        cname: '复选框',
        value: '',
        colWidth: '3',
        ratio: '4:8',
        inline: false,
        checked: false
      }
    }
  },
  {
    attributes: {
      value: 'radio',
      label: '单选框'
    },
    config: {
      tag: 'CatRadio',
      tagHtml: 'CatTextTag',
      catalog: 'elm',
      sample: {
        $type: 'radio',
        ename: '',
        cname: '单选框',
        value: '',
        colWidth: '3',
        ratio: '4:8',
        inline: false,
        checked: false
      }
    }
  },
  {
    attributes: {
      value: 'popupinput',
      label: '弹出输入框'
    },
    config: {
      tag: 'CatPopupInput',
      tagHtml: 'CatPopupInputTag',
      catalog: 'elm',
      sample: {
        $type: 'popupinput',
        ename: '',
        cname: '弹出输入框',
        required: false,
        disabled: false,
        readonly: false,
        colWidth: '3',
        ratio: '4:8',
        save: true,
        clear: true,
        refresh: false,
        resizable: false,
        columnCnames: '',
        columnEnames: '',
        backFillColumnIds: '',
        backFillFieldIds: '',
        containerId: '',
        codeName: '',
        valueField: '',
        textField: '',
        serviceName: '',
        methodName: '',
        resultId: '',
        popupHeight: '',
        popupTitle: '',
        popupType: '',
        popupWidth: '',
        blockId: '',
        row: '',
        originalInput: false
      }
    }
  },
  {
    attributes: {
      value: 'treeinput',
      label: '树弹出输入框'
    },
    config: {
      tag: 'CatTreeInput',
      tagHtml: 'CatTreeInputTag',
      catalog: 'elm',
      sample: {
        $type: 'treeinput',
        ename: '',
        cname: '树弹出输入框',
        required: false,
        disabled: false,
        readonly: false,
        colWidth: '3',
        ratio: '4:8',
        serviceName: '',
        methodName: '',
        valueField: '',
        textField: '',
        hasChildren: false,
        onlyLeaf: false,
        blockId: '',
        row: ''
      }
    }
  },
  {
    attributes: {
      value: 'hidden',
      label: '隐藏域'
    },
    config: {
      tag: 'CatHidden',
      tagHtml: 'CatTextTag',
      catalog: 'elm',
      sample: {
        $type: 'hidden',
        ename: '',
        cname: '隐藏域',
        value: ''
      }
    }
  },
  {
    attributes: {
      value: 'datepicker',
      label: '日期'
    },
    config: {
      tag: 'CatDatePicker',
      tagHtml: 'CatDatePickerTag',
      catalog: 'elm',
      sample: {
        $type: 'datepicker',
        ename: '',
        cname: '日期',
        colWidth: '3',
        ratio: '4:8',
        required: false,
        readonly: false,
        disabled: false,
        value: '',
        role: 'date',
        format: '',
        parseFormats: '',
        blockId: '',
        row: '',
        start: '',
        depth: ''
      }
    }
  },
  {
    attributes: {
      value: 'datespan',
      label: '日期范围'
    },
    config: {
      tag: 'CatDateSpan',
      tagHtml: 'CatDateSpanTag',
      catalog: 'elm',
      sample: {
        $type: 'datespan',
        startName: '',
        startCname: '开始日期',
        startRatio: '4:8',
        startValue: '',
        startTimeFormat: '',
        endName: '',
        endCname: '结束日期',
        endRatio: '4:8',
        endValue: '',
        endTimeFormat: '',
        ratio: '4:4',
        required: false,
        readonly: false,
        disabled: false,
        role: 'date',
        format: '',
        parseFormats: '',
        bindName: '',
        bindRatio: '',
        bindWidth: '',
        blockId: '',
        row: '',
        extChar: '',
        start: '',
        depth: ''
      }
    }
  },
  {
    attributes: {
      value: 'autocpl',
      label: '自填框'
    },
    config: {
      tag: 'CatAutoComplete',
      tagHtml: 'CatAutoCompleteTag',
      catalog: 'elm',
      sample: {
        $type: 'autocpl',
        ename: '',
        cname: '自完成框',
        colWidth: '3',
        ratio: '4:8',
        serviceName : '',
        queryMethod: '',
        resultId: '',
        dataField: '',
        filter: 'startswith',
        noDataTemplate: '',
        bindId: '',
        blockId: '',
        row: '',
      }
    }
  },
  {
    attributes: {
      value: 'upload',
      label: '上传'
    },
    config: {
      tag: 'CatUpload',
      tagHtml: 'CatUploadTag',
      catalog: 'elm',
      sample: {
        $type: 'upload',
        ename: '',
        path: 'folder/sub',
        docTag: '',
        readonly:false
      }
    }
  },
  {
    attributes: {
      value: 'tab',
      label: 'TAB页'
    },
    config: {
      tag: 'CatTab',
      tagHtml: 'CatTabTag',
      catalog: 'elm',
      sample: {
        $type: 'tab',
        ename: '',
        tabPosition: "top",
        showClose: false,
        state: false,
        content: 'normal',
        active: '0',
        contentType: ''
      }
    }
  },
  {
    attributes: {
      value: 'tabdiv',
      label: 'TAB标签'
    },
    config: {
      tag: 'CatTabDiv',
      tagHtml: 'CatTabDivTag',
      catalog: 'layout',
      sample: {
        $type: 'tabdiv',
        title: '标签'
      }
    }
  },
  {
    attributes: {
      value: 'tree',
      label: '树'
    },
    config: {
      tag: 'CatTree',
      tagHtml: 'CatTreeTag',
      catalog: 'elm',
      sample: {
        $type: 'tree',
        ename: '',
        root: '',
        expandLevel: '',
        hasChildren: '',
        serviceName: '',
        methodName: '',
        textField: '',
        valueField: '',
        bindId: '',
        dataImageUrlField: '',
        dataSpriteCssClassField: ''
      }
    }
  },
  {
    attributes: {
      value: 'oncetree',
      label: '单次加载树'
    },
    config: {
      tag: 'CatTree',
      tagHtml: 'CatOnceTreeTag',
      catalog: 'elm',
      sample: {
        $type: 'oncetree',
        ename: '',
        root: '',
        pid: '',
        expandLevel: '',
        hasChildren: '',
        serviceName: '',
        methodName: '',
        textField: '',
        valueField: '',
        bindId: '',
        dataImageUrlField: '',
        dataSpriteCssClassField: ''
      }
    }
  },
  {
    attributes: {
      value: 'swap',
      label: '交换树'
    },
    config: {
      tag: 'CatSwap',
      tagHtml: 'CatSwapTag',
      catalog: 'elm',
      sample: {
        $type: 'swap',
        width: '200',
        height: '300',
        ratio: '4:4',
        immediatelyRender: true,
        leftName: '',
        leftCname: '左侧树',
        leftDataSource: '',
        rightName: '',
        rightCname: '右侧树',
        rightDataSource: '',
        accessAll: false,
        blockId: '',
        row: '',
        satrtRatio: '4:8',
        endRatio: '4:8'
      }
    }
  },
  {
    attributes: {
      value: 'row',
      label: '行'
    },
    config: {
      tag: 'CatDiv',
      tagHtml: 'CatDivTag',
      catalog: 'layout',
      sample: {
        $type: 'row'
      }
    }
  },
  {
    attributes: {
      value: 'col',
      label: '列'
    },
    config: {
      tag: 'CatDiv',
      tagHtml: 'CatDivTag',
      catalog: 'layout',
      sample: {
        $type: 'col',
        colWidth: '3'
      }
    }
  },
  {
    attributes: {
      value: 'region',
      label: '区域'
    },
    config: {
      tag: 'CatRegion',
      tagHtml: 'CatRegionTag',
      catalog: 'layout',
      sample: {
        $type: 'region',
        ename: '',
        title: '区域',
        head: '',
        save: false,
        showClear: false,
        fitHeight: false,
        autoDrawButton: true,
        border: '',
        efRegionSave: false,
        efRegionShowClear: false,
        etc: ''
      }
    }
  },
  {
    attributes: {
      value: 'buttonbar',
      label: '区域按钮'
    },
    config: {
      tag: 'CatButtonBar',
      tagHtml: 'CatButtonBarTag',
      catalog: 'elm',
      sample: {
        $type: 'buttonbar',
        regionId: '',
        autoDrawButton: true
      }
    }
  },
  {
    attributes: {
      value: 'button',
      label: '按钮'
    },
    config: {
      tag: 'CatButton',
      tagHtml: 'CatButtonTag',
      catalog: 'elm',
      sample: {
        $type: 'button',
        ename: '',
        cname: '',
        desc: '',
        regionId: '',
        uri: '',
        layout: '0',
        isNeedPrivillege: false,
        status: ''
      }
    }
  },
  {
    attributes: {
      value: 'grid',
      label: '数据表格'
    },
    config: {
      tag: 'CatGrid',
      tagHtml: 'CatGridTag',
      catalog: 'grid',
      sample: {
        $type: 'grid',
        blockId: '',
        autoDraw: true,
        autoBind: false,
        autoFit: false,
        checkMode: '',
        copyToAdd: true,
        enable: true,
        filterable: false,
        height: '',
        needAuth: false,
        pagerPosition: '',
        personal: '',
        serviceName: '',
        queryMethod: '',
        insertMethod: '',
        updateMethod: '' ,
        deleteMethod: '',
        rowNo: false,
        showCount: false,
        sort: '',
        sumType: '',
        toolbarConfig: ''
      }
    }
  },
  {
    attributes: {
      value: 'column',
      label: '输入列'
    },
    config: {
      tag: 'CatColumn',
      tagHtml: 'CatColumnTag',
      catalog: 'col',
      sample: {
        $type: 'column',
        ename: '',
        cname: '输入列',
        width: '',
        locked: false,
        enable: true,
        readonly: false,
        hidden: false,
        copy: false,
        sort: false,
        editType: '',
        displayType: '',
        dateFormat: '',
        format: '',
        template: '',
        sumType: '',
        canPersonal: false,
        defaultValue: '',
        parseFormats: '',
        primaryKey: false
      }
    }
  },
  {
    attributes: {
      value: 'combocol',
      label: '选择列'
    },
    config: {
      tag: 'CatColumn',
      tagHtml: 'CatComboColumnTag',
      catalog: 'col',
      sample: {
        $type: 'combocol',
        ename: '',
        cname: '选择列',
        width: '200',
        valueField: '',
        textField: '',
        locked: false,
        enable: true,
        readonly: false,
        hidden: false,
        copy: false,
        sort: false,
        blockName: '',
        columnTemplate: '',
        defaultValue: '',
        itemTemplate: '',
        sourceName: ''

      }
    }
  },
  {
    attributes: {
      value: 'popupcol',
      label: '弹出列'
    },
    config: {
      tag: 'CatColumn',
      tagHtml: 'CatPopupColumnTag',
      catalog: 'col',
      sample: {
        $type: 'popupcol',
        ename: '',
        cname: '弹出列',
        width: '200',
        valueField: '',
        textField: '',
        locked: false,
        enable: true,
        readonly: false,
        save: true,
        copy: false,
        sort: false,
        refresh: false,
        resizable: false,
        columnCnames: '',
        columnEnames: '',
        backFillColumnIds: '',
        backFillFieldIds: '',
        containerId: '',
        codeName: '',
        serviceName: '',
        methodName: '',
        resultId: '',
        popupHeight: '',
        popupTitle: '',
        popupType: 'DynamicGrid,ServiceGrid',
        popupWidth: ''
      }
    }
  },
  {
    attributes: {
      value: 'multiselcol',
      label: '多选列'
    },
    config: {
      tag: 'CatColumn',
      tagHtml: 'CatMultiSelectColumnTag',
      catalog: 'col',
      sample: {
        $type: 'multiselcol',
        ename: '',
        cname: '多选列',
        width: '200',
        valueField: '',
        textField: '',
        locked: false,
        enable: true,
        readonly: false,
        hidden: false,
        copy: false,
        sort: false,
        blockName: '',
        columnTemplate: '',
        defaultValue: '',
        itemTemplate: '',
        sourceName: '',
      }
    }
  }


];
export default typeoptions;
