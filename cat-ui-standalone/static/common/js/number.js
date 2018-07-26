(function($) {
  
function accDiv(arg1, arg2) {  
  
    var t1 = 0, t2 = 0, t3 = 0, r1, r2;  
  
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }  
  
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }  
  
    r1 = Number(arg1.toString().replace(".", ""))  
  
    r2 = Number(arg2.toString().replace(".", ""))  
  
    if (r2 == 0)  
        return 0;  
  
    var result = String(r1 / r2);  
  
    try { t3 = result.toString().split(".")[1].length } catch (e) { }  
  
    var index = t2 - t1 - t3;  
  
    if (index < 0) {  
        result = result.replace(".", "");  
  
        while (result.length <= Math.abs(index)) {  
            result = '0' + result;  
        }  
  
        var start = result.substring(0, result.length + index);  
        var end = result.substring(result.length + index, result.length);  
  
        result = start + '.' + end;  
  
        return Number(result);  
    }  
    else if (index > 0) {  
        result = result.replace(".", "");  
  
        while (result.length <= Math.abs(index)) {  
            result += '0';  
        }  
        return Number(result);  
    }  
    else return Number(result.replace(".", ""));  
  
}  
  
  
//给Number类型增加一个div方法，调用起来更加方便。  
  
Number.prototype.div = function (arg) {  
    /// <summary>  
    ///     除法  
    /// </summary>  
    return accDiv(this, arg);  
  
}  
function accMul(arg1, arg2) {  
  
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();  
  
    try { m += s1.split(".")[1].length } catch (e) { }  
  
    try { m += s2.split(".")[1].length } catch (e) { }  
  
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)  
  
}  
  
Number.prototype.mul = function (arg) {  
    /// <summary>  
    ///     乘法  
    /// </summary>  
    return accMul(arg, this);  
  
}  
  
function accAdd(arg1, arg2) {  
  
    var r1, r2, m, c;  
  
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }  
  
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }  
  
    c = Math.abs(r1 - r2);  
    m = Math.pow(10, Math.max(r1, r2))  
    if (c > 0) {  
        var cm = Math.pow(10, c);  
        if (r1 > r2) {  
            arg1 = Number(arg1.toString().replace(".", ""));  
            arg2 = Number(arg2.toString().replace(".", "")) * cm;  
        }  
        else {  
            arg1 = Number(arg1.toString().replace(".", "")) * cm;  
            arg2 = Number(arg2.toString().replace(".", ""));  
        }  
    }  
    else {  
        arg1 = Number(arg1.toString().replace(".", ""));  
        arg2 = Number(arg2.toString().replace(".", ""));  
    }  
    return (arg1 + arg2) / m  
  
}  
  
Number.prototype.add = function (arg) {  
    /// <summary>  
    ///     加法  
    /// </summary>  
    return accAdd(arg, this);  
  
}  

})(window.jQuery);