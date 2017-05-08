import Handler from './handler';

import Q from 'q';

export default {
    get: (data, param = {}) => {
        console.group(data);
        console.log('====get====参数======>>>>');
        console.log(param);
        console.groupEnd();

        let rtnData = Handler.gen(data);
        return Q.Promise((resolve, reject) => {
            resolve(rtnData.data);
        });
    },

    post: (data, param = {}) => {
        let rtnData = Handler.gen(data);
        return Q.Promise((resolve, reject) => {
            resolve(rtnData.data);
        })
    },

    put: (data, param = {}) => {
        let rtnData = Handler.gen(data);
        return Q.Promise((resolve, reject) => {
            resolve(rtnData.data);
        })
    },

    delete: (data, param = {}) => {
        let rtnData = Handler.gen(data);
        return Q.Promise((resolve, reject) => {
            resolve(rtnData.data);
        })
    },

    jsonp: (data, param = {}) => {
        let rtnData = Handler.gen(data);
        return Q.Promise((resolve, reject) => {
            resolve(rtnData.data);
        })
    }
}
