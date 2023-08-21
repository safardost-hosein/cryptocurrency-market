/* in this script  we fetch information in main.js and now useing fetch api information 
and handling click event and getting coin index (user sleceted this coin for more information )*/


/* first of all need to get coin index that passed with query parameters */
const params = new URLSearchParams(window.location.search);
const index = params.get("Index");
/* this HTML element hosting coin information the user is curious about */
let coinTraking = document.querySelector(".coin-traking");

/* after getting coin index time to use that index and exteract that coin with function add() */
function add() {
  /* We put the coin information the user is curious about in seletedCoin */
  let seletedCoin =info[index]
  /* we need hide loading image */
  loadingImage.style.display = 'none';
  /* step one/adding coin information the user is curious about to our page */
  coinTraking.innerHTML += `
<div class="p2-coins">
      <div class="figur">
        <img src="${seletedCoin.iconUrl}" alt="">
        <p>Name: ${seletedCoin.name}</p>
        <p>Rank: ${seletedCoin.rank}</p>
      </div>
      <div class="market">
        <p class="symbol">Symbol: ${seletedCoin.symbol}</p>
        <p class="price">$ Price: ${seletedCoin.price} </p>
        <p class="change">24hchange: ${seletedCoin.change}%</p>
        <p class="change">btcPrice: ${seletedCoin.btcPrice}</p>
        </div>
      </div>
     
   `;
   /* step two/buliding liner chart with chart.js liberary */
   const data = {
    labels: Array.from({ length: 24 }, (_, i) => i),
    datasets: [
      {
        label: " تغییرات قیمت/ساعت",
        data: seletedCoin.sparkline,
        borderColor: "white",
        fill: true,
      },
    ],
  };
  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
    },
  };

  const myChart = new Chart(document.querySelector(".myChart"), config);

}
/* for getting information to our page with coin information first need to fetch api until fetch is't done we can't run  getMarketValue() so we have to wait for fetch api for this is  reason for useing aysnec  */

async function main(){
  await fetchApi()
  add()
 }
 main()

