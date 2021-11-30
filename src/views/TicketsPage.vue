<template>
	<section class="hero is-medium">
		<div class="container">
			<div class="hero-body">
				<h1 class="title">Tickets</h1>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="container">
			<h1>Current Tickets</h1>
			<div class="tickets">
				<Loading v-if="!ticketData"/>
				<div class="current-tickets" v-else>
					
				</div>
			</div>
		</div>
		
	</section>
</template>

<script>
</script>

<style>
</style>
