<template>
	<modal ref="modal">
		<h5 slot="header" class="modal-title">Novo jogo</h5>
		<form action="" class="form-inline">
			<input type="text" class="form-row" v-model="golsCasa" />
			<clube :club="timeCasa" invertido="true" v-if="timeCasa"></clube>
			<span>X</span>
			<clube :club="timeFora" v-if="timeFora"></clube>
			<input type="text" class="form-row" v-model="golsFora" />
		</form>
		<div slot="footer">
			<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
			<button type="button" class="btn btn-primary" @click="resultadoJogo">Fim de jogo</button>
		</div>
	</modal>
</template>

<script>
	export default {
		props: ['timeCasa', 'timeFora'],
		data() {
			return {
				golsCasa: null,
				golsFora: null
			};
		},
		methods: {
			getModal() {
				return this.$refs.modal;
			},
			showModal() {
				this.getModal().show();
			},
			closeModal() {
				this.getModal().close();
			},
			resultadoJogo() {
				var golsMarcados = parseInt(this.golsCasa);
				var golsSofridos = parseInt(this.golsFora);
				this.timeCasa.fimJogo(this.timeFora, golsMarcados, golsSofridos);
				this.golsCasa = null;
				this.golsFora = null;
				this.closeModal();
				// Usando o this.closeModal() aqui, consegue-se ter certeza que o modal vai fechar somente depois
				// de a operação ser terminada, dado que podem haver execuções assíncronas dentro da função
				// (no caso a função resultadoJogo())

				// this.$refs.modal está trazendo o componente "modal" referenciado no template (ref="modal")
				// as funções show() e close(), por sua vez, vêm do componente "modal"
			}
		}
	};
</script>
