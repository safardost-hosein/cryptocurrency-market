/* HTML elements for side nav */
const humburgerBtn = document.querySelector(".humburgerBtn");
const xBtn = document.querySelector(".xBtn");
const sideNav = document.querySelector(".sideNav");


/* function for greate side nav for both page */
humburgerBtn.addEventListener("click", () => {
    sideNav.style.right = "0";
  });
  xBtn.addEventListener("click", () => {
    sideNav.style.right = "-100%";
  });

  /*HTML loading element animation for both page*/  
  const loadingImage = document.querySelector('.loader');

/* api link */
  const url = "https://api.coinranking.com/v2/coins";
  let info = [];
  /* fetch api */
  async function fetchApi() {
      let response = await fetch(url, {
        headers: {
          "api-key":
            "coinranking0acdfaf2d4ac8129d9448f13804ff87ea0bca068fff50ce3",
        },
      });
      let a = await response.json();
      info = a.data.coins;
      
   
  }

  

