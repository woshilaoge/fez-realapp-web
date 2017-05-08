<template>
    <div style="position:realtive" @blur="alert(2)">
        <Input v-model="valueInput" readonly icon="ios-clock-outline" placeholder="请选则" style="width: 100px" @on-click="toggleCard(true)">
        </Input>
        <div style="width:190px;position: absolute;z-index: 99;top:35px;background-color: #fff;box-sizing: border-box;border-radius: 4px;box-shadow: 0 1px 6px rgba(0,0,0,.2);" v-show="showCard">
            <div class="ivu-date-picker-cells" style="width:170px">
                <span v-for="item in hourArr" class="ivu-date-picker-cells-cell" :class="[{'ivu-date-picker-cells-cell-selected':item.select}]">
                    <em @click="select(item.value)">{{item.name}}</em>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
/**
 * [公共方法]
 */
const formatHour = function(i) {
    return (i > 9 ? `${i}:00` : `0${i}:00`);
}

export default {

    computed: {

    },
    data() {
        return {
            valueInput: '',
            showCard: false,
            hourArr: []
        }
    },

    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        time: {
            type: Boolean
        },
        hour: {
            type: Boolean
        },
        format: {
            type: Function
        }
    },
    watch: {
        value(val) {
            this.valueInput = formatHour(val);
        }
    },
    created() {
        /**
         * 初始化 小时数组
         */
        const _vm = this,
            hour = new Date().getHours();
        for (let i = 1; i <= 24; i++) {
            _vm.hourArr.push({
                name: (i > 9 ? `${i}` : `0${i}`),
                value: i,
                select: (hour === i ? true : false)
            });
        };
        _vm.$emit('input', hour);
    },
    mounted() {
        const _vm = this,
            el = _vm.$el.getElementsByTagName('input')[0] || {};
        el.onclick = function() {
            _vm.showCard = !_vm.showCard;
        }
    },
    methods: {
        toggleCard(val) {
            const _vm = this;
            _vm.showCard = val;
            if (!val) {
                //TODO 关闭选择卡片,添加展示的格式化函数 format
            }
        },
        select(val) {
            const _vm = this;
            _vm.valueInput = val;
            _vm.toggleCard(false);
            _vm.toggleSelect(val);
            _vm.$emit('input', val);
        },
        toggleSelect(val) {
            const _vm = this;
            for (let item of _vm.hourArr) {
                if (val === item.value) {
                    item.select = true;
                } else {
                    item.select = false;
                }
            }
        }
    }
}
</script>
