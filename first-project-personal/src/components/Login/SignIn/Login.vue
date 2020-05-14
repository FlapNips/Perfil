<template>
<div class="border-login">
    <slot></slot>
    <div class="input-login">
		<label for="username">
        Usuário
        </label>
		<div class="input-group">
			<div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend3">
            @
            </span>
            </div>
            <input type="text" maxlength="16" class="form-control" id="username" placeholder="Usuário" aria-describedby="inputGroupPrepend3" required>
        </div>
	</div>
    <div class="input-login">
        <label for="pwd">
            Senha 
        </label>
        <input type="password" maxlength="25" class="form-control" placeholder="Senha" id="pwd"/>
    </div>
    <div class="input-group mx-auto justify-content-center m-1">
        <div class="col-12 m-1">
            <button :class="classRemember" class="col-12" @click="changeRemember" type="button">
				Lembrar-me
            </button>
        </div>
        <div class="col-12 m-1">
            <button class="btn btn-primary col-12">
            Entrar
            </button>
        </div>
    </div>
    <div class="separator">
        OU
    </div>
    <div class="row justify-content-center">
        <div class="btn btn-link mx-auto m-2 col-6">
            Esqueceu a senha?
        </div>
        <div class="btn btn-link mx-auto m-2 col-6">
            Junte-se a nós !
        </div>
    </div>
</div>
</template>

<script>
export default {
	data() {
		return {
			remember: false,
			classRemember: 'btn btn-danger'
		}
	},
	methods: {
		changeRemember() {
			this.remember = !this.remember;
			if(this.remember){
				this.classRemember = 'btn btn-success'
			} else {
				this.classRemember = 'btn btn-danger'
			}
		}
	}
}
</script>

<style>
.border-login {
    border: 1px solid black;
    border-radius: 5%;
}
.input-login {
	margin         : 10px;
	justify-content: center;
}
.separator {
    display    : flex;
    align-items: center;
    text-align : center;
}
.separator::before, .separator::after {
    content      : '';
    flex         : 1;
    border-bottom: 1px solid #000;
}
.separator::before {
    margin-right: .25em;
}
.separator::after {
    margin-left: .25em;
}
</style>