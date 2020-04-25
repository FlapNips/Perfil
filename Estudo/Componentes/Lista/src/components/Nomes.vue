<template>
    <div id="layout">
            <div class="divtop">
                <div>IDs</div>
                <div>Nomes</div>
            </div>
            <ul>
                <li v-for="(identidade) in lista" :key="identidade.id" @click="selectItem">
                    <div class="interno">
                        {{identidade.id}}
                    </div>
                    <div class="interno">
                        {{identidade.nome}}
                    </div>
                </li>
            </ul>
    </div>
</template>

<script>
    import barramento from "@/barramento";
    export default {
        name: "Nomes",
        data: function () {
            return {
                ids: 'numeros',
                nome: 'teste',
                ativado: true,
                lista: [],
            }
        },

        methods: {
            selectItem() {
                console.log('teste')
            },
        },
        created() {
            barramento.$on('addUser', addUser => {
                this.lista = addUser;
            });
            barramento.$on('removeUser', remover => {
                var test = this.lista.indexOf(function(teste){
                    return teste === remover;
                });
                console.log(test);
                }
            )}
        }

</script>

<style scoped>
    #layout {
        width: 50%;
        border: black solid 2px;
        display: flex;
        flex-direction: column;
    }
    .divtop{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        height: 30px;
        width: 100%;
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
    .interno {
        display: flex;
        flex-direction: row;
    }


</style>