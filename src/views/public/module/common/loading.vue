<template>
    <div class="loading" v-if="value">
        <Row>
            <Col span="2" offset="10">
            <Spin size="small"></Spin>
            </Col>
            <Col span="2" offset="0">
            <Spin></Spin>
            </Col>
            <Col span="10" offset="0">
            <Spin size="large"></Spin>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    name: "loading",
    props: {
        value: {
            type: [Boolean]
        }
    }
}
</script>
<style>
.loading {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 999;
    top: 0;
    left: 0px;
}

.loading .ivu-row {
    margin-top: 20%;
}
</style>
