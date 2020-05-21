<template>
    <div id="header-menu" class="justify-content-center row m-0 p-0">
        <div class="col-5 m-1 mr-auto p-0 m-0">
        <b-img
            src="@/assets/profile.png"
            class="img-fluid rounded-circle z-depth-1"
        />
            <b-img id="rank-img" @mouseenter="teste" class="col-3 p-0" src="@/assets/rank.png"/>
        </div>
        <b-sidebar >
            teste
        </b-sidebar>
        <div class="col-6 mx-auto border p-0 m-0">
            <div class="col-12 m-0 p-0">Rank Atual</div>
            <div class="col-12 m-0 p-0">Novato</div>
            <div class="col-12 m-0 p-0">Pontuação</div>
            <div class="col-12 m-0 p-0">9999</div>
        </div>
        <strong class="mx-auto">@Usuário_1212</strong>
        <div class="row m-0 mt-1 p-0">
        <p class="col-12 m-0 p-0 border">
            Descrição.Isso é uma descrição de cinquenta letras.
        </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            teste: false
        }
    }
}
</script>

<style>
#rank-img {
    position: absolute;
    top: 0;
    left: 0;
}
</style>