<template>
    <div>
        <input v-model="nameadd"  placeholder="Adicionar Pessoa">
        <button @click="adcNome">Adicionar</button>
        <button @click="removeNome">Remover</button>
        <button >Cancelar</button>
    </div>
</template>
<script>
    import barramento from "@/barramento";

    export default {
        name: "AddUser",
        data: function () {
            return {
                testenu: {},
                nameadd: '',
                newId: 0,
                lista: []
            }
        },
        methods: {
            adcNome: function () {
                var lastItemIndex = (this.lista.length);
                this.lista.push({id: lastItemIndex, nome:this.nameadd.toString()});
                barramento.$emit("addUsers", this.lista);
            },
            removeNome: function () {
                barramento.$emit('removeUser', this.nameadd)
            },
        }
    }
</script>

<style scoped>

    div {
        width: 90%;
    }
</style>