<template>
    <div>
        <input id="teste" v-model="nameadd"  placeholder="Adicionar Pessoa">
        <button @click="adcNome">Adicionar</button>
        <button @click="removeNome">Remover</button>
        <button >Cancelar</button>
    </div>
</template>
<script>
    import barramento from "@/barramento";

    export default {
        name: "Adicionar",
        props: [
            'teste'
        ],
        data: function () {
            return {
                testenu: {},
                nameadd: '',
                newId: 0,
                lastItemIndex: Number,
                lista: []
            }
        },
        methods: {
            adcNome: function () {
                this.lastItemIndex = (this.lista.length);
                this.lista.push({nome: this.nameadd.toString()});
                barramento.$emit("addUser", this.lista);
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