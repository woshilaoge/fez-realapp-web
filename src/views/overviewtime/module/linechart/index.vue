<template>
    <div class="module-app" style="position:relative">
        <v-panel v-for="item in echartOptArr" :moduleName="item.moduleName">
            <div class="row">
                <v-echart v-bind:options="item.moduleData" :autoResize="true" height="320"></v-echart>
            </div>
        </v-panel>
        <v-loading v-model="loading"></v-loading>
    </div>
</template>
<script>
import Service from './service';

import vPanel from '../../../public/components/panel.vue';
import vLoading from '../../../public/module/common/loading.vue';

import vEchart from '../../../public/components/ECharts.vue';


export default {
    components: {
        vEchart,
        vPanel,
        vLoading
    },

    data() {
        return {
            moduleName: '',
            moduleIcon: '',
            moduleToolTip: '',
            tileList: [],
            titleActive: [],
            echartOptArr: [],
            loading: true
        }
    },

    props: {
        params: {
            type: [Object]
        }
    },

    watch: {
        params: {
            handler: function(val, oldVal) {
                const _vm = this;
                _vm.loading = true;
                //模拟请求相应时间，接口联调可注掉
                // setTimeout(() => {
                    _vm.serviceGet();
                // }, 1000)
            },
            deep: true
        }
    },

    methods: {
        serviceGet: function() {
            const _vm = this;

            Service.get(_vm.params).then((data) => {
                _vm.echartOptArr = data.moduleData;
                _vm.loading = false;
            });
        }
    }
}
</script>
