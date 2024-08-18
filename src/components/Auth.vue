<template>
	<div class="auth">
		<h2>Auth</h2>
        <form>

                <input type="text" placeholder="name">
                <input type="text" placeholder="password">

        </form>
        <button class="auth__btn" @click="this.authWin()">auth</button>

	</div>
</template>

<script>

export default {
	data() {
		return {
			title: 'Auth',
		}
	},
	props: {
		authWin: Function,
	},
}
</script>