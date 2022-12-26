<template>
	<div>
		<button class="btn btn-primary" @click="criarNovoJogo">Novo Jogo</button>
		<placar-modal :time-casa="timeCasa" :time-fora="timeFora" ref="modal"></placar-modal>
	</div>
</template>

<script>
	export default {
		// props: ['times'],
		// A propriedade "times" está sendo recebida, mas não está sendo usada, dado que o professor decidiu usar $root abaixo
		inject: ['timesColecao'],
		data() {
			return {
				timeCasa: null,
				timeFora: null,
				times: this.timesColecao
				// provavelmente esse "times:" não está sendo usado neste componente, mas é bom analisar
			};
		},
		methods: {
			criarNovoJogo() {
				var indiceCasa = Math.floor(Math.random() * 6);
				var indiceFora = Math.floor(Math.random() * 6);
				this.timeCasa = this.timesColecao[indiceCasa];
				this.timeFora = this.timesColecao[indiceFora];
				var modal = this.$refs.modal;
				modal.showModal();

				// this.$refs.modal está trazendo o componente "placar-modal" referenciado no template (ref="modal")
				// a função showModal(), por sua vez, vem do componente "placar-modal"
				// É possível utilizar mais de um $refs na sequencia se precisar pegar referências mais profundas
				// Por exemplo this.$refs.modal.$refs.nome.$refs.outro-nome
			}
		}
	};
</script>
