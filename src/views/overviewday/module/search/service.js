import Q from 'q';

import CONF from '../../conf';

import { LINE } from '../../../public/utils/echarts-colors';
import { formatMoney, formatY } from '../../../public/utils/format';

let Api = CONF.MOCK(true, ['search']);

const M = CONF['search'];

/**
 * [FormatSelect 通用格式化函数]
 * @param {[Array]} data [格式化Select组件需要得数据]
 */
const FormatSelect = function(data) {
    return data.map(function(obj) {
        return {
            "label": obj.name,
            "value": obj.id
        }
    });
};

export default {
    /**
     * [页面查询条件初始化]
     * @return {[Array]} [数组，Q.all返回的数据]
     * Q.allSettled return [{state:'fulfilled',value:'返回数据'}]
     * 一级部门、模式、渠道 下拉框初始化
     */
    get: () => {

        return Q.Promise((resolve, reject) => {
            Q.allSettled([
                Api.get(M['API']['GETDEPT'], { "deptLev": 1 }),
                Api.get(M['API']['GETTYPE']),
                Api.get(M['API']['GETCHANNEL'])
            ]).then(function(results) {
                const moduletData = [
                    [],
                    [],
                    []
                ];
                results.forEach(function(result, idx) {
                    if (result.state === "fulfilled") {
                        moduletData[idx] = FormatSelect(result.value);
                    }
                });
                resolve(moduletData);
            });
        });
    },
    /**
     * [获取二级、三级部门数据]
     * @param  {Object} params [部门id、部门lev]
     * @return {[type]} [返回 下拉Select 组件所需数据]
     */
    getDeptCascader(params = {}) {

        return Q.Promise((resolve, reject) => {
            Api.get(M['API']['GETDEPT'], params).then((data) => {

                resolve(FormatSelect(data));
            });
        });
    },
    /**
     * [获取三级部门 对应的 销售员ERP数据]
     * @param  {Object} params [部门id]
     * @return {[type]} [返回 下拉Select 组件所需数据]
     */
    getErpCascader(id) {

        return Q.Promise((resolve, reject) => {
            Api.get(M['API']['GETERP'], id).then((data) => {

                resolve(data.map(function(obj) {
                    return {
                        "label": obj.name,
                        "value": obj.name
                    }
                }));
            });
        });
    },
    /**
     * [获取渠道对应的 终端数据]
     * @param  {Object} params [渠道id]
     * @return {[type]} [返回 下拉Select 组件所需数据]
     */
    getTermCascader(id) {

        return Q.Promise((resolve, reject) => {
            Api.get(M['API']['GETTERM'], {}).then((data) => {

                resolve(FormatSelect(data));
            });
        });
    }
}
