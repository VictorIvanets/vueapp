<template>
	<div class="footer">
		<ul class="header__items">
			<li v-for="link in links" :key="link.alias">
				<RouterLink :to="link.url">{{ link.title }}</RouterLink>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		links: Array,
	},
}
</script>
