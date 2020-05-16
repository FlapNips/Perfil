<template>
  <div class="col-12">
    <div id="profile" class="row m-1 p-0">
        <b-img id="profile-img" src="@/assets/profile.png" class="col-8 m-0 p-0 mx-auto border-black rounded-circle"/>
        <span id="profile-username" class="col-12 mx-auto p-0 w-100">@{{username}}</span>
        <div id="rank-images" class="col-12 mx-auto p-0">
            <b-img  src="@/assets/rank.png" class="rank-img rank-first col-11 mx-auto p-0 "/>
            <b-img  src="@/assets/rank-right.png" class="rank-img rank-second col-11 mx-auto p-0 "/>
            <b-img  src="@/assets/rank-left.png" class="rank-img rank-second col-11 mx-auto p-0 "/>
        </div>
    </div>
    <div class="col-12 separator mt-3">
        <div @click="profileOptions()" class="btn-profile col-4 m-0 p-0 my-auto mx-auto btn">Perfil</div>
    </div>
        <div v-show="profileOptionsShow" class="more-options-show row m-2 p-0 mx-auto animated slideInLeft">
            <div class="btn-profile p-0 col-3 m-1 mx-auto btn">Editar</div>
            <div class="btn-profile p-0 col-3 m-1 mx-auto btn">Rank</div>
            <div class="btn-profile p-0 col-3 m-1 mx-auto btn">teste 1</div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            rankMouse: false,
            username: 'Usuario_12341234',
            profileOptionsShow: true,
            effectProfile: ''
        }
    },
    methods: {
        profileOptions(){
            this.profileOptionsShow = !this.profileOptionsShow
            if (this.profileOptionsShow) {
                this.effectProfile = 'fadeInDown'
            } else {
                this.effectProfile = 'fadeOutDown'
            }
        }
    }
}
</script>

<style scoped>
/* PROFILE */
#profile {
    position: relative;
}
#rank-images {
    position: absolute;
    bottom: 30%;
}
#profile-username {
    position: absolute;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    z-index: 4;
    font-size: 1vw;
    max-width: 100%;
    bottom: 2.5%;
}
.rank-img {
    position: absolute;
    left: 0;
    right: 0;
}
.rank-first {
    z-index: 2;
}
.rank-second {
    z-index: -1;
}

/* SEPARATOR PROFILE AND MENU */
.separator {
    display    : flex;
    align-items: center;
    text-align : center;
}
.separator::before, .separator::after {
    content      : '';
    flex         : 1;
    border-bottom: 1px solid black;
}
.separator::before {
    margin-right: .25em;
}
.separator::after {
    margin-left: .25em;
}

/* BUTTON PROFILE */
.btn-profile {
    background-color: var(--fifth-color);
    text-transform: none;
    font-family: Georgia, 'Times New Roman', Times, serif;  
}
.btn-profile:hover {
    background-color: var(--fourth-color);
}
</style>