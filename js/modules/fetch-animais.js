import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const numerosGrid = document.querySelector(".numeros-grid");
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    numerosGrid.appendChild(div);
  }

  async function initAsync(url) {
    try {
      const animaisResponse = fetch(url);
      const animaisJSON = await (await animaisResponse).json();

      animaisJSON.forEach((animal) => {
        createAnimal(animal);
      });
      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        "ativo"
      );
      animaNumeros.init();
    } catch (error) {
      console.log(error);
    }
  }
  initAsync("./animais.json");
}
