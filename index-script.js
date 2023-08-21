/* in this script we fetch information in main.js and now useing fetch api information 
and passing coin index witch user sleeced to coins.html with query parametrs*/




/* first of all need to set our HTML element witch hosting information */
/* this HTML element  hosting four major coin */
const maincoinContainer = document.querySelector(".mainCoin-container");
/* and this HTML element hosting all coins almost 50 coin */
const tableRow = document.querySelector(".table-row");
/* this function filling HTML element witch hosting info and we use fetch api information */
 function getMarketValue(){
  /* step one/get four major coins information */
  let fourth = info.slice(0, 4);
  fourth.forEach((element) => {
    /* we need price with five decimal places here for preview*/
    const roundedPrice = parseFloat(element.price).toFixed(5);
    /* we need change backgroundColor to red or green if it's profit or Damage for preview*/
    const changeValue = parseFloat(element.change);

    let backgroundColor = "";
    if (changeValue < 0) {
      backgroundColor = "red";
    } else if (changeValue > 0) {
      backgroundColor = "green";
    }
    
    /* adding four major coin information to our page */
    maincoinContainer.innerHTML += `
   <div class="coin-container">
     <img src='${element.iconUrl}' class="coin-img">
     <div class="name-change">
       <span class="name">${element.name}</span>
       <span class="change" style="background-color: ${backgroundColor}">${changeValue}</span>
     </div>
     <div class="coin-value">$ ${roundedPrice}</div>
     </div>
   `;
  });
  /* step two/get all coins information */
  info.forEach((element, index) => {
        /* we need price with five decimal places here  for table*/
    const roundedPrice = parseFloat(element.price).toFixed(5);
        /* we need change Color to red or green if it's profit or Damage for table*/
    const changeValue = parseFloat(element.change);

    let color = "";
    if (changeValue < 0) {
      color = "red";
    } else if (changeValue > 0) {
      color = "green";
    }
    /* we need add point dots to marketCap  */
    const formattedMarketCap = parseFloat(element.marketCap).toLocaleString();
        /* adding coins information to our page */
      /* we need hide loading image */
    loadingImage.style.display = 'none';
    tableRow.innerHTML += `
     <div class="table-coins" onclick="show(this)" >
        <span class="marketValue">$  ${formattedMarketCap} </span>
        <span class="change" style="color: ${color}">${element.change} per24h</span>
        <span class="price">$  ${roundedPrice}</span>
        <div class="name"><img src="${element.iconUrl}" alt="${element.name}"><span>${element.name}</span></div>
        <small>${index}</small>
     </div> 
   `;
   
  });
}

/* handling click event  witch user clicked and passing this coin index (exist in api) to open new page */
function show (infoBox){
  /* getting coin index witch we added that to small tag in step two */
  var smallElement = infoBox.querySelector('small');
  var coinIndex=smallElement.innerHTML;
 /* passing coin index to new page with query parameter */
 /* for proccing this action we  need to open coin-script.js */
  window.open(`coins.html?Index=${coinIndex}`, '_blank');
}
/* for getting information in our page with coin information first need to fetch api until fetch is't done we can't run  getMarketValue() so we have to wait for fetch api for this is  reason for useing aysnec  */
async function main(){
 await fetchApi()
  getMarketValue()
}
main()
