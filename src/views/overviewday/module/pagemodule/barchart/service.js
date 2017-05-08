import Q from 'q';

import CONF from '../../../conf';

import { LINE } from '../../../../public/utils/echarts-colors';
import { formatFloat, formatY } from '../../../../public/utils/format';

// let Api = CONF.MOCK(true, ['linechart']);
const M = CONF['barchart'];
/**
 * [图标初始配置]
 */
let echartOpt = {
    color: LINE,
    title: {
        text: "",
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(data) {
            if (data.length) {
                let _html = `${data[0].name}<br>`;
                data.forEach(function(obj) {
                    _html += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${obj.color}"></span>${obj.seriesName}: ${formatFloat(obj.value)}<br>`;
                });
                return _html;
            }
        }
    },
    grid: [{
        top: 60,
        left: 10,
        right: 10,
        bottom: 30,
        containLabel: true
    }],
    legend: {
        // x: 'right',
        right: 10,
        itemWidth: 16,
        itemHeight: 12,
        data: []
    },
    yAxis: [{
        type: 'value',
        splitLine: {
            lineStyle: {
                color: '#eaeaea'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#bbb'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: function(data) {
                return formatY(data);
            },
            textStyle: {
                color: '#6a6a6a',
                fontSize: 12,
            }
        }
    }, {
        type: 'value',
        splitLine: {
            show: false,
            lineStyle: {
                color: '#eaeaea'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#bbb'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: function(data) {
                return formatY(data);
            },
            textStyle: {
                color: '#6a6a6a',
                fontSize: 12,
            }
        }
    }],
    xAxis: {
        axisTick: {
            show: false
        },
        type: 'category',
        boundaryGap: true,
        splitLine: { show: false },
        axisLine: {
            lineStyle: {
                color: '#bbb'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#6a6a6a',
                fontSize: 12,
            }
        },
        data: []
    },
    series: []
};

/**
 * [加工 接口返回的原始数据]
 * @param  data [原始数据]
 * @return  [格式化后数据]
 */
const formatResult = (data) => {

    let moduleArr = [];

    data.forEach(function(obj) {
        const options = _.cloneDeep(echartOpt);
        let seriesArr1 = [],
            seriesArr2 = [],
            legend = [`0~${obj.point}时`, `${obj.point}~24时`];

        obj.segments.forEach(function(o) {
            seriesArr1.push(o.sum1);
            seriesArr2.push(o.sum2);
            options.xAxis.data.push(o.date);
        });

        options.series.push({
            barCategoryGap: "60%",
            type: 'bar',
            barMaxWidth: 80,
            stack: obj.dimDesc,
            data: seriesArr1,
            name: legend[0]
        });
        options.series.push({
            barGap: "60%",
            barMaxWidth: 80,
            type: 'bar',
            stack: obj.dimDesc,
            data: seriesArr2,
            name: legend[1]
        });
        options.legend.data = legend;

        moduleArr.push({
            moduleName: obj.dimDesc,
            moduleToolTip: obj.dimDesc,
            moduleData: options
        });
    });

    return moduleArr;
};

export default {
    get: (data = []) => {

        return Q.Promise((resolve, reject) => {
            // Api.get(M['API']['GET'], params).then((data) => {

            const moduleData = formatResult(data);

            let rtnData = {
                moduleName: M['NAME'],
                moduleIcon: M['ICON'],
                moduleToolTip: M['TOOLTIP'],
                moduleData: moduleData
            };
            resolve(rtnData);
            // });
        });
    }
}
