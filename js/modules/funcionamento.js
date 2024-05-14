export default function initFuncionamento() {}

const funcionamento = document.querySelector("[data-semana]");
const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

const dataAtual = new Date();
const diaAtual = dataAtual.getDay();
const horarioAtual = dataAtual.getHours();

const semanaAberto = diasSemana.indexOf(diaAtual) !== -1;
const horarioAberto =
  horarioSemana[0] <= horarioAtual && horarioSemana[1] > horarioAtual;

if (semanaAberto && horarioAberto) {
  funcionamento.classList.add("aberto");
}
