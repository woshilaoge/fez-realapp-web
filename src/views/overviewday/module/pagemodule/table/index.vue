<template>
    <v-panel :moduleName="moduleName" :moduleIcon="moduleIcon" :moduleToolTip="moduleToolTip">
        <div class="row min-table-width-900">
            <div class="col-md-12 col-sm-12 col-xs-12" v-if="columns.length">
                <Table :context="self" border size="small" :columns="columns" :data="data" no-data-text="暂无数据" :showHeader="true" :row-class-name="rowRender">
                </Table>
            </div>
        </div>
    </v-panel>
</template>
<script>
import Service from './service';

import vPanel from '../../../../public/components/panel.vue';
import vEchart from '../../../../public/components/ECharts.vue';

let num = 0;

export default {
    components: {
        vEchart,
        vPanel,
    },

    data() {
        return {
            self: this,
            moduleName: '',
            moduleIcon: '',
            moduleToolTip: '',
            tileList: [],
            titleActive: [],
            columns: [],
            data: []
        }
    },

    props: {
        params: {
            type: [String, Number, Object]
        }
    },

    watch: {
        params: {
            handler: function(val, oldVal) {
                this.serviceGet();
            },
            deep: true
        }
    },

    methods: {
        serviceGet: function() {
            let _vm = this;
            _vm.$emit('loading', true);
            Service.get(_vm.params).then((data) => {
                _vm.moduleName = data.moduleName;
                _vm.moduleIcon = data.moduleIcon;
                _vm.moduleToolTip = data.moduleToolTip;
                _vm.columns = data.moduleData.columns;
                _vm.data = data.moduleData.data;
                console.log(data, '============table');
                _vm.$emit('emitbar', data.moduleEmit);
                _vm.$emit('loading', false);
            });
        }
    }
}
</script>
