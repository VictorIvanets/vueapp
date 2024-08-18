<template>
	<div class="auth">
		<h2>Register</h2>

		<form>
			<input type="text" placeholder="name" />
			<input type="text" placeholder="e-mail" />
			<input type="text" placeholder="password" />
		</form>

		<button class="auth__btn" @click="this.registerWin()">register</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'register',
		}
	},
	props: {
		registerWin: Function,
	},
}
</script>
