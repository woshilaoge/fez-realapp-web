<template>
    <v-panel :moduleName="moduleName" :moduleIcon="moduleIcon" :moduleToolTip="moduleToolTip">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12" v-if="columns.length">
                <Table :context="self" border size="small" :columns="columns" :data="data" no-data-text="暂无数据" :showHeader="true" :row-class-name="rowRender">
                    <!--  <table cellspacing="0" cellpadding="0" border="0" width="100%" slot="header">
                        <thead>
                            <tr>
                                <th class="" colspan="2">
                                    <div class="ivu-table-cell"><span>姓名</span>
                                    </div>
                                </th>
                                <th class="">
                                    <div class="ivu-table-cell"><span>年龄</span>
                                    </div>
                                </th>
                                <th class="">
                                    <div class="ivu-table-cell"><span>地址</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </table> -->
                </Table>
            </div>
        </div>
    </v-panel>
</template>
<script scoped>
import vPanel from '../../../../public/components/panel.vue';
import vEchart from '../../../../public/components/ECharts.vue';

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
            type: Object
        },
        data: {
            type: Array,
            default () {
                return [];
            }
        },
        columns: {
            type: Array,
            default () {
                return [];
            }
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

            // Service.get(_vm.params).then((data) => {
            //     _vm.moduleName = data.moduleName;
            //     _vm.moduleIcon = data.moduleIcon;
            //     _vm.moduleToolTip = data.moduleToolTip;
            //     _vm.columns = data.moduleData.columns;
            //     _vm.data = data.moduleData.data;
            // });
        },
        /**
         * 点击部门名称的回调函数，在service里声明，随table配置项合并到表格数据中
         * val :row.deptId (Number)
         * rowIndex 点击当前部门的row下标, 因为是异步操作，准确性起见，在这里如果判断rowIndex 改变，则从循环里重新取值
         * toggleKey 为点击加号，显示和隐藏行数据的判断依据字段，例如，“deptLev”,当deptLev在某范围之间，以此来隐藏xx级部门
         */
        renderDeptDetail(val, rowIndex, key, toggleKey) {
            //加载详细数据
            const _vm = this;

            const insert = function(index, obj) {
                _vm.data.splice(index, 0, obj);
            };
            /** 获取详细数据插入到数组的下标值 */
            const index = function(val) {
                let _index = rowIndex;

                if (_vm.data[rowIndex][key] !== val) {
                    _vm.data.forEach(function(v, idx) {
                        if (v.deptId === val) {
                            _index = idx;
                            return false;
                        }
                    });
                }
                return _index;
            };
            /**
             * _isRenderDetail 字段为标记该行数据是否已经请求过详情数据，如果已经缓存了，则进行 toggle显示与隐藏操作
             * 
             */
            if (!_vm.data[rowIndex]["_isRenderDetail"]) {
                Service.getDetailByDeptId(num).then((data) => {

                    let insertIndex = index(val);
                    /** 
                     * 做标记，此下标的部门已经初始化部门详情
                     */
                    _vm.data[insertIndex]["_isRenderDetail"] = true;
                    num = num + 1;
                    data.forEach(function(obj) {
                        insert(++insertIndex, obj);
                    });
                });
            } else {
                _vm.toggleDeptDetail(rowIndex, toggleKey);
            }
        },
        /**
         * 表格显示和隐藏下钻信息
         * @param  {} rowIndex [选中当前部门的下标值]
         * @param  {[String]} key [隐藏和显示的判断依据字段]
         */
        toggleDeptDetail(rowIndex, key) {
            const _vm = this,
                tempVal = _vm.data[rowIndex][key],
                hideLev = 1;

            const getRowParentIndex = function(index, key) {
                for (let d = index - 1; d >= 0; d--) {
                    if (_vm.data[d][key] === (_vm.data[index][key] - 1)) {
                        return d;
                    }
                }
            };

            for (let i = rowIndex + 1; i < _vm.data.length; i++) {

                /** 
                 * 点击父元素可以折叠所有子元素
                 *  展开父元素，默认只展开一级
                 */
                if (_vm.data[i][key] > tempVal) {
                    _vm.$set(_vm.data[i],
                        '_isHidden',
                        (_vm.data[getRowParentIndex(i, key)]['_isHidden'] ? true : (_vm.data[i][key] <= (tempVal + hideLev) ? !_vm.data[i]._isHidden : true)));
                } else {
                    return;
                }
            }
        },
        rowRender(row, index) {
            if (row._isHidden) {
                return 'hide';
            }
        }
    }
}
</script>
