// coinGeckoWidget.js

function loadTokenDetails(tokenName) {
  const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${tokenName}&order=market_cap_desc&per_page=1&page=1&sparkline=false`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const tokenDetails = extractTokenDetails(data);
      renderTokenDetails(tokenDetails);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

function extractTokenDetails(data) {
  return {
    name: data[0].name,
    marketCap: data[0].market_cap,
    currentPrice: data[0].current_price,
    tradingVolume: data[0].total_volume,
  };
}

function renderTokenDetails(tokenDetails) {
  const widgetContainer = document.getElementById("coinGeckoWidget");

  widgetContainer.innerHTML = `
    <div class="header">
      <h2>${tokenDetails.name} Details</h2>
    </div>
    <div class="section">
      <p><strong>Token Name:</strong> ${tokenDetails.name}</p>
      <p><strong>Market Cap:</strong> $${tokenDetails.marketCap.toLocaleString()}</p>
      <p><strong>Current Price:</strong> $${tokenDetails.currentPrice.toLocaleString()}</p>
      <p><strong>24-Hour Trading Volume:</strong> $${tokenDetails.tradingVolume.toLocaleString()}</p>
    </div>
  `;
}

// Embed this script in your HTML and initialize the widget with a token name
// Example: Display Ethereum token details
loadTokenDetails("ethereum");
