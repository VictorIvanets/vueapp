<template>
	<div class="cardbox">
			<div v-for="item in data" :key="item.id">	
				<Card :item="item">
				
					<template v-slot:text>
					<div>
						<p>{{item.id}}</p>
						<p>{{item.name}}</p>
						<p>{{item.year}}</p>
						<p>{{item.size}}</p>
					</div>
					</template>
				
					<template v-slot:img>
					<RouterLink :to="`/carditem/${item.alias}`">
					<div class="card__imgbox">
							<img class="card__imgbox__img" :src="`https://victorivanets.github.io/pictures/bigl_${item.id}.jpg`" alt="">
					</div>
					</RouterLink>
					</template>
				
				</Card>
			</div>
	</div>
</template>
<script>


import Card from '@/components/Card.vue'
import { data } from '@/components/_config'

export default {
	components: { Card},
	data() {
		return {
			data: data,
		}
		
	},
	
}
</script>


<!-- CardItem -->