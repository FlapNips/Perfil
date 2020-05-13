<template>
<div>
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
            <input type="text" maxlength="16" class="form-control" id="username" placeholder="Username" aria-describedby="inputGroupPrepend3" required>
        </div>
	</div>
    <div class="input-login">
        <label for="pwd">
            Senha 
        </label>
        <input type="password" maxlength="25" class="form-control" placeholder="Senha" id="pwd"/>
    </div>
    <div class="input-group" style="margin: 20px;">
        <div class="col-6 text-center ">
            <button :class="classRemember" @click="changeRemember" type="button" id="autoLoginButton">
				Lembrar-me
            </button>
        </div>
        <div class="col-6 text-center">
            <button class="btn btn-primary">
            Entrar
            </button>
        </div>
    </div>
    <div class="separator">
        OU
    </div>
    <div class="btn btn-link mx-auto" style="width: 100%;">
        Esqueceu a senha?
    </div>
</div>
</template>

<script>
export default {
	data() {
		return {
			remember: true,
			classRemember: 'btn btn-success'
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