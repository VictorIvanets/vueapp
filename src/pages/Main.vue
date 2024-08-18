<template>
	<div class="mainpage">
		<carousel v-bind="settings">
			<slide v-for="item in data" :key="item.id">
				<div class="mainpage__item">
					<div class="mainpage__item__imgbox">
						<img
							class="mainpage__item__imgbox__img"
							:src="`https://victorivanets.github.io/pictures/bigl_${item.id}.jpg`"
							alt=""
						/>
					</div>
					<p>Картина: {{ item.name }}</p>
					<p>Рік створення: {{ item.year }}</p>
					<p>Розмір: {{ item.size }}</p>
				</div>
			</slide>
			<template #addons>
				<navigation />
				<pagination />
			</template>
		</carousel>
	</div>
</template>

<script>
import { data } from '@/components/_config'
import '@/sass/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
	data() {
		return {
			data: data,
			settings: {
				itemsToShow: 1,
				wrapAround: true,
				transition: 300,
				// autoplay: 1000,
			},
		}
	},
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
}
</script>
