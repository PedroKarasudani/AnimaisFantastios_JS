export default class initFuncionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);

    this.activeClass = activeClass;
  }

  dadosFunciomento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAtual = new Date();
    this.diaAtual = this.dataAtual.getDay();
    this.horarioAtual = this.dataAtual.getUTCHours() - 3 + 24;
  }

  estaAberto() {
    this.semanaAberto = this.diasSemana.indexOf(this.diaAtual) !== -1;
    this.horarioAberto =
      this.horarioSemana[0] <= this.horarioAtual &&
      this.horarioSemana[1] > this.horarioAtual;
    return this.semanaAberto && this.horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFunciomento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
