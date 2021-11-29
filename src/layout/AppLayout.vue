<template>
	<div>
		<NavbarHeader/>
		<slot></slot>
		<Footer/>
	</div>
</template>

<script>
	import NavbarHeader from '../components/NavbarHeader.vue'
	import Footer from '../components/Footer.vue'
	export default {
		components: {
			NavbarHeader,
			Footer
		}
	}
</script>

<style>
</style>
