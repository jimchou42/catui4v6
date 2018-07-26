const RT = '\n';
const treeevent =
{
    loadComplete: {
      title: 'EFTree渲染成功的回调事件',
      func:
           '/** ' + RT
          +' * EFTree渲染成功的回调事件' + RT
          +' * @param options tree的配置项' + RT
          +' */' + RT
          +'loadComplete: function (options) { ' + RT
          +' ' + RT
          +'}'
    },
    select: {
      title: '选着树节点时触发的事件',
      func:
           '/**' + RT
          +' * 选着树节点时触发的事件，注意点击树 折叠/展开 的图标不会触发此事件' + RT
          +' * @param e 事件对象' + RT
          +' * e.sender     kendoTree对象, tree01Tree（EFTree的id + "Tree"）' + RT
          +' * e.node       点击的节点DOM元素' + RT
          +' */' + RT
          +'select: function (e) {' + RT
          +'  // e.sender === this 都是kendoTree对象' + RT
          +'  // dataItem方法，传入节点DOM对象，获取节点上的数据对象（kendo.data.Node' + RT
          +'  // 节点的数据对象包括 valueField, textField 等后台传过来的字段值' + RT
          +'  var nodeData = this.dataItem(e.node);' + RT
          +'  console.log("Selecting", e.node);' + RT
          +'}'
    },
    change: {
      title: '树节点选择变化后触发的事件',
      func:
           '/**' + RT
          +' * 树节点选择变化后触发的事件' + RT
          +' * @param e 事件对象' + RT
          +' * e.sender     kendoTree对象, tree01Tree（EFTree的id + "Tree"）' + RT
          +' * e.node       点击的节点DOM元素' + RT
          +' */' + RT
          +'change: function (e) {' + RT
          +'  // e.sender === this 都是kendoTree对象' + RT
          +'  // dataItem方法，传入节点DOM对象，获取节点上的数据对象（kendo.data.Node' + RT
          +'  // 节点的数据对象包括 valueField, textField 等后台传过来的字段值' + RT
          +'  var nodeData = this.dataItem(e.node);' + RT
          +'  console.log("Selection Changed", e.node);' + RT
          +'}'
    },
    expand: {
      title: '树节点展开时触发的事件',
      func:
           '/**' + RT
          +' * 树节点展开时触发的事件' + RT
          +' * @param e 事件对象' + RT
          +' * e.sender     kendoTree对象, tree01Tree（EFTree的id + "Tree"）' + RT
          +' * e.node       点击的节点DOM元素' + RT
          +' */' + RT
          +'expand: function (e) {' + RT
          +'  console.log("expand", e.node);' + RT
          +'}'
    },
    collapse: {
      title: '树节点折叠时触发的事件',
      func:
           '/**' + RT
          +' * 树节点折叠时触发的事件' + RT
          +' * @param e 事件对象' + RT
          +' * e.sender     kendoTree对象, tree01Tree（EFTree的id + "Tree"）' + RT
          +' * e.node       点击的节点DOM元素' + RT
          +' */' + RT
          +'collapse: function (e) {' + RT
          +'  console.log("collapse", e.node);' + RT
          +'}'
    },
    check: {
      title: '树节点复选框勾选时触发的事件，checkboxes: true时起效',
      func:
           '/**' + RT
          +' * 树节点复选框勾选时触发的事件，checkboxes: true时才起效' + RT
          +' * @param e 事件对象' + RT
          +' * e.sender     kendoTree对象, tree01Tree（EFTree的id + "Tree"）' + RT
          +' * e.node       点击的节点DOM元素' + RT
          +' */' + RT
          +'check: function (e) {' + RT
          +'  console.log("Checkbox changed", e.node);' + RT
          +'}'
    },
    navigate: {
      title: '键盘在树节点上导航时触发的事件',
      func:
           '/**' + RT
          +' * 键盘在树节点上导航时触发的事件' + RT
          +' * @param e 事件对象' + RT
          +' * e.sender     kendoTree对象, tree01Tree（EFTree的id + "Tree"）' + RT
          +' * e.node       点击的节点DOM元素' + RT
          +' */' + RT
          +'navigate: function (e) {' + RT
          +'  console.log("Navigate", e.node);' + RT
          +'}'
    },
    dragstart: {
      title: '开始拖拽事件，dragAndDrop: true时起效',
      func:
           '/**' + RT
          +' * 开始拖拽事件，只调用一次，dragAndDrop: true时起效' + RT
          +' * @param e 事件对象' + RT
          +' * e.sender      kendoTree对象, tree01Tree（EFTree的id + "Tree"）' + RT
          +' * e.sourceNode  被拖拽的节点' + RT
          +' */' + RT
          +'dragstart: function (e) {' + RT
          +'  console.log("Started dragging", e.sourceNode);' + RT
          +'}'
    },
    drag: {
      title: '拖拽过程事件，dragAndDrop: true时起效',
      func:
           '/**' + RT
          +' * 拖拽过程事件' + RT
          +' * @param e 事件对象' + RT
          +' * e.sender      endoTree对象, tree01Tree（EFTree的id + "Tree"）' + RT
          +' * e.sourceNode  被拖拽的节点' + RT
          +' */' + RT
          +'drag: function (e) {' + RT
          +'  console.log("Dragging", e.sourceNode);' + RT
          +'}'
    },
    drop: {
      title: '拖拽释放时触发的事件，dragAndDrop: true时起效',
      func:
           '/**' + RT
          +' * 拖拽释放时触发的事件' + RT
          +' * @param e 事件对象' + RT
          +' * e.sender      kendoTree对象, tree01Tree（EFTree的id + "Tree"）' + RT
          +' * e.sourceNode  被拖拽的节点' + RT
          +' * e.valid       拖拽是否有效（是否拖拽到树上其它节点）' + RT
          +' */' + RT
          +'drop: function (e) {' + RT
          +'  console.log("Dropped", e.sourceNode+"("+e.valid+")");' + RT
          +'}'
    },
    dragend: {
      title: '拖拽结束时触发的事件，dragAndDrop: true时起效',
      func:
           '/**' + RT
          +' * 拖拽结束时触发的事件，注意drop无效时不会触发' + RT
          +' * @param e 事件对象' + RT
          +' * e.sender           kendoTree对象, tree01Tree（EFTree的id + "Tree"）' + RT
          +' * e.sourceNode       被拖拽的节点' + RT
          +' * e.destinationNode：释放被拖拽节点的节点(新的父节点)' + RT
          +' * e.dropPosition：   释放被拖拽节点的位置 over, before, or after' + RT
          +' */' + RT
          +'dragend: function (e) {' + RT
          +'  console.log("Finished dragging", e.node);' + RT
          +'}'
    },
    query:{
      title: '初始化参数接口',
      func:
           '/**' + RT
          +' * 初始化参数接口' + RT
          +' * @param postEiInfo 查询提交的EiInfo' + RT
          +' * @param model 树节点对象' + RT
          +' */' + RT
          +'query: function (postEiInfo, model) {' + RT
          +'    if (model) {' + RT
          +'        console.log(model.text);' + RT
          +'    }' + RT
          +'}'
    },
    onSuccess: {
      title: '数据ajax提交成功的回调',
      func:
        '/**' + RT
        +' * 数据ajax提交成功的回调' + RT
        +' * @param e 事件对象' + RT
        +' * e.sender     kendoTree对象, tree01Tree（EFTree的id + "Tree"）' + RT
        +' * e.node       点击的节点DOM元素' + RT
       +' */' + RT
       +'onSuccess: function (e) {' + RT
       +'    console.log(e);' + RT
       +'}'
    },
    onFail: {
      title: '数据ajax提交失败的回调',
      func:
        '/**' + RT
       +' * 数据ajax提交失败的回调' + RT
       +' * @param e' + RT
       +' * e.sender     kendoGrid对象，resultGrid' + RT
       +' * e.errorMsg   后台返回的错误信息' + RT
       +' * e.xhr    ajax请求jqXHR对象' + RT
       +' */' + RT
       +'onFail: function (e) {' + RT
       +'    console.log(e);' + RT
       +'}'
    }
};
export default treeevent;
