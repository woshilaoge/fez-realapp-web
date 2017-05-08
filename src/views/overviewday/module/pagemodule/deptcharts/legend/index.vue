<template>
    <v-panel :moduleName="moduleName" :moduleIcon="moduleIcon" :moduleToolTip="moduleToolTip">
        <div class="row min-chart-width-900">
            <v-echart v-bind:options="echartOption" :autoResize="true" :height="320"></v-echart>
        </div>
    </v-panel>
</template>
<script scoped>
import Service from './index';

import vPanel from '../../../../../public/components/panel.vue';

import vEchart from '../../../../../public/components/ECharts.vue';


export default {
    name:'vDeptcharts',
    components: {
        vEchart,
        vPanel
    },

    data() {
        return {
            moduleName: '',
            moduleIcon: '',
            moduleToolTip: '',
            echartOption: null
        }
    },

    props: {
        params: {
            type: [String, Number, Object]
        },
        changeRadio: {
            type: [String, Number]
        }
    },

    watch: {
        params: {
            handler: function(val, oldVal) {
               setTimeout(()=>{
                 this.serviceGet();
             },1000)
            },
            deep: true
        },
        changeRadio(val) {
            this.serviceGetByRadio(val);
        }
    },

    methods: {
        serviceGet: function() {
            let _vm = this;

            Service.get(_vm.params).then((data) => {
                _vm.moduleName = data.moduleName;
                _vm.moduleIcon = data.moduleIcon;
                _vm.moduleToolTip = data.moduleToolTip;
                // _vm.echartOption = data.moduleData;
                _vm.$emit('radioInit', data.moduleEmit);
            });
        },
        serviceGetByRadio(val) {
            let _vm = this;

            Service.getByRadio(val).then((data) => {
                _vm.echartOption = data;
            });
        }
    }
}
</script>
