export default function initFetchBitcoin() {
  const spanPreco = document.querySelector(".btc-preco");

  fetch("https://www.blockchain.com/pt/ticker")
    .then((r) => r.json())
    .then((btc) => {
      spanPreco.innerText = (1000 / btc.BRL.buy).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
