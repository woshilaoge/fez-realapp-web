import Q from 'q';

import CONF from '../../../conf';
import { formatMoney, formatY, formatP } from '../../../../public/utils/format';


let Api = CONF.MOCK(true, ['table']);

const M = CONF['table'];
/**
 * [图标初始配置]
 */
let table = {
    columns: [{
        title: '日期',
        key: 'rq',
        width: 115
    }, {
        title: '收订订单量',
        align: 'right',
        key: 'sdddl'
    }, {
        title: '收订优惠后金额',
        align: 'right',
        key: 'sdyhhje',
        width: '15%'
    }, {
        title: '自营出库订单量',
        align: 'right',
        key: 'zyckddl',
        width: '15%'
    }, {
        title: '自营出库订单金额',
        align: 'right',
        key: 'zyckddje',
        width: '15%'
    }, {
        title: 'POP支付订单量',
        align: 'right',
        key: 'popzfddl',
        width: '15%'
    }, {
        title: 'POP支付订单金额',
        align: 'right',
        key: 'popzfddje',
        width: '16%'
    }],
    data: []
};

const formatWarn = function(val) {
    if (!val) {
        return '-'
    }
    return `<span style="color:#${val<0?'f54545':'0f990f'}">${formatP(val)}</span>`;
};

/**
 * [加工 接口返回的原始数据]
 * @param  data [原始数据]
 * @return  [格式化后数据]
 */
const formatResult = (data) => {
    table.data = [];
    /**
     * 转化表格数据
     * @sdSumOfNum      收订订单量
     * @sdSumOfSales    收订优惠后金额
     * @ckSumOfNum      自营出库订单量
     * @ckSumOfSales    自营出库订单金额
     * @payedSumOfNum   POP支付订单量
     * @payedSumOfSales POP支付订单金额
     */
    data.tables.forEach(function(obj) {
        table.data.push({
            'rq': obj.date,
            'sdddl': obj.sdSumOfNum,
            'sdyhhje': formatMoney(obj.sdSumOfSales, 2),
            'zyckddl': obj.ckSumOfNum,
            'zyckddje': formatMoney(obj.ckSumOfSales),
            'popzfddl': obj.payedSumOfNum,
            'popzfddje': formatMoney(obj.payedSumOfSales, 2),
        });
    });
    /**
     * 转化表格数据
     * @ratioOfSdNum      收订订单量
     * @ratioOfSdSales    收订优惠后金额
     * @ratioOfCkNum      自营出库订单量
     * @ratioOfCkSales    自营出库订单金额
     * @ratioOfPayNum     POP支付订单量
     * @ratioOfPaySales   POP支付订单金额
     */
    data.ratios.forEach(function(obj) {
        table.data.push({
            'rq': obj.desc,
            'sdddl': formatWarn(obj.ratioOfSdNum),
            'sdyhhje': formatWarn(obj.ratioOfSdSales),
            'zyckddl': formatWarn(obj.ratioOfCkNum),
            'zyckddje': formatWarn(obj.ratioOfCkSales),
            'popzfddl': formatWarn(obj.ratioOfPayNum),
            'popzfddje': formatWarn(obj.ratioOfPaySales),
        });
    });



    return table;
};


export default {
    get: (params = {}) => {

        return Q.Promise((resolve, reject) => {
            Api.get(M['API']['GET'], params).then((data) => {

                const moduleData = formatResult(data);

                let rtnData = {
                    // moduleName: M['NAME'],
                    moduleName: '实时概况（单位：万）',
                    moduleIcon: M['ICON'],
                    moduleToolTip: M['TOOLTIP'],
                    moduleData: moduleData,
                    moduleEmit: data.segments //柱状图数据
                }

                resolve(rtnData);
            });
        });
    }
}
