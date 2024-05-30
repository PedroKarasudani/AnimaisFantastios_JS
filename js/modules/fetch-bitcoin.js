export default function fetchBitcoin(url, target) {
  const spanPreco = document.querySelector(target);

  fetch(url)
    .then((r) => r.json())
    .then((btc) => {
      spanPreco.innerText = (1000 / btc.BRL.buy).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
