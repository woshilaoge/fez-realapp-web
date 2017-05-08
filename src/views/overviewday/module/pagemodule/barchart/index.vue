<template>
    <div style="position:relative">
        <Row :gutter="10">
            <Col :xs="24" :sm="12" :md="12" v-for="item in echartOptArr">
            <v-panel :moduleName="item.moduleName">
                <v-echart v-bind:options="item.moduleData" :autoResize="true" height="320"></v-echart>
            </v-panel>
            </Col>
        </Row>
    </div>
</template>
<script scoped>
import Service from './service';

import vPanel from '../../../../public/components/panel.vue';


import vEchart from '../../../../public/components/ECharts.vue';


export default {
    components: {
        vEchart,
        vPanel,
       
    },

    data() {
        return {
            moduleName: '',
            moduleIcon: '',
            moduleToolTip: '',
            tileList: [],
            titleActive: [],
            echartOptArr: []
        }
    },

    props: {
        params: {
            type: [Object]
        },
        list:{
            type: [Array]
        }
    },

    watch: {
        list: {
            handler: function(val, oldVal) {
                const _vm = this;
                //模拟请求相应时间，接口联调可注掉
                // setTimeout(() => {
                _vm.serviceGet(val);
                // }, 1000)
            },
            deep: true
        }
    },

    methods: {
        serviceGet(val) {
            const _vm = this;
            Service.get(val).then((data) => {
                _vm.echartOptArr = data.moduleData;
                // _vm.$emit('loading', false);
            });
        }
    }
}
</script>
