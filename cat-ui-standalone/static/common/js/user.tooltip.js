var ToolTipUtil = function (el, msg) {
    var $el = el instanceof jQuery ? el : $(el);
    /**/
    var toolTip = $el.kendoTooltip({
        showAfter: 0,
        autoHide: false,
        showOn: "click",
        filter: ".erpcat-tooltip",
        //attributes: {kendoAddClass: 'p-tooltip'},
        //animation: false,
        animation: {
            open: {
                effects: "slideIn:right",
                duration: 0
            }
            /*,
             close: {
             effects: "slideIn:right",
             reverse: true,
             duration: 200
             }*/
        },
        beforeShow: function () {
            $("div[role='tooltip']").kendoAddClass("p-tooltip");
            //console.log("beforeShow I want do something!");
        },
        content: function () {
            //if ($el.context.innerText.trim() != "") {
            //onhrefclick($el.context.innerText.trim());
            //return msg;
            // if ($('#userId')[0].innerText.trim() != "")
            if ($('#userId'))
                return msg;
            return "";
            // else
            // return false;
            // }
        }, show: function (e) {
            $("div[role='tooltip']").kendoAddClass("p-tooltip");
            // console.log("let me see!");

        }, close: function (e) {
            // $el.click(true);
        },
        hide: function () {
            // 清除tooltip
            $el.removeAttr('data-role');
            this.destroy();
            return false;
        }
    }).data("kendoTooltip");

//  if ($('#userId')[0])
//if ($('#userId')[0].innerText)
// if (toolTip && toolTip.content) {
    //toolTip.hide();
    //toolTip.beforeShow;
    //$("div[role='tooltip']").kendoAddClass("p-tooltip");
    if (el) {
        toolTip.show(el);
        toolTip.popup.element.addClass("p-tooltip");
        // el.click(false);
    }
    // $("div[role='tooltip']").sedata-auto-hide="false"
//}
};


var showUserInfo = function (postId, $td) {
    if ($td.data('kendoTooltip') instanceof kendo.ui.Tooltip) {
        return;
    }
    var info = new EiInfo();
    info.set('postId', postId);
    EiCommunicator.send("PMUserInfo", "getUserInfo", info, {
        onSuccess: function (eiInfo) {
            if (eiInfo.getBlock('result') != null) {
                var datas = eiInfo.getBlock('result').getMappedRows();
                if (datas.length > 0) {
                    if (datas[0]["userName"] == null)
                        return false;
//var a = $('#userInfo-template');
//a.html("");
                    var contactInfo = ((datas[0]["telPhone"] || '').trim() == '' || (datas[0]["telPhone"] || '').trim() == (datas[0]["mobilePhone"] || '').trim() ) ? datas[0]["mobilePhone"] || '' : (datas[0]["telPhone"]||'') + " " + (datas[0]["mobilePhone"]||'');
                    var innerhtml = "";
                    innerhtml += '<li>';
                    innerhtml += '<div class="info-title"> ';
                    innerhtml += '<span id="userCname" class="user-name">' + (datas[0]["userName"] || '');
                    innerhtml += '</span>';
                    innerhtml += '<span class="information">工号:</span> <span id="userId" class="detail-info">' + (datas[0]["userId"] || '');
                    innerhtml += '</span>&nbsp;';
                    innerhtml += '<span class="information">区域:</span> <span id="area" class="detail-info">' + (datas[0]["areaId"] || '');
                    innerhtml += '</span>';
                    innerhtml += '</div>';
                    innerhtml += '</li>';
                    innerhtml += '<li>';
                    innerhtml += '<div>';
                    innerhtml += '<span class="information">岗号:</span> <span id="job" class="detail-info">' + (datas[0]["postId"] || '');
                    innerhtml += '</span>';
                    innerhtml += '</div>';
                    innerhtml += '</li>';
                    innerhtml += '<li>';
                    innerhtml += '<div>';
                    innerhtml += '<span class="information">部门:</span> <span id="dept" class="detail-info">' + ((datas[0]["deptId"]||'')  + " " + (datas[0]["deptName"] || ''));
                    innerhtml += '</span>';
                    innerhtml += '</div>';
                    innerhtml += '</li>';
                    innerhtml += '<li>';
                    innerhtml += '<div>';
                    innerhtml += '<span class="information">领用账套:</span> <span id="ddBill" class="detail-info">' + ((datas[0]["drawBillTo"]||'') + " " + (datas[0]["drawBillName"] || ''));
                    innerhtml += '</span>';
                    innerhtml += '</div>';
                    innerhtml += '</li>';
                    innerhtml += '<li>';
                    innerhtml += '<div>';
                    innerhtml += '<span class="information">采购账套:</span> <span id="purBill" class="detail-info">' + ((datas[0]["purBillTo"]||'')  + " " + (datas[0]["purBillName"] || ''));
                    innerhtml += '</span>';
                    innerhtml += '</div>';
                    innerhtml += '</li>';
                    innerhtml += '<li>';
                    innerhtml += '<div>';
                    innerhtml += '<span class="information i-last">采购组织:</span> <span id="purOrg" class="detail-info">' + (( datas[0]["purOrgId"]||'') + " " + (datas[0]["purOrgName"] || ''));
                    innerhtml += '</span>';
                    innerhtml += '</div>';
                    innerhtml += '</li>';
                    innerhtml += '<li class="divider"></li>';
                    innerhtml += '<li>';
                    innerhtml += '<div>';
                    innerhtml += '<span class="information i-first">联系方式:</span> <span id="mobilePhone" class="detail-info">' + contactInfo;
                    innerhtml += '</span>';
                    innerhtml += '</div>';
                    innerhtml += '</li>';
                    innerhtml += '<li>';
                    innerhtml += '<div>';
                    innerhtml += '<span class="information">邮件:</span> <span id="email" class="detail-info">' + (datas[0]["email"] || '');
                    innerhtml += '</span>';
                    innerhtml += '</span>';
                    innerhtml += '</div>';
                    innerhtml += '</li>';
                    innerhtml += '<li>';
                    innerhtml += '<div>';
                    innerhtml += '<span class="information">地址:</span> <span id="address" class="detail-info">' + (datas[0]["address"] || '');
                    innerhtml += '</span>';
                    innerhtml += '</div>';
                    innerhtml += '</li>';
//a.html(innerhtml);
                    ToolTipUtil($td, innerhtml);
                }

            }
        },
        onFail: function (eiInfo) {
// 发生异常
            console.log(eiInfo);
        }
    });
}