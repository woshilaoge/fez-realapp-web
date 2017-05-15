<template>
    <div class="title-x">
        <span style="font-size:18px;padding-left:10px;">{{titleConf.NAME}}</span>
        <Poptip trigger="hover" placement="bottom-start">
            <Icon type="help-circled"></Icon>
            <div slot="content" v-html="titleConf.TOOLTIP"></div>
        </Poptip>
    </div>
</template>
<script>
export default {
    name: "titlex",
    props: {
        titleConf: {
            type: [Object],
            default(){
                return {
                    NAME:"",
                    TOOLTIP:""
                }
            }
        }
    }
}
</script>
