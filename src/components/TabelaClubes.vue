<template>
	<div>
		<input type="text" class="form-control" v-model="busca" />
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Nome</th>
					<th v-for="(coluna, indice) in ordem.colunas">
						<a href="#" @click.prevent="ordenar(indice)" class="semSub">{{ coluna | ucwords }}</a>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(team, indice) in timesFiltrados" :class="{ 'table-success': indice < 3 }" :style="{ 'font-size': indice < 3 ? '17px' : '15px' }">
					<td>
						<clube :club="team"></clube>
					</td>
					<td>{{ team.pontos }}</td>
					<td>{{ team.gm }}</td>
					<td>{{ team.gs }}</td>
					<td>{{ team.saldo }}</td>
				</tr>
			</tbody>
		</table>
		<clubes-libertadores :times="timesOrdenados"></clubes-libertadores>
		<clubes-rebaixados :times="timesOrdenados"></clubes-rebaixados>
	</div>
</template>

<script>
	import _ from 'lodash';
	// O símbolo "_" está recebendo o lodash dentro deste arquivo, assim ele pode ser usado na forma "_.filter"
	// Se está na node_modules pode ser importado aqui tranquilamente
	export default {
		// props: ['times'],
		inject: ['timesColecao'],
		// inject injeta uma informação que está num elemento pai, nesse caso foi instância vue
		data() {
			return {
				busca: '',
				ordem: {
					colunas: ['pontos', 'gm', 'gs', 'saldo'],
					orientacao: ['desc', 'desc', 'asc', 'saldo']
				},
				times: this.timesColecao
				// Quando se recebe a injeção de algo é importante que se defina uma propriedade pra capturar essa informação,
				// é por isso que esse "times:" está aqui
				// Para somente acessar a informação, pode-se usar somente o inject, mas se a intenção é alterar algo
				// precisa ser criado um elemento no data()
			};
		},
		computed: {
			timesFiltrados() {
				var self = this; // assim como nos outros lugares, esse this refere-se à instância Vue
				return _.filter(this.timesOrdenados, function (equipe) {
					var pesquisa = self.busca.toLowerCase(); // o que foi digitado no input (identificado com v-model="busca") em minúsculo
					return equipe.nome.toLowerCase().indexOf(pesquisa) >= 0; // retorna os elementos onde a função é true,
					// no caso, quando o string digitado iniciar na posição 0 ou nas seguintes do nome, isto é, que ele exista
					// o parâmetro "equipe" aqui representa cada elemento testado da coleção
				});
				// filter(a coleção que vai ser filtrada, a condição do que será retornado)
				//  _.orderBy e _.filter são métodos do Lodash
			},

			timesOrdenados() {
				return _.orderBy(this.times, this.ordem.colunas, this.ordem.orientacao);
				// orderBy(aquilo que vai ser ordenado, a coluna que orientará, a forma de ordenação[asc ou desc])
				// Esse "this.times" se refere ao "times: this.timesColecao" que está dentro de data() neste componente
			}
		},
		methods: {
			ordenar(indice) {
				//assim não funciona:
				//this.ordem.orientacao[indice] = this.ordem.orientacao[indice]=='desc' ? 'asc' : 'desc';

				this.$set(this.ordem.orientacao, indice, this.ordem.orientacao[indice] == 'desc' ? 'asc' : 'desc');
				// como "orientação" não está no nível primário (o nível de "ordem", "times", "novoJogo", "visao"),
				// a reatividade do Vue.js não é disparada, sendo necessário utilizar o this.$set para que ela aconteça
				// descrição: this.$set(array, posição, novo valor)
			}
		}
	};
</script>

<style scoped>
	.semSub {
		text-decoration: none;
	}
</style>
