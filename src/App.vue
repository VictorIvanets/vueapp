<template>
	<div class="wrapper">
		<Header :links="links" :authWin="this.authWin" :registerWin="this.registerWin" />
		<Modal v-if="auth || register">
			<Auth :authWin="this.authWin" v-if="auth" />
			<Register :registerWin="this.registerWin" v-if="register" />
		</Modal>
		<div class="container">
			<RouterView />
		</div>
		<Footer :links="links" />
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Modal from '@/components/Modal.vue'
import Auth from '@/components/Auth.vue'
import Register from '@/components/Register.vue'
import { links } from '@/components/_config'

export default {
	components: { Header, Footer, Modal, Auth, Register },
	data() {
		return {
			links: links,
			auth: false,
			register: false,
		}
	},
	methods: {
		authWin() {
			this.auth = !this.auth
			this.register = false
		},
		registerWin() {
			this.register = !this.register
			this.auth = false
		},
	},
}
</script>
