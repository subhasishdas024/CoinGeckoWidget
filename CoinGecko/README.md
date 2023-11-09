# CoinGecko Token Widget

## Overview
The CoinGecko Token Widget is a JavaScript script that fetches and displays token details from CoinGecko for a specified token on your web page. It provides information such as token name, market cap, current price, and 24-hour trading volume.

## Usage Instructions

1. **Include the JavaScript file:**
   - Add the following script tag to your web page to include the CoinGecko Widget script:
     ```html
     <script type="text/javascript" src="coinGeckoWidget.js"></script>
     ```

2. **Create an HTML container:**
   - Create an HTML container where you want the widget to appear on your web page:
     ```html
     <div id="coinGeckoWidget"></div>
     ```

3. **Initialize the widget:**
   - Initialize the widget with the desired token name using JavaScript. Replace 'ethereum' with the name of the token you want to display. Call this function in your JavaScript code:
     ```javascript
     // Example: Display Ethereum token details
     loadTokenDetails("ethereum");
     ```

4. **Updating the widget:**
   - To update the widget with details of a different token, call the `loadTokenDetails` function with the new token name.

## Example
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

<!-- Container to render the widget -->
<div id="coinGeckoWidget"></div>

<!-- Embed the widget script with the desired token name -->
<script type="text/javascript" src="coinGeckoWidget.js"></script>

<!-- Initialize the widget with the desired token name -->
<script>
  // Example: Display Ethereum token details
  loadTokenDetails("ethereum");
</script>

</body>
</html>

