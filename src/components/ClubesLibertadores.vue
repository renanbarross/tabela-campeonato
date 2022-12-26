<template>
	<div>
		<h3>Times classificados para a Libertadores</h3>
		<ul>
			<li v-for="team in timesLibertadores">
				<clube :club="team"></clube>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props: ['times'],
		computed: {
			timesLibertadores() {
				return this.times.slice(0, 3);
			}
		}
	};
</script>
