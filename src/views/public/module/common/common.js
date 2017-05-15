import Q from 'q';

export default {
    nav: (prefix) => {
        prefix = prefix || "./";

        let navList = [
            {
            name: "页面1",
            icon: "ivu-icon ivu-icon-calendar",
            href: prefix + "overviewday.html"
        } ,{
            name: "页面2",
            icon: "ivu-icon ivu-icon-ios-pulse",
            href: prefix + "overviewtime.html"
        }];

        return Q.Promise((resolve, reject) => {
            resolve(navList);
        });
    },

    footer: () => {
        return Q.Promise((resolve, reject) => {
            resolve(`Copyright © 2004-${new Date().getFullYear()} woshilaoge 版权所有`);
        });
    },

    sysInfo: () => {
        let _data = {
            systemName: "我的应用",
            logoIcon: "ivu-icon ivu-icon-social-windows" //logo样式
        };
        return Q.Promise((resolve, reject) => {
            resolve(_data);
        });
    }
};
