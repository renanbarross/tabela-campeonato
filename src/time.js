export default class {
	constructor(nome, escudo) {
		this.nome = nome;
		this.escudo = escudo;
		this.pontos = 0;
		this.gm = 0;
		this.gs = 0;
		this.saldo = 0;
	}

	fimJogo(timeVisitante, golsMarcados, golsSofridos) {
		if (this.foiEmpate(golsMarcados, golsSofridos)) {
			this.empate(golsMarcados, golsSofridos);
			timeVisitante.empate(golsMarcados, golsSofridos);
		}

		if (this.foiVitoria(golsMarcados, golsSofridos)) {
			this.vitoria(golsMarcados, golsSofridos);
			timeVisitante.derrota(golsSofridos, golsMarcados);
		}

		if (this.foiDerrota(golsMarcados, golsSofridos)) {
			this.derrota(golsMarcados, golsSofridos);
			timeVisitante.vitoria(golsSofridos, golsMarcados);
		}

		/*
    O professor tinha usado um if + else nessa parte do foiVitoria, ou seja, não existia a função foiDerrota;
    Isso dava problema na hora do empate, pois o navegador lia o primeiro if, confirmava que houve empate e atribuia
    gols e pontos, chegava no segundo e recusava vitória, dado que na função foiVitoria golsMarcados > golsSofridos,
    porém, qaundo caía no else da derrota ele atribuía gols e pontos novamente, só que dessa vez relacionados à derrota,
    isso porque o else de > é <= e não <, ou seja, números iguais eram vistos como derrota também;
    Felizmente foi consertado!

    Outra solução seria colocar um return; após "timeVisitante.empate..." dentro das chaves do primeiro if
    Dentre outras utilidades, o return serve para encerrar a execução de uma função naquele ponto, ou seja,
    Não iria ler o if else que viria na sequência.
    */
	}

	foiEmpate(golsMarcados, golsSofridos) {
		return golsMarcados === golsSofridos;
	} // retorna se a afirmação é true ou false

	foiVitoria(golsMarcados, golsSofridos) {
		return golsMarcados > golsSofridos;
	} // retorna se a afirmação é true ou false

	foiDerrota(golsMarcados, golsSofridos) {
		return golsMarcados < golsSofridos;
	} // retorna se a afirmação é true ou false

	empate(golsMarcados, golsSofridos) {
		this.atualizarInfo(1, golsMarcados, golsSofridos);
	}

	vitoria(golsMarcados, golsSofridos) {
		this.atualizarInfo(3, golsMarcados, golsSofridos);
	}

	derrota(golsMarcados, golsSofridos) {
		this.atualizarInfo(0, golsMarcados, golsSofridos);
	}

	atualizarInfo(pontos, golsMarcados, golsSofridos) {
		this.pontos += pontos;
		this.gm += golsMarcados;
		this.gs += golsSofridos;
		this.saldo = this.gm - this.gs;
	}
}
