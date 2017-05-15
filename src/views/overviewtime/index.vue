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
                <v-list-table :params="params"></v-list-table>
            </div>
        </div>
    </v-page>
</template>
<script>
import terminal from '../public/utils/terminal';
import {TITLECONF} from './conf';
import vTitlex from '../public/module/common/titlex.vue';

import vPage from '../public/module/common/page.vue';

import vListTable from './module/linechart/index.vue'; //
import vSearch from './module/search/index.vue'; //


export default {
    name: "vOperationsl",
    components: {
        vPage, //页面公共模版
        vTitlex,

        vListTable,
        vSearch
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
    }
}
</script>
