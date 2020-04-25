<template>
    <div id="principal">
        <div id="resultado">
        Resultados
        </div>
        <template>
        <Adicionar/>
        </template>
    </div>
</template>

<script>
    import Adicionar from "./Adicionar";

    export default {
        name: "Resultados",
        components: { Adicionar},
    }
</script>

<style scoped>
    #principal {
        width: 50%;
        border: black solid 2px;
    }
    #resultado {
        clear: both;
        height: 90%;
    }
</style>