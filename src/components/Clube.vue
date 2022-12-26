<template>
	<div style="display: flex; flex-direction: row">
		<img :src="club.escudo" alt="" class="escudo" :style="{ order: invertido == 'true' ? 2 : 1 }" />
		<span :style="{ order: invertido == 'true' ? 1 : 2 }">{{ club.nome | ucwords }}</span>
	</div>
</template>

<script>
	export default {
		props: ['club', 'invertido']
	};
</script>

<style scoped>
	.escudo {
		width: 30px;
		height: 30px;
	}
</style>
