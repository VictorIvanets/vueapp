<template>
	<div class="aboutpage">
        <h1>ABOUT</h1>
		<h2>{{ subtitle }}</h2>
	</div>
</template>

<script>
import { app } from '../components/_config'

export default {
	data() {
		return {
			subtitle: app.subtitle,
		}
	},
}
</script>