<template>
    <v-panel :moduleName="moduleName" :moduleIcon="moduleIcon" :moduleToolTip="moduleToolTip">
        <div class="row min-chart-width-900" :class="[{'hide-div':echartOption&&!echartOption.series.length}]">
            <v-echart v-bind:options="echartOption" :autoResize="true" :height="320"></v-echart>
        </div>
        <div :class="[{'hide-div':!echartOption||echartOption.series.length}]" style="text-align:center">暂无数据</div>
    </v-panel>
</template>
<script scoped>
import Service from './service';

import vPanel from '../../../../../public/components/panel.vue';
import vEchart from '../../../../../public/components/ECharts.vue';


export default {
    name: 'vChannelcharts',
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
                this.serviceGet();
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
                /**
                 * 如果返回数据为空数组，因为其他组件依赖于次数据，在这里做判断
                 */
                if (!data.moduleData.series.length) {
                    _vm.echartOption = data.moduleData;
                }
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
