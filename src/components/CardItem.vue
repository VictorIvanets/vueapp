

<script>
import { data } from '@/components/_config'

export default {
	data() {
		return {
			item: null
		}
	},
	created(){
		const alias = this.$route.params.alias
		this.item = data.find(i=>i.alias === alias)
	}
}
</script>

<template>
	<div v-if="item" class="carditem">
		<div class="carditem__imgbox">
			<img class="carditem__imgbox__img" :src="`https://victorivanets.github.io/pictures/bigl_${item.id}.jpg`" alt="">
		</div>

		<p>Картина: {{item.name}}</p>
		<p>Рік створення: {{item.year}}</p>
		<p>Розмір: {{item.size}}</p>
		<br>
		<RouterLink style="color: black" :to="`/`">BACK</RouterLink>


	</div>
</template>