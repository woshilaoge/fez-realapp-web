<template>
    <!-- <v-panel :moduleName="moduleName" :moduleIcon="moduleIcon"> -->
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12" style="padding-top:5px;">
                <v-button-radio :init="radioArr" @change-select="changeRadio"></v-button-radio>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
                <v-legend :params="params" :changeRadio="selectRadio" @radioInit="radioInit"></v-legend>
            </div>
        </div>
    <!-- </v-panel> -->
</template>
<script>
import vPanel from '../../../../public/components/panel.vue';

import vButtonRadio from './buttonradiochannel/index.vue';
import vLegend from './legend/index.vue';

export default {
    props: {
        params: {
            type: Object
        }
    },
    data() {
        return {
            moduleName: "各终端分时对比所有情况",
            moduleIcon: "fa fa-crosshairs",
            selectRadio: '',
            radioArr: []
        }
    },

    computed: {},
    components: {
        vPanel,
        vButtonRadio,
        vLegend,
    },
    mounted() {
     
    },  
    methods: {
        changeRadio(val) {
            this.selectRadio = val;
        },
        radioInit(val) {
            this.radioArr = val;
        }
    }
}
</script>
