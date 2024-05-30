import AnimaNumeros from "./anima-numeros.js";

export default function feathAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResponse = fetch(url);
      const animaisJSON = await (await animaisResponse).json();

      animaisJSON.forEach((animal) => preencherAnimais(animal));

      animaAnimaisNumeros();
    } catch (error) {
      console.log(error);
    }
  }

  return criarAnimais();
}
