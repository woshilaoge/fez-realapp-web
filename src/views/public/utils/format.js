export default {
    // formatMoney: function(mVal, iAccuracy) {
    //     var fTmp = 0.00; //临时变量
    //     var iFra = 0; //小数部分
    //     var iInt = 0; //整数部分
    //     var aBuf = new Array(); //输出缓存
    //     var bPositive = true; //保存正负值标记(true:正数)
    //     /**
    //      * 输出定长字符串，不够补0
    //      * <li>闭包函数</li>
    //      * @param int iVal 值
    //      * @param int iLen 输出的长度
    //      */
    //     function funZero(iVal, iLen) {
    //         var sTmp = iVal.toString();
    //         var sBuf = new Array();
    //         for (var i = 0, iLoop = iLen - sTmp.length; i < iLoop; i++)
    //             sBuf.push('0');
    //         sBuf.push(sTmp);
    //         return sBuf.join('');
    //     };
    //
    //     iAccuracy = iAccuracy || 2;
    //
    //     bPositive = (mVal >= 0); //取出正负号
    //     fTmp = (isNaN(fTmp = parseFloat(mVal))) ? 0 : Math.abs(fTmp); //强制转换为绝对值数浮点
    //     //所有内容用正数规则处理
    //     iInt = parseInt(fTmp, 10); //分离整数部分
    //     iFra = parseInt((fTmp - iInt) * Math.pow(10, iAccuracy) + 0.5, 10); //分离小数部分(四舍五入)
    //
    //     do {
    //         aBuf.unshift(funZero(iInt % 1000, 3));
    //     } while ((iInt = parseInt(iInt / 1000, 10)));
    //     aBuf[0] = parseInt(aBuf[0], 10).toString(); //最高段区去掉前导0
    //
    //     return (((bPositive) ? '' : '-') + aBuf.join(',') + ((0 === iFra) ? '' : '.' + funZero(iFra, iAccuracy)));
    //
    // },
    // /**
    //  * 将千分位格式的数字字符串转换为浮点数
    //  * @public
    //  * @param string sVal 数值字符串
    //  * @return float
    //  */
    // unformatMoney: function(sVal) {
    //     let fTmp = parseFloat(sVal.replace(/,/g, ''));
    //     return (isNaN(fTmp) ? 0 : fTmp);
    //
    // }
}

//格式化后台返回数字类型,
var formatFloat = function(src, pos) {
    try {
        //如果是空值或是null则返回--,
        if (src == null || src == "NULL" || src.length == 0) {
            return "-";
        }
        src += "";
        //如果是0直接返回0,
        if (src == "0")
            return "0";
        if (src.indexOf('E') != -1) src = new Number(src);
        //如果是数字包括负数则根据条件保留指定位数小数并添加千分符号,默认不保留小数
        var re = /^[-]?[0-9]+.?[0-9]*$/;
        if (!re.test(src)) {
            return src;
        } else {
            if (pos) {
                return ((parseFloat(src).toFixed(pos)).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,'));
            } else {
                return ((parseFloat(src).toFixed(0)).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,'));
            }
        }
    } catch (e) {
        //如果出错返回原值
        return src;
    }
}

//格式化 金额数值  value=123456789 isFixed=2 格式为 1.23亿
var formatMoney = function(value, isFixed) {
    if ((!value) && (value != 0)) {
        return "-";
    }

    function isFixedX(num) {
        if (isFixed || (isFixed == 0) || (isFixed == '0')) {
            return num.toFixed(Number(isFixed));
        }
        return num;
    }

    if (Math.abs(value) >= 100000000) {
        return ((value / 100000000) > 100) ? (formatFloat(value / 100000000, isFixed) + '亿') : (isFixedX(value / 100000000) + '亿');
    } else if (Math.abs(value) >= 10000) {
        return ((value / 10000) > 100) ? (formatFloat(value / 10000, isFixed) + '万') : (isFixedX(value / 10000) + '万');
    } else if (Math.abs(value) < 10000) {
        return (Math.abs(value) >= 100) ? formatFloat(isFixedX(value), isFixed) : isFixedX(value);
    } else return (value, isFixed);
}


//格式化 y轴数值
var formatY = function(value, isFixed) {
    function isFixedX(num) {
        if (isFixed || (isFixed == 0) || (isFixed == '0')) {
            return Number(num).toFixed(Number(isFixed));
        }
        return num;
    }

    function formatNumToY(num, flag) {
        function isInt(number) {
            return parseInt(number) == number;
        }

        function isFixedX(num) {
            if (flag || (flag == 0) || (flag == '0')) {
                try {
                    return num.toFixed(Number(flag));
                } catch (e) {
                    return num;
                }
            }
            return num;
        }

        if (Math.abs(num) >= 1000) {
            return isInt(num / 1000) ? num / 1000 + " 千" : isFixedX(num);
        } else if (Math.abs(num) >= 100) {
            return isInt(num / 100) ? num / 100 + " 百" : isFixedX(num);
        } else if (Math.abs(num) >= 10) {
            return isInt(num / 10) ? num / 10 + " 十" : isFixedX(num);
        } else {
            return isFixedX(num);
        }
    }

    if (Math.abs(value) >= 100000000) {
        return ((value / 100000000) > 100) ? (formatNumToY(value / 100000000, isFixed) + '亿') : (isFixedX(value / 100000000) + ' 亿');
    } else if (Math.abs(value) >= 10000) {
        return ((value / 10000) > 100) ? (formatNumToY(value / 10000, isFixed) + '万') : (isFixedX(value / 10000) + ' 万');
    } else if (Math.abs(value) < 10000) {
        return (Math.abs(value) >= 100) ? formatNumToY(value, isFixed) : isFixedX(value);
    } else return formatNumToY(value, isFixed);
}

var formatPerc = function(value, total, pos) {
    pos = pos || 2;
    return parseFloat(value / total * 100).toFixed(pos) + '%';
}
var formatP = function(value, pos) {
    pos = pos || 2;
    return value ? formatFloat(parseFloat(value * 100), pos) + '%' : value == 0 ? '0%' : value;
}

export {
    formatFloat,
    formatMoney,
    formatY,
    formatPerc,
    formatP
};
