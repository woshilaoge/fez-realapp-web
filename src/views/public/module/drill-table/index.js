import Q from 'q';

import CONF from '../../../conf';

/* @if MOCK */
// const MockModule = ['userarea']; //需要Mock数据的模块名称
/* @endif */
let Api = CONF.MOCK(true, ['buyback']);
/**
 * [图标初始配置]
 */
let echartOpt = {
    tooltip: {
        trigger: 'item',
        formatter: function(data) {
            return data.seriesName + '<br>' + data.name + " : " + (data.value ? Number(data.value).toFixed(2) + ' %' : (data.value == 0 ? '0 %' : '-'));
        }
    },
    visualMap: {
        //type: 'piecewise',
        type: 'continuous',
        min: 0,
        itemSymbol: "rect",
        text: ['高', '低'],
        color: ['#6664EC', '#F1F1FD'],
        realtime: false,
        orient: 'horizontal',
        calculable: false,
        padding: [0, 20],
        splitNumber: 4,
        itemWidth: 14,
        itemHeight: 120,
        max: 100,
        formatter: function(data) {
            return data ? Number(data).toFixed(2) + '%' : data;
        }
    },
    toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
        name: "",
        type: 'map',
        left: '20%',
        mapType: 'china',
        roam: false,
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: '#F9F9FE'
            },
            emphasis: {
                areaColor: '#86C899'
            }
        },
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        data: []
    }]
};




export default {
    get: (params = {}) => {
        const M = CONF['buyback'];
        return Q.Promise((resolve, reject) => {
            Api.get(M['API']['GET'], params).then((data) => {

                let table = {
                    columns: [{
                        title: '部门',
                        key: 'deptName',
                        render(row, column, index) {
                            let data = row[column.key],
                                html = '';
                            if (row.deptLev >= 3) {
                                html = data;
                            } else {
                                html = `<i class="ivu-icon ivu-icon-plus-round" @click="renderDeptDetail(row.deptId,row._index,column.key,'deptLev')"></i><a @click="">${data}</a>`;
                            }
                            return `<span class="dept-lev-${row.deptLev}">${html}</span>`;
                        }
                    }, {
                        title: '新用户数',
                        key: 'newUser'
                    }, {
                        title: '老用户数',
                        key: 'oldUser'
                    }, {
                        title: '总用户数',
                        key: 'totalUser'
                    }, {
                        title: '站外拉新用户数',
                        key: 'zwNewUser'
                    }],
                    data: [{
                        deptName: '生活旅行业务部',
                        deptId: 1234,
                        deptLev: 1,
                        newUser: 18,
                        oldUser: '2324',
                        totalUser: 3112,
                        zwNewUser: 343434
                    }, {
                        deptName: '旅行业务部',
                        deptId: 2345,
                        newUser: 18,
                        deptLev: 1,
                        oldUser: '2324',
                        totalUser: 3112,
                        zwNewUser: 343434
                    }, {
                        deptName: '酒店业务部',
                        newUser: 18,
                        deptId: 4674,
                        deptLev: 1,
                        oldUser: '2324',
                        totalUser: 3112,
                        zwNewUser: 343434
                    }, {
                        deptName: '航空业务部',
                        deptId: 34535,
                        newUser: 18,
                        oldUser: '2324',
                        deptLev: 1,
                        totalUser: 3112,
                        zwNewUser: 343434
                    }]
                };

                let rtnData = {
                    moduleName: M['NAME'],
                    moduleIcon: M['ICON'],
                    moduleToolTip: M['TOOLTIP'],
                    moduleData: table
                }

                resolve(rtnData);
            });
        });
    },
    getDetailByDeptId: (val) => {
        const M = CONF['buyback'];

        return Q.Promise((resolve, reject) => {
            Api.get(M['API']['GET'], "").then((data) => {
                console.log(val);
                let rtnData = [{
                    deptName: '插入数据1',
                    deptId: 7878,
                    deptLev: 2,
                    newUser: 18,
                    oldUser: '2324',
                    totalUser: 3112,
                    zwNewUser: 343434
                }, {
                    deptName: '插入数据2',
                    deptId: 89998,
                    deptLev: 2,
                    newUser: 18,
                    oldUser: '2324',
                    totalUser: 3112,
                    zwNewUser: 343434
                }];
                if(val){
                     rtnData = [{
                    deptName: '插入数据1',
                    deptId: 7878,
                    deptLev: 3,
                    newUser: 18,
                    oldUser: '2324',
                    totalUser: 3112,
                    zwNewUser: 343434
                }, {
                    deptName: '插入数据2',
                    deptId: 89998,
                    deptLev: 3,
                    newUser: 18,
                    oldUser: '2324',
                    totalUser: 3112,
                    zwNewUser: 343434
                }];
                }
                resolve(rtnData);
            });
        });
    }
}
