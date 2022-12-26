import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
// está vindo da pasta node_modules (quando não tem ponto alguma coisa tipo ./ é porque vem de lá)
import App from './App.vue';
import Time from './time';
// se não tivesse usado o "default" em time.js, teria que colocar assim import {Time} from './time'
// como forma de especificaro objeto que está sendo buscado
// além disso, quando é um arquivo .js não precisa colocar a extensão no final
import Titulo from './components/Titulo.vue';
import TabelaClubes from './components/TabelaClubes.vue';
import NovoJogo from './components/NovoJogo.vue';
import Modal from './components/Modal.vue';
import PlacarModal from './components/PlacarModal.vue';
import Clube from './components/Clube.vue';
import ClubesLibertadores from './components/ClubesLibertadores.vue';
import ClubesRebaixados from './components/ClubesRebaixados.vue';
import $ from 'jquery';
import PopperJs from 'popper.js';

window.jQuery = window.$ = $;
window.Popper = PopperJs;
require('bootstrap');

// ESTUDAR MELHOR A IMPORTAÇÃO QUE FOI FEITA DO BOOTSTRAP!

Vue.config.productionTip = false;
// estabelece que o vue.js está sendo executado em desenvolvimento e não em produção

// Vue.filter("ucwords", function (valor) {
//   return valor.charAt(0).toUpperCase() + valor.slice(1);
// });

Vue.filter('ucwords', valor => valor.charAt(0).toUpperCase() + valor.slice(1));
// Em arrow function com apenas um argumento não precisaria colocar parênteses em volta dele
// Por exemplo, "valor => valor.cahrtAt(0)..."

// Vue.component("nome-do-componente-dentro-deste-arquivo", OQueEleContem);
Vue.component('titulo', Titulo);
Vue.component('tabela-clubes', TabelaClubes);
Vue.component('novo-jogo', NovoJogo);
Vue.component('modal', Modal);
Vue.component('placar-modal', PlacarModal);
Vue.component('clube', Clube);
Vue.component('clubes-libertadores', ClubesLibertadores);
Vue.component('clubes-rebaixados', ClubesRebaixados);

new Vue({
	render: h => h(App),
	provide() {
		return {
			timesColecao: [
				new Time('américa-MG', require('./assets/america_mg_60x60.png')),
				new Time('bahia', require('./assets/bahia_60x60.png')),
				new Time('ceará', require('./assets/ceara_60x60.png')),
				new Time('Flamengo', require('./assets/flamengo_60x60.png')),
				new Time('Grêmio', require('./assets/gremio_60x60.png')),
				new Time('Internacional', require('./assets/internacional_60x60.png'))
			]
			// "require(...)" é outra forma de importar além de "import ... from ..."
		};
	}
}).$mount('#app');

// essa é a intância vue da aplicação (que vai mostrar toda a aplicação)
// existe mais de uma forma de iniciar uma instância vue, por isso que essa está diferente do curso anterior
// App.vue está sendo carregado no vue.js (instância vue) e a aplicação está sendo montada ($mount) na tag  que possui
// o id="app" (está no index.html da pasta public)
// Quando o template de App.vue é inserido no lugar da div com id="app" do index.html, o id="app" de App.vue
// acaba sobrescrevendo o id do html
// O "h" visto na função significa hyperScript que tem a ver com HTML, ou seja, estão sendo renderizadas coisas no HTML
// Em alguns lugares, no lugar do "h" é usado o "creteElement"

// Todo arquivo com extensão .vue é um single file component, ou seja, um componente num único arquivo

// A chave "prettier" em package.json foi adicionada, após pesquisas no google, para configurar como o prettier trabalhará

// Em <style scoped></style>, 'scoped' faz com que o estilo se restrinja somente ao componente onde foi inserido

// Nos componentes "Modal" e "PlacarModal", o comando "data-dismiss" dos botões "x" e "Close" teve que ser substituído
// por "data-bs-dismiss", pois na hora de instalar o combo bootstrap, popper.js e jquery, acabou sendo instalado uma versão
// mais recente em que "data-dismiss" (sem o -bs) não funciona o que impedia o modal de ser fechado
