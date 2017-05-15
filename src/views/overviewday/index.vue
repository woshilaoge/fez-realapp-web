<template>
    <v-page :footer="false">
        <div class="row module title-x">
             <v-titlex :titleConf="TITLECONF"></v-titlex>
        </div>
        <div class="row module" style="padding-top:15px">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <v-search v-model="params"></v-search>
            </div>
        </div>
        <!-- 页面主体 -->
        <div class="row module" style="padding-top:15px">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <v-page-module :params="params"></v-page-module>
            </div>
        </div>
    </v-page>
</template>
<script>
import {TITLECONF} from './conf';

import terminal from '../public/utils/terminal';
import vTitlex from '../public/module/common/titlex.vue';
import vPage from '../public/module/common/page.vue';

import vPageModule from './module/pagemodule/index.vue'; 
import vSearch from './module/search/index.vue'; 

export default {
    name: "voverviewday",
    components: {
        vPage, //页面公共模版
        vTitlex, //工具栏固定模块

        vPageModule,
        vSearch,
    },

    data() {
        return {
            params: null,
            disabled: false,
            TITLECONF:TITLECONF
        }
    },

    created() {
        if (terminal("mobile")) {
            this.disabled = true;
        }
    },

    updated() {
        var e = document.createEvent("Event");
        e.initEvent("resize", true, true);
        window.dispatchEvent(e);
    }
}
</script>
