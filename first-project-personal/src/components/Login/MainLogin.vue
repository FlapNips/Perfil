<template>
<div id="layout-main-login">
	<div id="layout-form-login">
		<Effect class="
		col-12
		text-center
		d-none 
		d-md-block
		align-self-center
		"/>
		<div class="col-12 input-login">
			<label for="username">Usuário</label>
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text" id="inputGroupPrepend3">@</span>
				</div>
				<input type="text" maxlength="16" class="form-control" id="username" placeholder="Username" aria-describedby="inputGroupPrepend3" required>
			</div>
		</div>
		<div class="col-12 input-login">
			<label for="pwd">Senha </label>
			<input type="password" maxlength="25" class="form-control" placeholder="Senha" id="pwd"/>
		</div>
		<div class="input-group" style="margin: 20px;">
			<div class="col-6 text-center ">
				<button :class="classRemember" @click="changeRemember" type="button" id="autoLoginButton">
				Lembrar-me
				</button>
			</div>
			<div class="col-6 text-center">
				<button class="btn btn-primary">Entrar</button>
			</div>
		</div>
		<div class="separator">OU</div>
		<div class="btn btn-link mx-auto" style="width: 100%;">Esqueceu a senha?</div>
	</div>
	<table  id="outro" class="col-12 align-middle">
		<tbody>
			<tr>
				<td class="col-sm-6 my-auto">Junte-se a nós!</td>
				<td class="col-6 align-middle my-auto">
				<button class="btn btn-dark" style="width: 200px;">Cadastre-se</button>
				</td>
			</tr>
		</tbody>
	</table>
	<div id="circle-animate">
		<div class="outer-ring center"></div>
		<div class="inner-ring center"></div>
	</div>
</div>
</template>

<script>
import Effect from './Effect.vue'

export default {
	components: {
		Effect
	},
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
<style scoped>
#outro {
	display         : block;
	border          : 2px solid;
	width           : 100%;
	height          : 100px;
	border-radius   : 20px;
	background-color: var(--first-color);
	margin-top      : 20px;
	padding         : 20px;
	z-index         : 1;
}
#layout-main-login {
	position        : relative;
	background-color: var(--first-color);
}
#layout-form-login {
	display         : block;
	border          : 2px solid;
	border-radius   : 20px;
	background-color: var(--first-color);
	margin          : 0;
	padding         : 20px;
	height          : max-content;
	z-index         : 1;
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
#circle-animate {
	position       : absolute;
	left           : calc(50% - 400px);
	top            : calc(50% - 400px);
	z-index        : -1;
	width          : 800px;
	height         : 800px;
	overflow       : hidden;
	flex-wrap      : wrap;
	justify-content: center;
	align-items    : center;
}
.center {
  margin: 0 auto;
}

.outer-ring {
	position        : absolute;
	z-index         : -1;
	left            : calc(50% - 400px);
	top             : calc(50% - 400px);
	width           : 800px;
	height          : 800px;
	background-image: linear-gradient(135deg, var(--first-color) 0%, var(--second-color) 5%, var(--third-color) 15%, var(--fourth-color) 50%, var(--fifth-color) 100%);
	border-radius   : 50%;

	/*  Rotate  */
	animation-duration       : 4s;
	animation-name           : rotate;
	animation-iteration-count: infinite;
}

.inner-ring {
	z-index         : -1;
	position        : absolute;
	left            : calc(50% - 375px);
	top             : calc(50% - 375px);
	width           : 750px;
	height          : 750px;
	background-color: white;
	border-radius   : 50%;
}

@keyframes rotate {
	0% {
	transform: rotate(0deg);
	}
	100% {
	transform: rotate(360deg);
	}
}
</style>