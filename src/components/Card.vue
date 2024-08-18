<template>
	<div class="card">
            <slot name="text"></slot>
            <slot name="img"></slot>
	</div>
</template>

<script>

export default {
	data() {
		return {
		}
	},
	props: {
		item: {
            type: Array
        }
	},
}
</script>