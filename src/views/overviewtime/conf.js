/**
 * 引入平台配置
 */
let CONF = {};

/* @if MOCK */
import * as mock from './mock';
CONF.mock = mock;
/* @endif */

const PUBCONF = require('../public/conf');
/*====================================以上为公共代码，不需要修改=======================================*/
/**
 * 页面级别 PAGEDEBUG 开关，
 * 当为false时，子模块DEBUG 不再生效
 * @type {boolean}
 */
CONF.PAGEDEBUG = true;
/**
 * 各模块配置，url、icon、name等
 * @type Object
 */
const MODULECONF = {
    'buttonradio': {
        NAME: '月至今，昨日',
        ICON: 'fa fa-line-chart',
        TOOLTIP: 'GMV预测趋势tips',
        API: {
            GET: '/analysis/index?module=1'
        }
    },
    'gmvforecast': {
        NAME: 'GMV预测趋势',
        ICON: 'fa fa-line-chart',
        TOOLTIP: 'GMV预测趋势tips',
        API: {
            GET: '/analysis/index?module=1'
        }
    },
    'planesales': {
        NAME: '机票销售趋势分析',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '在所选择的条件下，用户在所选品牌的京东第一单距所选月份的年限分布',
        API: {
            GET: '/analysis/index?module=2'
        }
    },
    'trainsales': {
        NAME: '火车票销售趋势分析',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '在所选择的条件下，用户的性别分布情况',
        API: {
            GET: '/analysis/index?module=3'
        }
    },
    'hotelsales': {
        NAME: '酒店销售趋势分析',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '在所选择的条件下，用户京东账号的级别分布情况',
        API: {
            GET: '/analysis/index?module=4'
        }
    },
    'cardsales': {
        NAME: '加油卡销售趋势分析',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '在所选择的条件下，新老用户的占比情况；<br>' +
            '<b>站内新用户</b>：在统计期内，该品类下品牌的有效订单用户中，用户是历史上第一次购买这个品牌，但这不是用户在京东第一笔有效订单；<br>' +
            '<b>站外新用户</b>：指在统计期内，该品类下品牌的有效订单用户中，用户是历史上第一次购买这个品牌，且这是用户在京东历史上的第一笔有效订单；<br>' +
            '<b>老用户</b>：指在统计期内，该品类下品牌的有效订单用户中，用户不是历史第一次购买该品牌',
        API: {
            GET: '/analysis/constitute'
        }
    },
    'hotelsalespc': {
        NAME: '酒店业务销售分布-PC',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '在所选择的条件下，用户<b>常用收货地址</b>的分布情况；<br><b>东北</b>：辽宁，吉林，黑龙江<br><b>华北</b>：北京，天津，河北，山西，内蒙古<br><b>华东</b>：山东，江苏，安徽，浙江，福建，上海<br><b>华南</b>：广东，广西，海南<br><b>华中</b>：湖北，湖南，河南，江西<br><b>西北</b>：宁夏，新疆，青海，陕西，甘肃<br><b>西南</b>：四川，云南，贵州，西藏，重庆',
        API: {
            GET: '/analysis/index?module=5',
            GETRATIO: '/analysis/index?module=6'
        }
    },
    'hotelsalesapp': {
        NAME: '酒店业务销售分布-APP',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '按照一定的关联规则计算出品类之间的关联度，关联度越高表示这两个品类之间的相关性越高，取关联度最高的TOP10品类',
        API: {
            GET: '/analysis/categoryShip',
        }
    },
    'hotelpricepc': {
        NAME: '酒店业务价格段分布-PC',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '近3个月，近6个月，近1年，购买过所选品类下品牌两单及两单以上的用户数占总购买人数的百分比',
        API: {
            GET: '/analysis/index?module=7',
        }
    },

    'hotelpriceapp': {
        NAME: '酒店业务价格段分布-APP',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '在所选择的条件下，用户从第二单到最近一单的平均购买时长，累计到每个时长分段上的用户数占比',
        API: {
            GET: '/analysis/index?module=9',
        }
    },

    'deptpie': {
        NAME: '各部门用户占比',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '在所选择的条件下，用户在前推12个月中累计购买的总有效订单金额分布情况',
        API: {
            GET: '//analysis/index?module=8',
        }
    },

    'depttable': {
        NAME: '表格',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '在所选择的条件下，首单和第二单之间间隔时长的用户数占比分布',
        API: {
            GET: '/analysis/index?module=10',
            GETDETAIL: './analysis/index?module=10'
        }
    },
    'linktable': {
        NAME: '联动表格',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '在所选择的条件下，首单和第二单之间间隔时长的用户数占比分布',
        API: {
            GET: '/analysis/index?module=10',
            GETDETAIL: './analysis/index?module=10'
        }
    },
    'trendchart': {
        NAME: '首次回购时长分布',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '在所选择的条件下，首单和第二单之间间隔时长的用户数占比分布',
        API: {
            GET: '/analysis/index?module=10',
        }
    },
    'linechart': {
        NAME: '趋势图',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '趋势图',
        API: {
            GET: 'http://rubik.jddb.com/summary/trendSummary?endTime=1493827200000&deptId1=35&model=-1&status=-1&salesErp=bjzhengcongcong&interval=3600000',
        }
    },
    'search': {
        NAME: '搜索条件初始化',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '搜索条件初始化',
        API: {
            GETDEPT: 'http://rtdredis.jd.com/dept/searchLevelDept', //部门
            GETERP: 'http://rtdredis.jd.com/sales-q/queryErp',//销售员ERP
            GETTYPE: 'http://rtdredis.jd.com/sales-q/queryErp',//模式 POP、自营
            GETCHANNEL: 'http://rtdredis.jd.com/sales-q/queryErp',//渠道
            GETTERM: 'http://rtdredis.jd.com/sales-q/queryErp',//终端
        }
    },
};

export default Object.assign(CONF, Object.assign(MODULECONF, PUBCONF));
