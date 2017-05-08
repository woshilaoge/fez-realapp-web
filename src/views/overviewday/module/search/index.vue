<template>
    <div class="search">
        <!-- 搜索框 -->
        <Row>
            <Col :xs="12" :sm="12" :md="{ span:2 , offset: 0}">
            <v-date-time v-model='time'></v-date-time>
            </Col>
        </Row>
        <Row :gutter="10">
            <Col :xs="12" :sm="12" :md="3">
            <Select v-model="dept1Id" placeholder="一级部门（全部）" clearable @on-change="getCascader2">
                <Option v-for="item in dept1List" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
            </Col>
            <Col :xs="12" :sm="12" :md="3">
            <Select v-model="dept2Id" placeholder="二级部门（全部）" clearable @on-change="getCascader3" :disabled="!dept2List.length">
                <Option v-for="item in dept2List" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
            </Col>
            <Col :xs="12" :sm="12" :md="3">
            <Select v-model="dept3Id" placeholder="三级部门（全部）" clearable @on-change="getErpCascader" :disabled="!dept3List.length">
                <Option v-for="item in dept3List" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
            </Col>
            <Col :xs="12" :sm="12" :md="3">
            <Select v-model="erp" placeholder="销售员ERP（全部）" clearable :disabled="!erpList.length">
                <Option v-for="item in erpList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
            </Col>
            <Col :xs="12" :sm="12" :md="3">
            <Select v-model="type" placeholder="模式（全部）" clearable :disabled="!typeList.length">
                <Option v-for="item in typeList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
            </Col>
            <Col :xs="12" :sm="12" :md="3">
            <Select v-model="channel" placeholder="渠道（全部）" clearable @on-change="getTermCascader" :disabled="!channelList.length">
                <Option v-for="item in channelList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
            </Col>
            <Col :xs="12" :sm="12" :md="3">
            <Select v-model="term" placeholder="终端（全部）" clearable :disabled="!termList.length">
                <Option v-for="item in termList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
            </Col>
            <!-- </Col> -->
            <Col :xs="12" :sm="12" :md="{ span:2 , offset: 0}">
            <Button type="primary" icon="ios-search" @click="search">搜索</Button>
            </Col>
        </Row>
    </div>
</template>
<script>
import Service from './service';

import vDateTime from '../../../public/module/date-time/index.vue';

export default {
    components: {
        vDateTime
    },
    data() {
        return {
            dept1List: [],
            dept2List: [],
            dept3List: [],
            erpList: [],
            typeList: [],
            channelList: [],
            termList: [],


            dept1Id: '',
            dept2Id: '',
            dept3Id: '',
            erp: '',
            type: '',
            channel: '',
            term: '',

            isSearch: true,
            time: ''
        }
    },
    created() {
        this.serviceGet();
    },
    computed: {
        params() {
            const _vm = this;
            return {
                "dept1Id": _vm.dept1Id,
                "dept2Id": _vm.dept2Id,
                "dept3Id": _vm.dept3Id,
                "queryErp": _vm.erp,
                "channel": _vm.channel,
                "terminal": _vm.term,
                "businessMode": _vm.type,
                "timePoint": _vm.time
            }
        }
    },
    watch: {
        /**
         * [当搜索条件没有改变，点击查询，不会再次查询，同时也防止点击多次，查询多次的情况]
         * @type {Object}
         */
        params: {
            handler: function(val, oldVal) {
                this.isSearch = true;
            },
            deep: true
        }
    },

    methods: {
        serviceGet: function() {
            const _vm = this;

            Service.get().then((data) => {
                _vm.dept1List = data[0];
                _vm.dept1Id = data[0][0].value;
                _vm.typeList = data[1];
                _vm.channelList = data[2];
                _vm.search();
            });
        },
        search() {
            const _vm = this;

            if (_vm.isSearch) {
                _vm.$emit('input', _vm.params);
                console.log(`搜索======>> `, _vm.params,_vm.isSearch);
            }
            _vm.isSearch = false;
        },
        getCascader2(val) {
            const _vm = this;
            _vm.dept2List = [];
            if (val) {
                _vm.getDeptCascader({
                    'deptLev': 2,
                    'parentIds': val
                }, 'dept2List');
            }
        },
        getCascader3(val) {
            const _vm = this;
            _vm.dept3List = [];
            if (val) {
                _vm.getDeptCascader({
                    'deptLev': 3,
                    'parentIds': val
                }, 'dept3List');
            }
        },
        getErpCascader(val) {
            const _vm = this;
            _vm.erpList = [];
            if (val) {
                Service.getErpCascader(val).then((data) => {
                    console.log(data, '<=====ERP 数据');
                    _vm['erpList'] = data;
                });
            }
        },
        getTermCascader(val) {
            const _vm = this;
            _vm.termList = [];
            if (val) {
                Service.getTermCascader(val).then((data) => {
                    console.log(data, '<=====term 数据');
                    _vm['termList'] = data;
                });
            }
        },
        getDeptCascader(val, list) {
            console.log(val);
            const _vm = this;
            Service.getDeptCascader(val).then((data) => {
                console.log(data, '<=====下级数据');
                _vm[list] = data;
            });
        }
    }
}
</script>
