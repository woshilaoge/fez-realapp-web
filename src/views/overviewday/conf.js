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

    'table': {
        NAME: '表格数据加饼状图数据',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '在所选择的条件下，首单和第二单之间间隔时长的用户数占比分布',
        API: {
            GET: '/summary/previewSummary',
        }
    },
    'barchart': {
        NAME: '饼状图数据',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '',
        API: {
            GET: '',
        }
    },
    'search': {
        NAME: '搜索条件初始化',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '搜索条件初始化',
        API: {
            GETDEPT: '/dept/searchLevelDept', //部门
            GETERP: '/sales-q/queryErp', //销售员ERP
            GETTYPE: '/sales-q/queryErp2', //模式 POP、自营
            GETCHANNEL: '/sales-q/queryErp3', //渠道
            GETTERM: '/sales-q/queryErp4', //终端
        }
    },
    'deptcharts': {
        NAME: '下属部门分时对比所有情况',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '搜索条件初始化',
        API: {
            GET: '/summary/groupSummary?module=dept' //部门
        }
    },
    'channelcharts': {
        NAME: '各终端分时对比所有情况',
        ICON: 'fa fa-line-chart',
        TOOLTIP: '搜索条件初始化',
        API: {
            GET: '/summary/groupSummary?module=channel' //终端
        }
    },
};

export default Object.assign(CONF, Object.assign(MODULECONF, PUBCONF));
