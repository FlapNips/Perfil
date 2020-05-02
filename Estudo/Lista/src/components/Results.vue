<template>
    <div id = "principal">
    <div id = "resultado">
        Resultados
        </div>
        <template>
        <AddUser/>
        </template>
        <slot>
        </slot>
    </div>

</template>

<script>
    import AddUser from "@/components/AddUser";

    export default {
        name      : "Results",
        components: { AddUser},
    }
</script>

<style scoped>
    #principal {
        width : 50%;
        border: black solid 2px;
    }
    #resultado {
        clear : both;
        height: 90%;
    }
</style>