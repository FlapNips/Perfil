<template>
  <div class="col-12">
    <b-img id="profile-img" src="@/assets/profile.png" rounded="circle" class="col-9 m-0 p-2"></b-img>
    <div class="row m-1">
    <div class="col-12 separator">PERFIL</div>
    <div id="rank-div" @mouseenter="rankMouse=true" @mouseleave="rankMouse=false" class="row p-0 mx-auto border">
        <div class="col-lg-3 col-12 mx-auto p-0 ">
            <b-img  src="@/assets/rank.png" class="col-12 p-0 "/>
        </div>
        <div id="status" v-if="rankMouse" class="col-5 text-left p-0">
            <span>NOVATO</span>
        </div>
    </div>
    </div>
    <div>
    <button class="col-8 m-1">teste 1</button>
    </div>
    <div>
    <button class="col-8 m-1">teste 2</button>
    </div>
    <div>
    <button class="col-8 m-1">teste 3</button>
    </div>
    <div>
    <button class="col-8 m-1">teste 4</button>
    </div>
    <div>
    <button class="col-8 m-1">teste 5</button>
    </div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            rankMouse: false,
            status: false
        }
    },
    methods: {

    }
}
</script>

<style scoped>
#rank-div {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    z-index: 200;
    transition: transform 2s;
}
#status {
    width: 0;
    opacity: 0;
    transition: opacity 2s;
}
#rank-div:hover {
        opacity: 1;
}
.separator {
    display    : flex;
    align-items: center;
    text-align : center;
}
.separator::before, .separator::after {
    content      : '';
    flex         : 1;
    border-bottom: 1px solid #000;
}
.separator::before {
    margin-right: .25em;
}
.separator::after {
    margin-left: .25em;
}
</style>