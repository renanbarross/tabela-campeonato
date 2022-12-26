<template>
	<!-- O root element é necessário aqui também -->
	<div class="container">
		<titulo></titulo>
		<div class="row">
			<div class="col-md-12">
				<novo-jogo :times="times"></novo-jogo>
			</div>
		</div>
		<br />
		<div class="row">
			<div class="col-md-12" v-if="visao == 'tabela'">
				<tabela-clubes :times="times"></tabela-clubes>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				times: [],
				// A propriedade "times" aparece aqui, mas provavelmente não está sendo usada por nenhum outro componente,
				// pois o professor inseriu alguns $root em alguns lugares para trazer os times da instância vue.
				// Convém lembrar que antes a lista de times estava aqui.
				timeCasa: null,
				timeFora: null,
				visao: 'tabela'
			};
		},
		methods: {
			showTabela(event) {
				console.log(event);
				this.visao = 'tabela';
			},
			showPlacar({ timeCasa, timeFora }) {
				this.timeCasa = timeCasa;
				this.timeFora = timeFora;
				this.visao = 'placar';
			}
		}
	};
	// O export está exportando as configurações de App.vue para serem importadas no main.js
	// Nos components vão os elementos filhos
	// Se for exportar várias coisas, não pode usar o "default"
</script>
