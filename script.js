// script.js - Apex Mining Consultants - Payment Dropdown Logic

document.addEventListener('DOMContentLoaded', function() {
  // Find the dropdown on payments.html
  const coinSelect = document.getElementById('coin');
  
  // If no dropdown exists on this page, exit quietly (safe for other pages)
  if (!coinSelect) return;

  const addressBox = document.getElementById('address-box');
  const coinNameEl = document.getElementById('coin-name');
  const addrEl = document.getElementById('addr');

  // Listen for dropdown change
  coinSelect.addEventListener('change', function() {
    const selected = this.value;

    // Hide box if no selection
    if (!selected) {
      addressBox.style.display = 'none';
      return;
    }

    let coinFullName = '';
    let walletAddress = '';

    // Replace these with YOUR REAL wallet addresses
    switch(selected) {
      case 'btc':
        coinFullName = 'Bitcoin (BTC)';
        walletAddress = 'bc1qYOUR_BTC_WALLET_ADDRESS_HERE'; // ← PUT YOUR BTC ADDRESS
        break;
      case 'ltc':
        coinFullName = 'Litecoin (LTC)';
        walletAddress = 'ltc1qYOUR_LTC_WALLET_ADDRESS_HERE';
        break;
      case 'eth':
        coinFullName = 'Ethereum (ERC-20)';
        walletAddress = '0xYOUR_ETH_ADDRESS_HERE';
        break;
      case 'usdt':
        coinFullName = 'USDT (ERC-20)';
        walletAddress = '0xYOUR_USDT_ADDRESS_HERE';
        break;
      case 'xmr':
        coinFullName = 'Monero (XMR)';
        walletAddress = 'YOUR_XMR_ADDRESS_HERE';
        break;
      default:
        coinFullName = 'Unknown Coin';
        walletAddress = 'N/A – Select a valid option';
    }

    // Update display
    coinNameEl.textContent = coinFullName;
    addrEl.textContent = walletAddress;
    addressBox.style.display = 'block';
  });
});
