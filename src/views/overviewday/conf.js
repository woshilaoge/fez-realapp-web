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
    'TITLECONF': {
        NAME: '总体概览按天查看', //表格数据加饼状图数据
        TOOLTIP: `<ol class="pop-info-list">  
                    <li><b>数据刷新频率：</b>当日数据每五分钟刷新一次，截止到次日凌晨1:00不再刷新前一日数据。</li>   
                    <li><b>PV：</b>所统计页面被浏览，即页面被加载完成的总次数。注：京东整站的PV，统计对象为PC端所有页面；各个部门PV，统计对象为PC端商品详情页。</li>   
                    <li><b>访次：</b>用户对所统计的页面的访问次数。目前是按用户登陆服务器的会话统计，一个会话统计为一次。注：京东整站的访次，统计对象为PC端所有页面；各个部门访次，统计对象为PC端商品详情页。</li>   
                    <li><b>收订商品件数：</b>在统计时间范围内，有效订单的商品件数。(剔除10万元以上未付款订单)</li>   
                    <li><b>收订订单量：</b>在统计时间范围内，有效订单的父单量。(剔除10万元以上未付款订单)。</li>    
                    <li><b>收订优惠前金额：</b>在统计时间范围内，有效订单的优惠前金额。(剔除10万元以上未付款订单)</li> 
                    <li><b>收订优惠后金额：</b>在统计时间范围内，有效订单的优惠后金额。(剔除10万元以上未付款订单)</li> 
                    <li><b>自营出库商品件数：</b>在统计时间范围内，已出库扫描的商品件数。</li>   
                    <li><b>自营出库订单量：</b>在统计时间范围内，已出库扫描的子订单数量。</li>   
                    <li><b>自营出库订单金额：</b>在统计时间范围内，已出库扫描订单的优惠后金额。</li>    
                    <li><b>POP支付商品件数：</b>在统计时间范围内，系统已确认付款的商品件数。</li>    
                    <li><b>POP支付订单量：</b>在统计时间范围内，系统已确认付款的子订单数量。</li>    
                    <li><b>POP支付订单金额：</b>在统计时间范围内，系统已确认付款订单的优惠后金额。</li>                             
                </ol>`,
    },
    'table': {
        NAME: '', //表格数据加饼状图数据
        ICON: '',
        TOOLTIP: '',
        API: {
            GET: '/summary/previewSummary',
        }
    },
    'barchart': {
        NAME: '饼状图数据',
        ICON: '',
        TOOLTIP: '',
        API: {
            GET: '',
        }
    },
    'search': {
        NAME: '搜索条件初始化',
        ICON: '',
        TOOLTIP: '',
        API: {
            GETDEPT: '/dept/selectDeptFormatted', //部门
            GETERP: '/dic/queryErp', //销售员ERP
            GETTYPE: '/dic/queryModel', //模式 POP、自营
            GETCHANNEL: '/dic/queryChannel', //渠道
            GETTERM: '/dic/queryTerminal', //终端
        }
    },
    'deptcharts': {
        NAME: '', //下属部门分时对比所有情况
        ICON: '',
        TOOLTIP: '',
        API: {
            GET: '/summary/groupSummary?module=dept' //部门
        }
    },
    'channelcharts': {
        NAME: '', //各终端分时对比所有情况
        ICON: '',
        TOOLTIP: '',
        API: {
            GET: '/summary/groupSummary?module=channel' //终端
        }
    },
};

export const TITLECONF = MODULECONF.TITLECONF;
export default Object.assign(CONF, Object.assign(MODULECONF, PUBCONF));
