const RT = '\n';
const gridevent =
{
    loadComplete: {
      title: 'EFGrid渲染成功的回调事件',
      func:
           '/** ' + RT
          +' * EFGrid渲染成功的回调事件' + RT
          +' */' + RT
          +'loadComplete: function (grid /* kendo.ui.Grid */) { ' + RT
          +'  #gridbutton#' + RT
          +'  // 单击数据行事件处理' + RT
          +'  grid.element.on("click", "tr[role=row]", function (e) {' + RT
          +'      // 列头的checkbox点击处理，禁止向tr冒泡' + RT
          +'      var model = grid.dataItem($(this)); // 通过Grid的API获取行数据，kendo.data.Model' + RT
          +'      var rowNo = $(this).index(); // jQuery的方法，获取tr在table中的行号' + RT
          +'      var newBlock = grid.model2EiBlock(model);' + RT
          +'      var block = new EiBlock(newBlock.getBlockMeta());' + RT
          +'      block.addRow(newBlock.getRows()[0]);' + RT
          +'  });' + RT
          +' ' + RT
          +'  // 勾选一行的事件' + RT
          +'  grid.element.on("click", "input.check-one", function (e) {' + RT
          +'      // e.stopPropagation(); // 阻止勾选' + RT
          +'      var rowNo = $(this).closest("tr").index(); // jQuery的方法，获取tr在table中的行号' + RT
          +'      var action = $(this).prop("checked") ? "勾选" : "取消勾选";' + RT
          +'  });' + RT
          +' ' + RT
          +'  // 勾选全部的事件' + RT
          +'  grid.element.on("click", "input.check-all", function (e) {' + RT
          +'      // 会触发每一行的勾选事件' + RT
          +'      var action = $(this).prop("checked") ? "全部勾选" : "取消全部勾选";' + RT
          +'  });' + RT
          +' ' + RT
          +'// 互斥勾选，只能选中单行' + RT
          +'// grid.element.on("click", "input.check-one", function (e) {' + RT
          +'//     e.stopPropagation();' + RT
          +'//' + RT
          +'//     // TODO: 在事件外面写' + RT
          +'//     grid.element.find("input.check-all").prop("disabled", true);' + RT
          +'//' + RT
          +'//     grid.element.find("input.check-one").prop("disabled", true);' + RT
          +'//' + RT
          +'//     var rowNo = $(this).closest("tr").index(); // jQuery的方法，获取tr在table中的行号' + RT
          +'//     var action = $(this).prop("checked") ? "勾选" : "取消勾选";' + RT
          +'//' + RT
          +'//     alert(action + "了第[" + rowNo + "]行");' + RT
          +'// });' + RT
          +' ' + RT
          +'}'
    },
    page: {
      title: '翻页事件，点翻页按钮，输入页数跳转时触发',
      func:
           '/**' + RT
          +' * 翻页事件，点翻页按钮，输入页数跳转时触发' + RT
          +' * @param e 事件对象' + RT
          +' * e.sender Grid对象' + RT
          +' * e.page 期望翻到的页数' + RT
          +' */' + RT
          +'page: function (e) {' + RT
          +'  // e.preventDefault(); // 禁止翻页' + RT
          +'  // console.log("翻页" + e.page);' + RT
          +'}'
    },
    beforeAdd:{
      title: 'EFGrid新增行之前触发的事件，可以根据业务逻辑控制是否进行新增',
      func:
           '/**' + RT
          +' * EFGrid新增行之前触发的事件，可以根据业务逻辑控制是否进行新增' + RT
          +' * @param e 事件对象' + RT
          +' * e.sender Grid对象' + RT
          +' */' + RT
          +'beforeAdd: function (e) {' + RT
          +'    var logic = false;' + RT
          +'    if (logic) { // 通过业务逻辑判断, 控制是否进行新增' + RT
          +'        // 不会再新增' + RT
          +'        // e.preventDefault();' + RT
          +'    }' + RT
          +'    console.log("beforeAdd");' + RT
          +'}'
    },
    onAdd: {
      title: 'EFGrid新增行时触发的事件，此时数据行tr元素还未渲染',
      func:
          '/**' + RT
         +' * EFGrid新增行时触发的事件，此时数据行tr元素还未渲染' + RT
         +' * @param e 事件对象' + RT
         +' * e.sender Grid对象' + RT
         +' * e.preventDefault 不会触发dataBound，不渲染tr' + RT
         +' * e.index 插入的行号' + RT
         +' * e.items 将要插入的数据行数组([Model,Model, ...])' + RT
         +' */' + RT
         +'onAdd: function (e) {' + RT
         +'    // 触发的时机在dataBinding' + RT
         +'    console.log("onAdd");' + RT
         +'    // 不能在这里操作新增行的DOM元素' + RT
         +'}'
    },
    afterAdd: {
      title: 'EFGrid新增后触发的事件，此时数据行tr元素已经渲染',
      func:
         '/**' + RT
        +' * EFGrid新增后触发的事件，此时数据行tr元素已经渲染' + RT
        +' * @param e 事件对象' + RT
        +' * e.sender Grid对象' + RT
        +' * e.preventDefault 不会触发dataBound，不渲染tr' + RT
        +' * e.index 插入的行号' + RT
        +' * e.items 将要插入的数据行数组([Model,Model, ...])' + RT
        +' */' + RT
        +'afterAdd: function (e) {' + RT
        +'    // 触发时机在dataBound之后' + RT
        +'    console.log("afterAdd");' + RT
        +' ' + RT
        +'    $.each(e.items, function (index, item) {' + RT
        +'        // var trIndex = index + e.index;' + RT
        +'        // 定制新增行tr的背景色' + RT
        +'        e.sender.element.find("tr[data-uid=" + item.uid + "]").css({' + RT
        +'            background: "#F00",' + RT
        +'            color: "yellow"' + RT
        +'        });' + RT
        +'    });' + RT
        +'}'
    },
    beforeEdit: {
      title: '勾选行后，点击单元格准备编辑时的事件',
      func:
        '/**' + RT
        +' * 勾选行后，点击单元格准备编辑时的事件' + RT
        +' * beforeEdit可以用于自定义单元格是否可以编辑，不要和列的readonly，enable混用' + RT
        +' * @param e 事件对象' + RT
        +' * e.sender Grid对象' + RT
        +' * e.container 单元格td jQuery对象' + RT
        +' * e.row 行号' + RT
        +' * e.col 列号(columns中的列配置信息数组中的column对象的index)' + RT
        +' * e.model 行数据对象 kendo.data.Model' + RT
        +' * e.field 列英文名' + RT
        +' * e.preventDefault 禁止编辑' + RT
        +' */' + RT
        +'beforeEdit: function (e) {' + RT
        +'    console.log("正准备编辑第" + e.row + "行数据");' + RT
        +'    if (e.field === "company_name") {' + RT
        +'        // 判断单元格 field 禁止编辑' + RT
        +'        // e.preventDefault();' + RT
        +'    }' + RT
        +'    // e.model.isNew() 判断当前行是不是新增的行' + RT
        +'}'
    },
    edit: {
      title: 'KendoGrid的原生事件，不建议和beforeEdit一起使用，也不建议直接使用',
      func:
         '/**' + RT
        +' * KendoGrid的原生事件，不建议和beforeEdit一起使用，也不建议直接使用' + RT
        +' * Td单元格已经根据editor，渲染为Editable, 不能阻止单元格进入编辑状态' + RT
        +' * @param e事件对象' + RT
        +' * e.sender Grid对象' + RT
        +' * e.container 单元格td jQuery对象' + RT
        +' * e.model 行数据对象 kendo.data.Model' + RT
        +' */' + RT
        +'edit: function (e) {' + RT
        +'    console.log("edit: Td渲染为Editable");' + RT
        +'}'
    },
    afterEdit: {
      title: '编辑结束，关闭单元格编辑状态时的事件',
      func:
          '/**' + RT
         +' * 编辑结束，关闭单元格编辑状态时的事件' + RT
         +' * TODO: 自定义的校验，阻止编辑其他的单元格' + RT
         +' * @param e 事件对象' + RT
         +' * * e.sender Grid对象' + RT
         +' * e.container 单元格td jQuery对象' + RT
         +' * e.row 行号' + RT
         +' * e.col 列号(columns中的列配置信息数组中的column对象的index)' + RT
         +' * e.model 行数据对象 kendo.data.Model' + RT
         +' * e.field 列英文名' + RT
         +' */' + RT
         +'afterEdit: function (e) {' + RT
         +'    if (e.model[e.field] === "104") {' + RT
         +'      //  e.preventDefault(); // 不关闭单元格' + RT
         +'    }' + RT
         +'    console.log("afterEdit");' + RT
         +'}'
    },
    onSave: {
      title: '点击Grid保存按钮时触发的事件',
      func:
         '/**' + RT
        +' * 点击Grid保存按钮时触发的事件' + RT
        +' * @param e 事件对象' + RT
        +' * e.sender Grid对象' + RT
        +' */' + RT
        +'onSave: function (e) {' + RT
        +'    // e.preventDefault();  不向后台保存' + RT
        +'    console.log("onSave");' + RT
        +'}'
    },
    onCancel: {
      title: '点击Grid取消按钮时触发的事件',
      func:
         '/**' + RT
        +' * 点击Grid取消按钮时触发的事件' + RT
        +' * @param e 事件对象' + RT
        +' * e.sender Grid对象' + RT
        +' */' + RT
        +'onCancel: function (e) {' + RT
        +'    if (e.sender.getDataItems().length < 10) {' + RT
        +'       // e.preventDefault(); // 不执行取消' + RT
        +'    }' + RT
        +'    console.log("onCancel");' + RT
        +'}'
    },
    onDelete: {
      title: '点击Grid删除按钮时触发的事件',
      func:
        '/**' + RT
       +' * 点击Grid删除按钮时触发的事件' + RT
       +' * @param e 事件对象' + RT
       +' * e.sender Grid对象' + RT
       +' */' + RT
       +'onDelete: function (e) {' + RT
       +'    // e.preventDefault(); // 不执行删除' + RT
       +'    console.log("onDelete");' + RT
       +'}'
    },
    onCheckRow: {
      title: '点击行首复选框，勾选行时触发的事件',
      func:
        '/**' + RT
       +' * 点击行首checkbox，勾选行时触发的事件' + RT
       +' * @param e     kendo的Event对象' + RT
       +' * e.sender     kendoGrid对象，resultGrid' + RT
       +' * e.fake       用于区分是手动点击的事件还是模拟的事件' + RT
       +' * e.checked    用于区分是勾选还是取消勾选' + RT
       +' * e.model      勾选或取消勾选的行数据，kendo.data.Model' + RT
       +' * e.row        当前行的行号' + RT
       +' * e.tr         行的tr,包括固定列和数据列 jquery对象' + RT
       +' */' + RT
       +'onCheckRow: function (e) {' + RT
       +'    if (!e.fake) { // 手动点击触发的事件' + RT
       +'        var grid = e.sender,' + RT
       +'            model = e.model,' + RT
       +'            $tr = e.tr,' + RT
       +'            row = e.row;' + RT
       +' ' + RT
       +'        if (model["company_name"] === "宝信软件") {' + RT
       +'            if (e.checked) {' + RT
       +'                console.log("勾选了第" + row + "行数据");' + RT
       +'                $tr.css({' + RT
       +'                    background: "red",' + RT
       +'                    color: "yellow"' + RT
       +'                });' + RT
       +'            } else {' + RT
       +'                $tr.css({' + RT
       +'                    background: "",' + RT
       +'                    color: ""' + RT
       +'                });' + RT
       +'            }' + RT
       +'        }' + RT
       +'    }' + RT
       +'}'
    },
    onCheckAllRows: {
      title: '点击表头复选框的回调; 会触发每行的onCheckRow的fake事件',
      func:
        '/**' + RT
       +' * 点击表头的勾选全部的checkbox的回调; 会触发每行的onCheckRow事件，事件是fake的' + RT
       +' * @param e     kendo的Event对象' + RT
       +' * e.sender     kendoGrid对象，resultGrid' + RT
       +' * e.fake       用于区分是手动点击的事件还是模拟的事件' + RT
       +' * e.checked    用于区分是勾选还是取消勾选' + RT
       +' */' + RT
       +'onCheckAllRows: function (e) {' + RT
       +'    var action = e.checked ? "全部勾选" : "取消全部勾选";' + RT
       +'    console.log(action + ", 当前页的记录数:" + e.sender.getDataItems().length);' + RT
       +'}'
    },
    onRowClick: {
      title: '单击数据行时触发的事件，注意编辑状态时不会触发',
      func:
        '/**' + RT
        +' * 单击数据行时触发的事件，注意编辑状态时不会触发' + RT
        +' * @param e' + RT
        +' * e.sender     kendoGrid对象，resultGrid' + RT
        +' * e.model      点击的行数据，kendo.data.Model' + RT
        +' * e.row        当前行的行号' + RT
        +' * e.tr         行的tr,包括固定列和数据列 jquery对象' + RT
        +' */' + RT
        +'onRowClick: function (e) {' + RT
        +'    if(e.event.target.type === \'checkbox\'){' + RT
        +'        return false;' + RT
        +'    }' + RT
        +'    console.log("onRowClick");' + RT
        +'}'
    },
    onCellClick: {
      title: '单击单元格时触发的事件，注意编辑状态时不会触发',
      func:
        '/**' + RT
       +' * 单击单元格时触发的事件，注意编辑状态时不会触发' + RT
       +' * @param e' + RT
       +' * e.sender     kendoGrid对象，resultGrid' + RT
       +' * e.model      点击的行数据，kendo.data.Model' + RT
       +' * e.row        当前行的行号' + RT
       +' * e.td         单元格td, jquery对象' + RT
       +' */' + RT
       +'onCellClick: function (e) {' + RT
       +'    console.log("onCellClick");' + RT
       +'}'
    },
    onRowDblClick: {
      title: '双击数据行时触发的事件，注意编辑状态时不会触发',
      func:
        '/**' + RT
       +' * 双击数据行时触发的事件，注意编辑状态时不会触发' + RT
       +' * @param e' + RT
       +' * e.sender     kendoGrid对象，resultGrid' + RT
       +' * e.model      双击的行数据，kendo.data.Model' + RT
       +' * e.row        当前行的行号' + RT
       +' * e.tr         行的tr,包括固定列和数据列 jquery对象' + RT
       +' */' + RT
       +'onRowDblClick: function (e) {' + RT
       +'    console.log("onRowDblClick");' + RT
       +'}'
    },
    onSuccess: {
      title: '数据ajax提交成功的回调',
      func:
        '/**' + RT
       +' * 数据ajax提交成功的回调' + RT
       +' * @param e' + RT
       +' * e.sender     kendoGrid对象，resultGrid' + RT
       +' * e.eiInfo     后台返回的EiInfo信息' + RT
       +' */' + RT
       +'onSuccess: function (e) {' + RT
       +'    // e.preventDefault(); // 不显示notifications' + RT
       +'    console.log(e.eiInfo.getMsg());' + RT
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
       +'    // e.preventDefault(); // 不显示notifications' + RT
       +'    console.log(e.errorMsg || e.xhr.responseText);' + RT
       +'}'
    },
    dataBinding: {
      title: '数据绑定',
      func:
        '/**' + RT
       +' * 数据绑定，例：将要格式化的数字数据转成float，否则属性format无效' + RT
       +' */' + RT
       +'dataBinding: function (e) {' + RT
       +'    for (var i = 0, length = e.items.length; i < length; i++) {' + RT
       +'        e.items[i].price = parseFloat(e.items[i].price) || 0;' + RT
       +'    }' + RT
       +'}'
    }
};
export default gridevent;
