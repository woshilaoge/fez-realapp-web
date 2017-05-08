<template>
    <div class="module-app">
        <v-panel moduleName="实时概况" :moduleIcon="moduleIcon">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12" style="padding-top:5px;">
                    <v-table :params="params" @emitbar="initBar" @loading="toggleLoading"></v-table>
                </div>
            </div>
        </v-panel>
        <v-panel moduleName="指标趋势变化" :moduleIcon="moduleIcon">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12" style="padding-top:5px;">
                    <v-bar-chart :params="params" @change-select="changeRadio" :list="listBar"></v-bar-chart>
                </div>
            </div>
        </v-panel>
        <v-panel moduleName="下属部门分时对比情况" :moduleIcon="moduleIcon">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12" style="padding-top:5px;">
                    <v-dept-charts :params="params"></v-dept-charts>
                </div>
            </div>
        </v-panel>
        <v-panel moduleName="各终端分时对比情况" :moduleIcon="moduleIcon">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12" style="padding-top:5px;">
                    <v-channel-charts :params="params"></v-channel-charts>
                </div>
            </div>
        </v-panel>
        <v-loading v-model="loading"></v-loading>
    </div>
</template>
<script>
import vPanel from '../../../public/components/panel.vue';
import vLoading from '../../../public/module/common/loading.vue';


import vTable from './table/index.vue';
import vBarChart from './barchart/index.vue';
import vDeptCharts from './deptcharts/index.vue';
import vChannelCharts from './channelcharts/index.vue';

export default {
    components: {
        vPanel,
        vTable,
        vBarChart,
        vLoading,
        vDeptCharts,
        vChannelCharts
    },

    data() {
        return {
            moduleName: "各部门流量",
            moduleIcon: "fa fa-crosshairs",
            linkParams: null,
            selectParams: null,
            loading: true,
            listBar: []
        }
    },

    computed: {

    },

    props: {
        params: {
            type: Object
        }
    },

    mounted() {

    },
    methods: {
        linkChartTable(val) {
            this.linkParams = val;
        },
        changeRadio(val) {
            this.selectParams = val;
        },
        toggleLoading(val) {
            console.log(val);
            this.loading = val;
        },
        initBar(val) {
            this.listBar = val;
        }
    }
}
</script>
