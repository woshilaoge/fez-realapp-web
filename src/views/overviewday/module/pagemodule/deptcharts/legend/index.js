import Q from 'q';

import CONF from '../../../../conf';

import { LINE } from '../../../../../public/utils/echarts-colors';
import { formatFloat, formatY } from '../../../../../public/utils/format';

const Api = CONF.MOCK(false, ['deptcharts']);

const M = CONF['deptcharts'];
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
            let _html = '';
            data.forEach(function(obj) {
                _html += obj.seriesName + ' : ' + formatFloat(obj.value, 0) + '<br>'
            });
            return _html;
        }
    },
    grid: [{
        // show: true,
        top: 60,
        left: 0,
        // right: 10,
        bottom: 40,
        // x: '10',
        // y: '60',
        width: '33%',
        containLabel: true
    }, {
        // show: true,
        top: 60,
        left: '38%',
        // right: 10,
        bottom: 40,
        width: '27%',
        // x2: '10',
        // y: '60',
        containLabel: true,
        tooltip: {
            trigger: 'item',
            formatter: '{a}: {c0}'
        }
    }, {
        // show: true,
        top: 60,
        // left: 10,
        // right: 10,
        bottom: 40,
        width: '30%',
        left: '66%',
        // y: '60',
        containLabel: true
    }],
    legend: {
        x: 'center',
        bottom: 5,
        itemWidth: 16,
        itemHeight: 12,
        data: []
    },
    yAxis: [{
        type: 'value',
        gridIndex: 0,
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
    }, {
        show: false,
        axisTick: {
            show: false
        },
        gridIndex: 1,
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
    }],
    xAxis: [{
        gridIndex: 0,
        axisTick: {
            show: false
        },
        type: 'category',
        boundaryGap: false,
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
    }, {
        show: false,
        gridIndex: 1,
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
    series: []
};
/**
 * [切换radio数据 缓存]
 */
let chartsArr = [];

let radioArr = [];

/**
 * [格式化返回数据]
 * @param  {[type]} data [原始数据]
 * @return {[type]}      [图表所需数据]
 */
const formatResult = function(data) {
    const options = _.cloneDeep(echartOpt);
    if (!data) {
        return options;
    }
    const pie = {
        name: 'pie',
        type: 'pie',
        center: ['85%', '50%'],
        radius: ['35%', '52%'],
        data: [],
        tooltip: {
            trigger: 'item',
            // position: 'inside',
            formatter: '{a}<br /> {b}: {c}({d}%)'
        },
        label: {
            normal: {
                position: 'outside', //outside/center
                formatter: '{b}\n{d}%',
            }
        },
        markPoint: {
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                        color: "#666",
                        // fontSize:14
                    },
                    formatter: '{b}'
                }
            },
            symbolSize: [200, 0], //通过设置，简介隐藏标注图形
            symbol: "rectangle",
            data: [{
                x: '85%',
                y: 10,
                "name": `下属部门${data.dimDesc}占比`
            }, {
                x: '50%',
                y: 10,
                "name": `下属部门${data.dimDesc}`
            }, {
                x: '20%',
                y: 10,
                "name": `下属部门分时${data.dimDesc}`
            }]
        }
        // labelLine: {
        //     normal: {
        //         length: 15,
        //         length2: 4,
        //     }
        // }
    };

    data.details.forEach(function(o) {

        //折线图
        options.series.push({
            name: o.name,
            smooth: true,
            symbolSize: 6,
            symbol: 'circle',
            type: 'line',
            data: o.yAxis
        });

        //柱状图
        options.series.push({
            name: o.name,
            xAxisIndex: 1,
            yAxisIndex: 1,
            // stack: 1,
            // barMaxWidth: 20,
            barGap: '100%',
            barCategoryGap: '50',
            // barWidth: 10,
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 3,
                    label: {
                        show: true,
                        // textStyle: {
                        //     color: "#666"
                        // },
                        position: "left",
                        formatter: "{a}"
                    }
                }
            },
            "markPoint": {
                "label": {
                    "normal": {
                        "show": true,
                        position: 'right',
                        "textStyle": {
                            "color": "#666"
                        },
                        formatter: '{c}'
                    }
                },
                "symbolSize": ["0", "10"],
                "symbol": "rectangle",
                "data": [{
                    "x": '66%',
                    "value": o.sum
                }]
            },
            data: [{
                value: o.sum
            }]
        });

        //饼图
        pie.data.push({
            value: o.sum,
            name: o.name
        });
        //legend
        options.legend.data.push(o.name);
    });
    options.series.push(pie);
    options.xAxis[0].data = data.xAxis;
    return options;
};

export default {
    /**
     * [从接口获取各终端分时对比情况的所有数据]
     * @param  {Object} params [查询参数]
     * @return {[type]}        [第一次初始化所需数据，包括单选组件所需参数]
     */
    get: (params = {}) => {

        return Q.Promise((resolve, reject) => {
            Api.get(M['API']['GET'], params).then((result) => {

                chartsArr = result;
                radioArr = [];
                result.forEach(function(obj) {
                    radioArr.push({
                        name: obj.dimDesc,
                        value: obj.dimDesc
                    });
                });
                /**
                 * 折线图 各终端分时 、柱状图 汇总、饼图 占比
                 */
                const options = formatResult(result[0]);
                let rtnData = {
                    moduleName: M['NAME'],
                    moduleIcon: M['ICON'],
                    moduleToolTip: M['TOOLTIP'],
                    moduleData: options,
                    moduleEmit: radioArr
                };
                resolve(rtnData);
            });
        });
    },
    /**
     * [切换点选组件，返回格式化后的数据，供图表展示]
     * @param  {[type]} val [单选组件选中值]
     * @return {[type]}     [图表options]
     */
    getByRadio(val) {

        return Q.Promise((resolve, reject) => {
            for (let obj of chartsArr) {
                if (val === obj.dimDesc) {

                    const options = formatResult(obj)
                    resolve(options);
                    break;
                }
            }
        });
    }
}
