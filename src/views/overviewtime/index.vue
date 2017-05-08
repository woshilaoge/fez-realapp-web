<template>
    <v-page :footer="false">
        <div class="row module" style="padding-top:15px">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <v-search v-model="params"></v-search>
            </div>
        </div>
       <!--  <v-headroom pinClass="right_col" :disabled="false">
            <v-search v-model="params"></v-search>
        </v-headroom> -->
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

import vPage from '../public/module/common/page.vue';
import vHeadroom from '../public/components/headroom/index.vue';

import vListTable from './module/linechart/index.vue'; //
import vSearch from './module/search/index.vue'; //

export default {
    name: "vOperationsl",
    components: {
        vPage, //页面公共模版
        vHeadroom, //工具栏固定模块

        vListTable,
        vSearch,
        // vModuleBottom
    },

    data() {
        return {
            params: null,
            disabled: false
        }
    },

    created() {
        if (terminal("mobile")) {
            this.disabled = true;
        }
    },

    mounted() {
    },

    methods: {
        paramsInitOk(val) {
            this.params = Object.assign({}, val);
        }
    }
}
</script>
