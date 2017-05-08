import Q from 'q';

export default {
    nav: (prefix) => {
        prefix = prefix || "./";

        let navList = [
        //     {
        //     name: "经营分析",
        //     icon: "fa fa-area-chart",
        //     subNav: [{
        //         name: "销售分析",
        //         thirdNav: [{
        //             name: "销售分析",
        //             href: prefix + "xiaoshoufenxi/index.html"
        //         }, {
        //             name: "库存动态",
        //             href: prefix + "kucunfenxi/index.html"
        //         }, {
        //             name: "单品效果",
        //             href: prefix + "danpinfenxi/index.html"
        //         }]
        //     }, {
        //         name: "库存动态",
        //         href: prefix + "kucunfenxi/index.html"
        //     }, {
        //         name: "单品效果",
        //         href: prefix + "danpinfenxi/index.html"
        //     }]
        // }, {
        //     name: "市场行情",
        //     icon: "fa fa-line-chart",
        //     href: prefix + "xiaoshoufenxi/index.html"
        // },
        //     {
        //     name: "营销分析",
        //     icon: "fa fa-industry",
        //     subNav: [{
        //         name: "广告分析",
        //         thirdNav: [{
        //             name: "总体分析",
        //             href: "#zongtifenxi"
        //         }, {
        //             name: "直投分析",
        //             href: "#zhitoufenxi"
        //         }, {
        //             name: "快车分析",
        //             href: "#kuaichefenxi"
        //         }]
        //     }, {
        //         name: "促销分析",
        //         thirdNav: [{
        //             name: "效果分析",
        //             href: "#xiaoguofenxi"
        //         }]
        //     }, {
        //         name: "优惠券分析",
        //         thirdNav: [{
        //             name: "效果分析",
        //             href: "#xiaoguofenxi"
        //         }]
        //     }]
        // },
            {
            name: "总体概览天",
            icon: "ivu-icon ivu-icon-calendar",
            href: prefix + "overviewday.html"
        } ,{
            name: "总体概览小时",
            icon: "ivu-icon ivu-icon-ios-pulse",
            href: prefix + "overviewtime.html"
        }];

        return Q.Promise((resolve, reject) => {
            resolve(navList);
        });
    },

    footer: () => {
        return Q.Promise((resolve, reject) => {
            resolve("Copyright © 2004-2017 京东JD.com 版权所有");
        });
    },

    sysInfo: () => {
        let _data = {
            systemName: "实时应用",
            logoIcon: "ivu-icon ivu-icon-social-windows" //logo样式
        };
        return Q.Promise((resolve, reject) => {
            resolve(_data);
        });
    }
};
