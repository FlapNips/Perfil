<template>
<b-row id="layout-main" class="text-center">
        <b-button id="action-button" v-b-toggle.side variant="danger">X</b-button>
        <b-sidebar id="side">
            <b-col class="mx-auto p-3">
            <!-- MENU MAIN-->
                <MenuProfile/>
            </b-col>
        </b-sidebar>
        <b-col class="col">
            <b-row class="row menu-and-footer">
                <div id="menu-top" class="col-12 border">Menu</div>
                <!-- MENU TOP RIGHT-->
                <MenuTop/>
            </b-row>
            <b-row id="content" class="row">
                <b-col class="col-8 border">
                <!-- CONTENT MAIN-->
                <Content/>
                </b-col>
                <b-col class="col-4 border">
                <!-- FLOAT RIGHT CONTENT-->
                <FloatRight/>
                </b-col>
            </b-row>
            <b-row class="row" style="height: 5vh">
                <slot></slot>
            </b-row>
        </b-col>
</b-row>
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
    },
    data(){
        return {
            showMenu: true
        }
    },
    computed: {
        statsMenu(){
            if(this.showMenu) {
                return 'danger'
            } else {
                return 'success'
            }
        }
    }

}
</script>
<style scoped>
#layout-main {
    width: 100vw;
    height: 100vh;
}
#action-button {
    position: absolute;
    z-index: 1000;
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