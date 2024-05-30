<<<<<<< HEAD
export default function fetchBitcoin(url, target) {
  const spanPreco = document.querySelector(target);
=======
export default function initFetchBitcoin() {
  console.log("teste");
  const spanPreco = document.querySelector(".btc-preco");
>>>>>>> main

  fetch(url)
    .then((r) => r.json())
    .then((btc) => {
      spanPreco.innerText = (1000 / btc.BRL.buy).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
