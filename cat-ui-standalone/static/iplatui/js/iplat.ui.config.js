/**
 * IPLATUI组件的全局配置
 * @author 黄可
 */
(function ($) {
    var extend = $.extend;

    // 定义IPLAT模块，统一管理平台提供的方法
    var IPLAT = window.IPLAT || {};

    // KendoUI原生属性配置管理，业务JS内可自定义配置
    var IPLATUI = window.IPLATUI || {};

    extend(IPLATUI, {
        TOP_DOMAIN: "",
        APM_URL: "${IPLAT_APM_URL}",

        ES_SPAN: 60,
        ES_REFRESH: 5,

        Config: {
            Layout: { // 按钮的文字 图标显示控制
                TEXT: "1",
                ICON: "2",
                ICON_AND_TEXT: "3"
            },

            Timer: {
                dblclick: 300 // 判断双击的时间间隔
            },

            // 配置Notification提示
            Notification: {
                LEVEL: "INFO", // DEBUG WARNING ERROR
                AUTO_HIDE_AFTER: 6000, //配置消息时间
                SHOW_DETAIL_MSG: true, // 默认显示EiInfo中的detailMsg
                COPY: true,
                LOCK: true,
                APM: true,
                OFF: false
            },

            // 模态对话框
            Modal: {
                ALERT_MIN_WIDTH: 300, // 警告对话框配置的默认最小宽度 (>=300)
                CONFIRM_MIN_WIDTH: 350, // 确认对话框配置的默认最小宽度 (>=300)
                PROMPT_MIN_WIDTH: 350, // 输入对话框配置的默认最小宽度 (>=300)

                ALERT_TITLE: "警告", // 警告对话框配置的默认标题
                CONFIRM_TITLE: "确认", // 确认对话框配置的默认标题
                PROMPT_TITLE: "提示" // 输入对话框配置的默认标题
            },

            EiInfo: {
                version: "2.0"
            },

            EFPage: {
                fitHeightClass: "i-fit-height", // 高度适应到底部的元素的jQuery Class选择器
                topOffset: 200, // 滚动的偏移量，超出后将出现region导航和回到定位的按钮
                scrollTop: true, // 默认显示回到顶部
                regionNav: true, // 默认显示Region导航
                paddingBottom: 8 // EFPage页面内form的底部padding
            },
            EFRegion: {
                borderH: 2 // EFRegion的上下border的高度
            },

            EFGrid: {
                allowCopy: true,
                autoBind: true, // 是否主动进行查询
                // height: 350,
                resizable: true,
                sortable: false, // 默认是false，为true时，进行单列排序

                // sortable: {
                //     mutex: true
                //     mode: "multiple", // 默认是"single",只能单列排序，"multiple"时多列排序
                //     allowUnsort: false, // 默认是true，允许出现非排序状态；asc normal desc
                //     initialDirection: "asc"// 初始的排序顺序
                // },

                // selectable: false, // 禁止选中，行没有选中样式；不能使用grid的select接口
                selectable: true, // 单行选中，单元格的复制，此种场景没有列选功能
                // selectable: "multiple,row", // 多行选中，此种场景没有列选功能，表格无法在手机上滚动
                // selectable: "multiple,cell", // 多单元格选中，此种场景有、列选功能，表格无法在手机上滚动

                // editable: "inline", // 编辑权限 incell
                editable: true, // 编辑权限 incell
                headerAttributes: {
                    style: "text-align:center"
                },
                pageable: {
                    // refresh按钮 input跳转 翻页文字展示 在此配置
                    input: true,
                    numeric: false,
                    pageSize: 10, // DataSource设置会覆盖此处设置
                    pageSizes: [10, 20, 50, 100] // "all"] // 分页配置
                },

                // IPLAT平台封装的配置项，非kendoui标准属性
                autoDraw: "yes", // Grid中的列渲染模式
                checkMode: "multiple, cell", // 行的勾选模式
                needAuth: true, // 增删改按钮是否需要注册授权
                copyToAdd: true, // 行复制新增功能
                readonly: false, // Grid只读控制
                enable: true, // Grid的编辑，提交控制
                rowNo: false, // 是否显示行序号
                rowNoText: "序号", // 行序号的列头文本
                rowNoAlign: "center", // 行序号默认居中显示

                pagerPosition: "top", // 翻页条默认配置在上方，EFGrid上方工具条按钮较多时，应用根据具体情况将翻页条放置在底部
                showCount: false, // 后台是否查询总数

                columnWidth: 120,
                minColumnWidth: 50, // 列resize的最小值
                rowHeight: 24,

                exportGrid: true, // 默认导出当前页面的数据
                editHelper: false, // 勾选时，可编辑的单元格突出显示
                validateHelper: true, // 单元格编辑校验出错时，红框突出提示
                MAX_COUNT: 1000,  // pageSize < 0 MAX_COUNT = 1000
                QUERY_ALL: -999999// 查询所有记录
            },

            EFPopup: {
                filterPopupGrid: true, // 控制EFPopupColumn, EFPopupInput 弹出的Grid的列是否显示过滤条件
                showCount: false
            },

            EFTreeList: {},

            EFTab: {},

            EFSelect: {},

            EFDate: {
                format: "yyyy-MM-dd",
                culture: "zh-CN",
                animation: {
                    close: {
                        effects: "fadeOut zoom:out", //关闭时动画特效类型，多个特效用空格隔开。
                        duration: 400 //关闭时动画持续的时间，单位是毫秒。
                    },
                    open: {
                        effects: "fadeIn zoom:in",
                        duration: 400
                    }
                }
            },

            EFDateTime: extend({}, this.EFDate, {
                format: "yyyy-MM-dd HH:mm:ss"
            }),

            EFDateSpan: {
                extChar: ""
            },

            EFTree: {},

            EFWindow: {
                width: "80%", // 适合弹窗显示一个完整的页面 "1000", "80%", 1000都是可接受的值
                height: "80%",
                left: "10%",
                top: "10%",

                minWidth: "60%", // 适合显示局部的div内容
                minHeight: "60%",
                minLeft: "20%",
                minTop: "20%"
            },

            EFInput: {},

            EFAutoComplete: {}
        }
    });

    extend(window, {
        IPLAT: IPLAT,
        IPLATUI: IPLATUI
    });
})(jQuery);