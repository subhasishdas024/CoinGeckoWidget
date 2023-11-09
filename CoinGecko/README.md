# CoinGecko Token Widget

## Overview
The CoinGecko Token Widget is a nifty JavaScript script designed to seamlessly integrate token details from CoinGecko into your web page. Whether you're curious about a token's name, market cap, current price, or 24-hour trading volume, this widget has got you covered.

## Usage Guidelines

1. **Incorporate the JavaScript Magic:**
   - Elevate your web page by adding the enchanting CoinGecko Widget script. Simply insert the following script tag into your HTML:
     ```html
     <script type="text/javascript" src="coinGeckoWidget.js"></script>
     ```

2. **Craft a Home for the Widget:**
   - Carve out a special place on your web page for the widget to flourish:
     ```html
     <div id="coinGeckoWidget"></div>
     ```

3. **Summon the Widget to Action:**
   - Infuse life into the widget by summoning it with the spell of JavaScript. Choose a token to reveal its secrets:
     ```javascript
     // Example: Unveil the mysteries of Ethereum
     loadTokenDetails("ethereum");
     ```

4. **Unleash Limitless Potential:**
   - Feel the power as you effortlessly update the widget with the details of a different token. Simply invoke the `loadTokenDetails` function with the new token name.

## Spellbinding Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CoinGecko Token Widget</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<!-- Witness the magic within this sacred container -->
<div id="coinGeckoWidget"></div>

<!-- Embed the mystical widget script -->
<script type="text/javascript" src="coinGeckoWidget.js"></script>

<!-- Awaken the widget with the chosen token's name -->
<script>
  // Example: Unleash the magic of Ethereum
  loadTokenDetails("ethereum");
</script>

</body>
</html>
