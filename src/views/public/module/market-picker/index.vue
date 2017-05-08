<template>
    <div class="btn-group form-group">
        <span class="form-group-text" v-if="text">{{text}}</span>
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" :style="{width:width}">
            <span>{{selected}}</span>
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu">
            <li v-for="v in data">
                <a @click="selectType(v.value,v.name)">{{v.name}}</a>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .form-group-text {
        float: left;
        height: 34px;
        line-height: 34px;
        color:#333333
    }
</style>
<script>
    export default {
        data() {
            return {
                selected: "",

//                typeList: [{
//                    name: "整体",
//                    value: "1"
//                }, {
//                    name: "自营",
//                    value: "2"
//                }, {
//                    name: "POP",
//                    value: "3"
//                }],
                marketPicker: []
            }
        },
        props: {
            data: {
                type: Array
            },
            width: {
                type: String,
                default: 'auto'
            },
            text:{
                type: String,
                default: ''
            }
        },
        created() {
            // let _vm = this;
            // _vm.$emit("marketPicker", {
            //     value: "1",
            //     name: "整体"
            // });
        },
        watch: {
            data(val){
                if (val && val.length) {
                    let _vm = this;
                    _vm.selected = val[0].name;
                    _vm.$emit("marketPicker", {
                        value: val[0].value,
                        name: val[0].name
                    });
                }
            }
        },
        methods: {
            selectType: function (value, name) {
                let _vm = this;
                _vm.selected = name;
                _vm.$emit("marketPicker", {
                    value: value,
                    name: name
                });
            }
        }

    }
</script>
