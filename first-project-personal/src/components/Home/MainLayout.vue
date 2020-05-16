<template>
<div id="layout-main" class="row text-center">
        <div class="col-2">
            <div class="col-12 h-100 border">
            <!-- MENU MAIN-->
                <MenuProfile/>
            </div>
        </div>
        <div class="col-10">
            <div class="row menu-and-footer">
                <div id="menu-top" class="col-12 border">Menu</div>
                <!-- MENU TOP RIGHT-->
                <MenuTop/>
            </div>
            <div id="content" class="row">
                <div class="col-8 border">
                <!-- CONTENT MAIN-->
                <Content/>
                </div>
                <div class="col-4 border">
                <!-- FLOAT RIGHT CONTENT-->
                <FloatRight/>
                </div>
            </div>
            <div class="row" style="height: 5vh">
                <slot></slot>
            </div>
        </div>
</div>
</template>

<script>
import MenuProfile from './MenuProfile.vue'
import MenuTop from './MenuTop.vue'
import Content from './Content.vue'
import FloatRight from './FloatRight.vue'
export default {
    components: {
        MenuProfile,
        MenuTop,
        Content,
        FloatRight
    }

}
</script>
<style scoped>
#layout-main {
    width: 100vw;
    height: 100vh;
}
.menu-and-footer {
    height: 5%;
}
#content {
    height: 90%;
}
div {
    margin: 0;
    padding: 0;
}
</style>