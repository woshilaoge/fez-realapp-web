import Pubmock from '../public/utils/mock';
/**
 * 首页各模块mock数据
 */
let mockData = {
    /**
     * 月至今,昨日
     */
    buttonradio: {
        API: {
            GET: {
                "errno": 200,
                "msg": "成功",
                "data": [{
                    name: '月至今',
                    value: '1'
                }, {
                    name: '昨日',
                    value: '2'
                }]
            }
        }
    },
    /**
     * GMV预测趋势
     */
    gmvforecast: {
        API: {
            GET: {
                "errno": 200,
                "msg": "成功",
                "data": {
                    "latitude": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                    "viewList": [{
                        "name": "每日GMV",
                        "data|30": [{
                            "value": "@int(22222,55555)",
                        }]
                    }, {
                        "name": "预测GMV",
                        "data|30": [{
                            "value": "@int(66666,99999)",
                        }]
                    }, {
                        "name": "预算GMV",
                        "data|30": [{
                            "value": "@int(55555,77777)",
                        }]
                    }]
                }
            }
        }
    },
    /**
     * 机票销售趋势分析
     */
    planesales: {
        API: {
            GET: {
                "errno": 200,
                "msg": "成功",
                "data": {
                    "latitude": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                    "viewList": [{
                        "name": "成交订单量",
                        "data|30": [{
                            "value": "@int(22222,55555)",
                        }]
                    }, {
                        "name": "销量",
                        "data|30": [{
                            "value": "@int(66666,99999)",
                        }]
                    }, {
                        "name": "GMV",
                        "data|30": [{
                            "value": "@int(55555,77777)",
                        }]
                    }]
                }
            }
        }
    },
    /**
     * 火车票销售趋势分析
     */
    trainsales: {
        API: {
            GET: {
                "errno": 200,
                "msg": "成功",
                "data": {
                    "latitude": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                    "viewList": [{
                        "name": "成交订单量",
                        "data|30": [{
                            "value": "@int(22222,55555)",
                        }]
                    }, {
                        "name": "销量",
                        "data|30": [{
                            "value": "@int(66666,99999)",
                        }]
                    }, {
                        "name": "GMV",
                        "data|30": [{
                            "value": "@int(55555,77777)",
                        }]
                    }]
                }
            }
        }
    },
    /**
     * 酒店销售趋势分析
     */
    hotelsales: {
        API: {
            GET: {
                "errno": 200,
                "msg": "成功",
                "data": {
                    "latitude": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                    "viewList": [{
                        "name": "成交订单量",
                        "data|30": [{
                            "value": "@int(22222,55555)",
                        }]
                    }, {
                        "name": "销量",
                        "data|30": [{
                            "value": "@int(66666,99999)",
                        }]
                    }, {
                        "name": "GMV",
                        "data|30": [{
                            "value": "@int(55555,77777)",
                        }]
                    }]
                }
            }
        }
    },
    /**
     * 加油卡销售趋势分析
     */
    cardsales: {
        API: {
            GET: {
                "errno": 200,
                "msg": "成功",
                "data": {
                    "latitude": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                    "viewList": [{
                        "name": "成交订单量",
                        "data|30": [{
                            "value": "@int(22222,55555)",
                        }]
                    }, {
                        "name": "销量",
                        "data|30": [{
                            "value": "@int(66666,99999)",
                        }]
                    }, {
                        "name": "GMV",
                        "data|30": [{
                            "value": "@int(55555,77777)",
                        }]
                    }]
                }
            }
        }
    },
    /**
     * 酒店业务销售分布-PC
     */
    hotelsalespc: {
        API: {
            GET: {
                "errno": 200,
                "msg": "成功",
                "data": {
                    "latitude": ['北京', '上海', '广州', '成都', '深圳', '杭州'],
                    "viewList": [{
                        "name": "经济/客栈",
                        "data|6": [{
                            "value": "@int(22222,55555)",
                        }]
                    }, {
                        "name": "三星/舒适",
                        "data|6": [{
                            "value": "@int(66666,99999)",
                        }]
                    }, {
                        "name": "四星/高档",
                        "data|6": [{
                            "value": "@int(55555,77777)",
                        }]
                    }, {
                        "name": "五星/豪华",
                        "data|6": [{
                            "value": "@int(55555,77777)",
                        }]
                    }, {
                        "name": "平均房价",
                        "data|6": [{
                            "value": "@int(55555,77777)",
                        }]
                    }]
                }
            },
        }
    },
    /**
     * 酒店业务销售分布-APP
     */
    hotelsalesapp: {
        API: {
            GET: {
                "errno": 200,
                "msg": "成功",
                "data": {
                    "latitude": ['北京', '上海', '广州', '成都', '深圳', '杭州'],
                    "viewList": [{
                        "name": "经济/客栈",
                        "data|6": [{
                            "value": "@int(22222,55555)",
                        }]
                    }, {
                        "name": "三星/舒适",
                        "data|6": [{
                            "value": "@int(66666,99999)",
                        }]
                    }, {
                        "name": "四星/高档",
                        "data|6": [{
                            "value": "@int(55555,77777)",
                        }]
                    }, {
                        "name": "五星/豪华",
                        "data|6": [{
                            "value": "@int(55555,77777)",
                        }]
                    }, {
                        "name": "平均房价",
                        "data|6": [{
                            "value": "@int(55555,77777)",
                        }]
                    }]
                }
            },
        }
    },
    /**
     * 酒店业务价格段分布-PC
     */
    hotelpricepc: {
        API: {
            GET: {
                "errno": 200,
                "msg": "成功",
                "data": {
                    "latitude": ['北京', '上海', '广州', '成都', '深圳', '杭州'],
                    "viewList": [{
                        "name": "150-300",
                        "data|6": [{
                            "value": "@int(22222,55555)",
                        }]
                    }, {
                        "name": "301-450",
                        "data|6": [{
                            "value": "@int(66666,99999)",
                        }]
                    }, {
                        "name": "451-600",
                        "data|6": [{
                            "value": "@int(55555,77777)",
                        }]
                    }, {
                        "name": "600以上",
                        "data|6": [{
                            "value": "@int(55555,77777)",
                        }]
                    }]
                }
            },
        }
    },
    /**
     * 酒店业务价格段分布-APP
     */
    hotelpriceapp: {
        API: {
            GET: {
                "errno": 200,
                "msg": "成功",
                "data": {
                    "latitude": ['北京', '上海', '广州', '成都', '深圳', '杭州'],
                    "viewList": [{
                        "name": "150-300",
                        "data|6": [{
                            "value": "@int(22222,55555)",
                        }]
                    }, {
                        "name": "301-450",
                        "data|6": [{
                            "value": "@int(66666,99999)",
                        }]
                    }, {
                        "name": "451-600",
                        "data|6": [{
                            "value": "@int(55555,77777)",
                        }]
                    }, {
                        "name": "600以上",
                        "data|6": [{
                            "value": "@int(55555,77777)",
                        }]
                    }]
                }
            },
        }
    },
    /**
     * 各部门用户占比
     */
    deptpie: {
        API: {
            GET: {
                "errno": 0,
                "msg": "成功",
                "data": {
                    "viewList": {
                        "name": "生活旅行业务部",
                        "data": [
                            { value: "@integer(20, 999)", name: '新用户数' },
                            { value: "@integer(20, 999)", name: '老用户数' }
                        ]
                    },
                    "viewChildList": [{
                        "name": "全部用户",
                        "data": [
                            { value: "@integer(20, 999)", name: '旅行业务部' },
                            { value: "@integer(20, 999)", name: '酒店业务部' },
                            { value: "@integer(20, 999)", name: '航空业务部' },
                            { value: "@integer(20, 999)", name: '其他业务部' }
                        ],
                    }, {
                        "name": "新用户数",
                        "data": [
                            { value: "@integer(20, 999)", name: '旅行业务部' },
                            { value: "@integer(20, 999)", name: '酒店业务部' },
                            { value: "@integer(20, 999)", name: '航空业务部' },
                            { value: "@integer(20, 999)", name: '其他业务部' }
                        ],
                    }, {
                        "name": "老用户数",
                        "data": [
                            { value: "@integer(20, 999)", name: '旅行业务部' },
                            { value: "@integer(20, 999)", name: '酒店业务部' },
                            { value: "@integer(20, 999)", name: '航空业务部' },
                            { value: "@integer(20, 999)", name: '其他业务部' }
                        ]
                    }]
                }
            }
        }
    },
    /**
     * 各部门用户占比
     */
    depttable: {
        API: {
            GET: {
                "errno": 0,
                "msg": "成功",
                "data": {
                    "titleName": [{
                        "data": "deptName",
                        "title": "部门"
                    }, {
                        "data": "newUser",
                        "title": "新用户数"
                    }, {
                        "data": "oldUser",
                        "title": "老用户数"
                    }, {
                        "data": "totalUser",
                        "title": "总用户数"
                    }, {
                        "title": '站外拉新用户数',
                        "data": 'zwNewUser'
                    }],
                    "titleList": [{
                        deptName: '生活旅行业务部',
                        deptId: 1234,
                        deptLev: 1,
                        newUser: "4,112",
                        oldUser: "3,112",
                        totalUser: "54,344",
                        zwNewUser: "34,334"
                    }, {
                        deptName: '旅行业务部',
                        deptId: 2345,
                        deptLev: 1,
                        newUser: "4,112",
                        oldUser: "3,112",
                        totalUser: "54,344",
                        zwNewUser: "34,334"
                    }, {
                        deptName: '酒店业务部',
                        deptId: 4674,
                        deptLev: 1,
                        newUser: "4,112",
                        oldUser: "3,112",
                        totalUser: "54,344",
                        zwNewUser: "34,334"
                    }, {
                        deptName: '航空业务部',
                        deptId: 34535,
                        newUser: "4,112",
                        oldUser: "3,112",
                        totalUser: "54,344",
                        zwNewUser: "34,344",
                        deptLev: 1,
                    }]
                }
            },
            GETDETAIL: {
                "errno": 0,
                "msg": "成功",
                "data": [{
                    deptName: '下钻部门1',
                    deptId: 1234,
                    deptLev: 2,
                    newUser: "142",
                    oldUser: "1,134",
                    totalUser: "24,344",
                    zwNewUser: "14,564"
                }, {
                    deptName: '下钻部门2',
                    deptId: 2345,
                    deptLev: 2,
                    newUser: "4,112",
                    oldUser: "3,112",
                    totalUser: "54,344",
                    zwNewUser: "34,334"
                }, {
                    deptName: '下钻部门3',
                    deptId: 4674,
                    deptLev: 2,
                    newUser: "4,112",
                    oldUser: "3,112",
                    totalUser: "54,344",
                    zwNewUser: "34,334"
                }, {
                    deptName: '下钻部门4',
                    deptId: 34535,
                    newUser: "4,112",
                    oldUser: "3,112",
                    totalUser: "54,344",
                    zwNewUser: "34,344",
                    deptLev: 2,
                }]
            },
        }
    },
    /**
     * 趋势表格
     */
    linktable: {
        API: {
            GET: {
                "errno": 200,
                "msg": "成功",
                "data": {
                    "titleName": [{
                        "data": "deptName",
                        "title": "渠道"
                    }, {
                        "data": "newUser",
                        "title": "昨日PV"
                    }, {
                        "data": "oldUser",
                        "title": "月至今日均"
                    }, {
                        "data": "totalUser",
                        "title": "日环比"
                    }, {
                        "title": '日同比',
                        "data": 'zwNewUser'
                    }],
                    "titleList": [{
                        deptName: '整体',
                        deptId: 1234,
                        deptLev: 1,
                        newUser: "@int(0,999)",
                        oldUser: "@int(0,999)",
                        totalUser: "@int(0,999)",
                        zwNewUser: "@int(0,999)"
                    }, {
                        deptName: 'PC',
                        deptId: 2345,
                        deptLev: 1,
                        newUser: "@int(0,999)",
                        oldUser: "@int(0,999)",
                        totalUser: "@int(0,999)",
                        zwNewUser: "@int(0,999)"
                    }, {
                        deptName: 'APP',
                        deptId: 2345,
                        deptLev: 1,
                        newUser: "@int(0,999)",
                        oldUser: "@int(0,999)",
                        totalUser: "@int(0,999)",
                        zwNewUser: "@int(0,999)"
                    }, {
                        deptName: '微信',
                        deptId: 2345,
                        deptLev: 1,
                        newUser: "@int(0,999)",
                        oldUser: "@int(0,999)",
                        totalUser: "@int(0,999)",
                        zwNewUser: "@int(0,999)"
                    }]
                }
            }
        }
    },
    /**
     * 趋势图
     */
    trendchart: {
        API: {
            GET: {
                errno: 0,
                msg: "成功",
                "data": {
                    "latitude": ['201511', '201512', '201601', '201602', '201603', '201604', '201605', '201606', '201607', '201608', '201609', '201610'],
                    "viewList": [{
                        "name": "新用户数",
                        "data|12": [{
                            "value": "@int(22222,55555)",
                        }]
                    }, {
                        "name": "老用户数",
                        "data|12": [{
                            "value": "@int(66666,99999)",
                        }]
                    }, {
                        "name": "总用户数",
                        "data|12": [{
                            "value": "@int(55555,77777)",
                        }]
                    }]
                }
            }
        }
    },
    /**
     * 趋势图
     */
    linechart: {
        API: {
            GET: {
                errno: 0,
                msg: "成功",
                detail: null,
                data: [{
                    indexDim: "ZFNUM",
                    dimDesc: "POP支付订单量",
                    trends: [{
                        date: "2017-04-25",
                        sum: 0,
                        yAxis: [
                            93,
                            27,
                            14,
                            16,
                            9,
                            10,
                            32,
                            '@int(32,99)',
                            99,
                            205,
                            247,
                            231,
                            178,
                            187,
                            187,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    }, {
                        date: "2017-04-24",
                        sum: 0,
                        yAxis: [
                            5,
                            3,
                            0,
                            2,
                            0,
                            0,
                            2,
                            10,
                            4,
                            19,
                            22,
                            51,
                            49,
                            420,
                            883,
                            "@int(400,1080)",
                            964,
                            830,
                            180,
                            247,
                            302,
                            296,
                            259,
                            141
                        ]
                    }, {
                        date: "2017-04-23",
                        sum: 0,
                        yAxis: [
                            5,
                            2,
                            1,
                            0,
                            0,
                            1,
                            0,
                            4,
                            6,
                            10,
                            11,
                            7,
                            13,
                            10,
                            6,
                            10,
                            11,
                            5,
                            3,
                            5,
                            15,
                            10,
                            15,
                            16
                        ]
                    }],
                    xAxis: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24
                    ]
                }, {
                    indexDim: "ZFSALES",
                    dimDesc: "POP支付订单金额",
                    trends: [{
                        date: "2017-04-25",
                        sum: 0,
                        yAxis: [
                            36186.5,
                            13468,
                            5083.7,
                            3224.6000000000004,
                            1819,
                            4659.2,
                            9726.95,
                            21257.749999999996,
                            48330.1,
                            124744.59999999999,
                            162101.15999999995,
                            125463.03999999998,
                            86710.70000000001,
                            88955.49000000002,
                            88187.79999999999,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    }, {
                        date: "2017-04-24",
                        sum: 0,
                        yAxis: [
                            2109,
                            1945,
                            0,
                            707,
                            0,
                            0,
                            278,
                            9991,
                            585.9,
                            8888.5,
                            20010,
                            13223.199999999999,
                            '@int(32,231662)',
                            231662.2199999999,
                            488170.01000000053,
                            517005.6200000005,
                            391100.5300000004,
                            370215.12000000034,
                            85762.11999999998,
                            103354.7,
                            131365.58999999994,
                            96511.31999999999,
                            93607.21,
                            66110.71000000002
                        ]
                    }, {
                        date: "2017-04-23",
                        sum: 0,
                        yAxis: [
                            3165,
                            1662,
                            389,
                            0,
                            0,
                            369,
                            0,
                            953.8,
                            3874,
                            4250,
                            3668,
                            3782,
                            7327.9,
                            5239.9,
                            2910,
                            6315,
                            3173,
                            2794,
                            1347,
                            1801,
                            7292.7,
                            5135,
                            9379.5,
                            10935
                        ]
                    }],
                    xAxis: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24
                    ]
                }, {
                    indexDim: "SDNUM",
                    dimDesc: "收订订单量",
                    trends: [{
                        date: "2017-04-25",
                        sum: 0,
                        yAxis: [
                            105,
                            32,
                            19,
                            18,
                            18,
                            16,
                            41,
                            67,
                            142,
                            259,
                            330,
                            300,
                            231,
                            255,
                            255,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    }, {
                        date: "2017-04-24",
                        sum: 0,
                        yAxis: [
                            105,
                            59,
                            25,
                            20,
                            18,
                            33,
                            59,
                            143,
                            196,
                            428,
                            721,
                            672,
                            692,
                            882,
                            970,
                            1211,
                            1089,
                            929,
                            213,
                            279,
                            343,
                            335,
                            302,
                            182
                        ]
                    }, {
                        date: "2017-04-23",
                        sum: 0,
                        yAxis: [
                            46,
                            28,
                            7,
                            9,
                            4,
                            9,
                            17,
                            26,
                            173,
                            166,
                            201,
                            185,
                            214,
                            165,
                            213,
                            205,
                            286,
                            296,
                            234,
                            239,
                            313,
                            313,
                            296,
                            204
                        ]
                    }],
                    xAxis: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24
                    ]
                }, {
                    indexDim: "SDSALES",
                    dimDesc: "收订优惠后金额",
                    trends: [{
                        date: "2017-04-25",
                        sum: 0,
                        yAxis: [
                            40274.3,
                            15623,
                            7130.5,
                            4322.6,
                            7540.9,
                            6149.2,
                            12449.85,
                            27559.850000000006,
                            '@int(32,168555)',
                            168555.39999999997,
                            237242.9599999999,
                            163090.92999999996,
                            117999.49999999999,
                            119802.79,
                            126158.69999999995,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    }, {
                        date: "2017-04-24",
                        sum: 0,
                        yAxis: [
                            75401.5,
                            33856,
                            10471.8,
                            5388.6,
                            6350.099999999999,
                            7627.399999999999,
                            23743.3,
                            80232.49999999999,
                            100840.29999999999,
                            249170.39999999988,
                            473252.9000000004,
                            328418.6,
                            357903.0200000001,
                            547193.5200000006,
                            565247.6700000007,
                            600859.8600000007,
                            462075.7100000002,
                            466735.70000000065,
                            99703.27999999994,
                            114668.19999999994,
                            147421.68999999992,
                            115808.11999999994,
                            108838.80999999997,
                            99481.06999999998
                        ]
                    }, {
                        date: "2017-04-23",
                        sum: 0,
                        yAxis: [
                            14822.5,
                            9298,
                            2115,
                            1773,
                            1847,
                            1165,
                            3416.9,
                            19066.8,
                            70725.09999999999,
                            68175.5,
                            83578.6,
                            76333.29999999999,
                            88592.49999999999,
                            75707.5,
                            113945.2,
                            98594.8,
                            132669.29999999996,
                            140603.30000000002,
                            121188.4,
                            110315.40000000001,
                            129616.8,
                            158794.79999999996,
                            132374.4,
                            89652.6
                        ]
                    }],
                    xAxis: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24
                    ]
                }]
            }
        }
    },
    /**
     * 搜索条件初始化
     */
    search: {
        API: {
            GETDEPT: {
                "errno": 200,
                "msg": "成功",
                "data": [{ "name": "电脑办公业务部", "id": 30 }]
            },
            GETERP: {
                "errno": 200,
                "msg": "成功",
                "data": [
                    { "name": "BIANCHAOCHENG", "id": "BIANCHAOCHENG" },
                    { "name": "BJCAOYONGPENG", "id": "BIANCHAOCHENG" },
                    { "name": "BJDUFENG", "id":"BJDUFENG" },
                    { "name": "BJFANGYONG", "id": "BJFANGYONG" },
                    { "name": "BJLINMING", "id": "BJLINMING" }
                ]
            },
            GETDEPT: {
                "errno": 200,
                "msg": "成功",
                "data": [{ "name": "电脑办公业务部", "id": 30 }]
            },
            GETTYPE: {
                "errno": 200,
                "msg": "成功",
                "data": [
                    { "name": "自营", "id": "1" },
                    { "name": "POP", "id": "2" }
                ]
            },
            GETCHANNEL: {
                "errno": 200,
                "msg": "成功",
                "data": [
                    { "name": "京东商城", "id": "1" },
                    { "name": "微信和手Q", "id": "3" },
                    { "name": "易迅", "id": "2" }
                ]
            },
            GETTERM: {
                "errno": 200,
                "msg": "成功",
                "data|2": [
                    { "name": '@pick(["微信", "手Q", "浏览器", "APP", "M"])', "id": '@pick(["12", "31", "32", "33", "21"])' }
                ]
            }
        }
    }
};

export {
    Pubmock as Method,
    mockData as CONF
};