<template>
    <div class="container body">
        <div class="main_container">
            <!-- 边栏 -->
            <div class="col-md-3 left_col" v-if="menu">
                <div class="left_col scroll-view">
                    <v-logo></v-logo>
                    <v-menu ></v-menu>
                </div>
            </div>
            <!-- 顶部导航 -->
            <!--<div class="top_nav">-->
            <!--<v-topbar></v-topbar>-->
            <!--</div>-->
            <!-- page content -->
            <div class="right_col" role="main" :class="[{'no-menu':!menu}]">
                <slot></slot>
                <!-- 页脚 -->
                <v-footer v-if="footer"></v-footer>
            </div>
        </div>
    </div>
</template>
<script>
/**
 * logo 及系统名模块
 */
import vLogo from "./logo.vue";

/**
 * 菜单导航模块
 */
import vMenu from "./menu.vue";

/**
 * 顶部导航模块
 */
import vTopbar from "./top-bar.vue";

/**
 * 页脚
 */
import vFooter from "./footer.vue";

export default {
    components: {
        vLogo,
        vMenu,
        vTopbar,
        vFooter
    },
    props: {
        footer: {
            type: [Boolean],
            default:true
        },
        menu:{
            type: [Boolean],
            default:false
        }
    }
}
</script>
