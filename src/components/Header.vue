<template>
	<div class="header">
		<h2>{{ title }}</h2>
		<div><button @click="authWin()">AUTH</button></div>
		<div><button @click="registerWin()">REGISTER</button></div>

		<ul class="header__items">
			<li v-for="link in links" :key="link.alias">
				<RouterLink :to="link.url">{{ link.title }}</RouterLink>
			</li>
		</ul>
	</div>
</template>

<script>
import { app } from './_config'

export default {
	data() {
		return {
			title: app.title,
		}
	},
	props: {
		links: Array,
		authWin: Function,
		registerWin: Function,
	},
}
</script>
