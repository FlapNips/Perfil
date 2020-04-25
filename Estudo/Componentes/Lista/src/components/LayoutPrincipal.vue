<template>
    <div id="borda">
        <Nomes/>
        <Resultados/>
    </div>

</template>
<script>
    import Nomes from "./Nomes";
    import Resultados from "./Resultados";

    export default {
        name: 'LayoutPrincipal',
        components: {Nomes, Resultados},
    }
</script>

<style scoped>
    #borda {
        display: flex;
        flex-direction: row;
        width: 900px;
        height: 400px;
        background: aqua;
        border: black solid 2px;
        border-radius: 5px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
</style>
