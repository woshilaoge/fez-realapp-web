<template>
    <Row type="flex" justify="end" class="code-row-bg">
        <Radio-group v-model="buttonRadio" type="button" size="small" @on-change="changeRadio">
            <Radio v-for="item in moduleData" :label="item.name"></Radio>
        </Radio-group>
    </Row>
</template>
<script>
// import Service from './index';

export default {
    components: {

    },

    data() {
        return {

            moduleData: [],
            buttonRadio: ''
        }
    },

    props: {
        params: {
            type: Object
        },
        init: {
            type: Array
        }
    },

    watch: {
        // params: {
        //     handler: function(val, oldVal) {
        //         this.serviceGet();
        //     },
        //     deep: true
        // },
        init: {
            handler: function(val, oldVal) {
                this.serviceGet(val);
            },
            deep: true
        }
    },

    mounted() {

    },

    methods: {
        serviceGet: function(val) {
            const _vm = this;

            _vm.moduleData = val;
            _vm.$nextTick(function() {
                _vm.buttonRadio = val[0] ? val[0].name : "";
                _vm.changeRadio(_vm.buttonRadio);
            });
        },
        changeRadio(val) {
            const _vm = this;
            for (let v of _vm.moduleData) {
                if (v.name === val) {
                    return _vm.$emit('change-select', v.value);
                }
            }
        }
    }
}
</script>
