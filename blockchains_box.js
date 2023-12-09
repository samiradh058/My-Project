const blockOptions = document.querySelector(".block-options");

const blockchain1 = {
  image: '<i class="fa-brands fa-bitcoin" style="color: #c9ba1d;"></i>',
  name: "Bitcoin",
  key: "BTC",
  value: "$29,159.07",
  change: 0.13,
};

const blockchain2 = {
  image: '<i class="fa-brands fa-ethereum" style="color: #005cfa;"></i>',
  name: "Ethereum",
  key: "ETH",
  value: "$1,833.64",
  change: -0.19,
};

const blockchain3 = {
  image: '<i class="fa-solid fa-s" style="color: #f00000;"></i>',
  name: "Stellar",
  key: "XML",
  value: "$0.14",
  change: 2.36,
};

const blockchain4 = {
  image: '<i class="fa-solid fa-shield-halved" style="color: #289e1f;"></i>',
  name: "Solana",
  key: "SOL",
  value: "$22.78",
  change: -1.68,
};

const blockchains = [blockchain1, blockchain2, blockchain3, blockchain4];

const displayBlock = function () {
  blockOptions.innerHTML = "";

  blockchains.forEach(function (block, i) {
    const html = `
        <div class="opt">
          <div class="first-row">
            <div class="block-image">${block.image}</div>
            <div class="right-block">
              <div class="buy">Buy</div>
              <div class="trade">Trade</div>
            </div>
          </div>
          <div class="block-name">${block.name} <span>${block.key}</span></div>
          <div class="value">
            <div class="dollars">${block.value}</div>
            <div class="change" style="color: ${block.change> 0? 'green' : 'red'}">${block.change}%</div>
          </div>
        </div> `;

      blockOptions.insertAdjacentHTML('beforeend', html);
  });
};

displayBlock();