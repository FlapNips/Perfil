<template>
    <div id="layout">
            <div id="principal">
                <div class="divtop">IDs</div>
                <div class="divtop">Nomes</div>
            </div>
            <ul>
                <li  v-for="(identidade) in lista" :key="identidade.id" @click="selectItem">
                    <div class="interno">
                        {{identidade.id}}
                    </div>
                    <div class="interno">
                        {{identidade.nome}}
                    </div>
                </li>
            </ul>
            <Results>
                <p>{{nome}} </p>
            </Results>
    </div>
</template>

<script>
    import barramento from "@/barramento";
    import Results from "@/components/Results";
    
    export default {
        components: {Results},
        name: "Users",
        data: function () {
            return {
                ids: 'numeros',
                nome: 'teste',
                ativado: true,
                hover: false,
                lista: [],
            }
        },

        methods: {
            selectItem() {
                console.log('teste')
            },
        },
        created() {
            barramento.$on('addUsers', addUser => {
                this.lista = addUser;
            });
            barramento.$on('removeUser', remover => {

            var index = this.lista.findIndex((elemento) => elemento.nome == remover)


            this.lista.splice(index,1)
            console.log(index)

            });
        }
    }

</script>

<style scoped>
    #layout {
        width: 50%;
        border: black solid 2px;
        display: flex;
        flex-direction: column;
    }
    #principal{
        display: flex;
        flex-direction: row;
        height: 30px;
        width: 100%;
    }
    .divtop {
        justify-content: center;
        width: 50%;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-top: black solid 2px;
        padding-inline-start: 0;
        overflow: auto;
        margin: 20px;
    }

    li {
        cursor: pointer;
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        height: 30px;
        font-family: Calibri;


    }
    .active {
        background: rgb(173, 173, 173);
    }
    .interno {
        display: flex;
        flex-direction: row;
        width: 50%;
        justify-content: center;
    }


</style>