<template>
	<div>
		<h3>Times rebaixados</h3>
		<ul>
			<li v-for="team in timesRebaixados">
				<clube :club="team"></clube>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props: ['times'],
		computed: {
			timesRebaixados() {
				return this.times.slice(3, 6);
			}
		}
	};
</script>
