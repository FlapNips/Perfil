<template>
    <div id="borda">
        <Users/>
        <Results/>
    </div>

</template>
<script>
    import Users from "@/components/Users";
    import Results from "@/components/Results";

    export default {
        name: 'LayoutMain',
        components: {Users, Results},
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
