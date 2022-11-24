
const { Alchemy, Network } = require("alchemy-sdk")
require("dotenv").config();

const KEY = process.env.KEY;


const config = {
  apiKey: KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

async function foo() {
    const res = await alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        toBlock: "latest",
        contractAddresses: ["0xB8c77482e45F1F44dE1745F52C74426C631bDD52"],
        // toAddress: toAddress,
        excludeZeroValue: true,
        category: ["external", "internal", "erc20", "erc721", "erc1155"],
        order: "desc",
      });
       

      

    console.log(res.transfers[0])
}

foo();


  //   const result = res.transfers
  //   let gf = []
  //  const black = result.forEach(product => product.value.toString());
  //  const hh = gf.push(black)
  //  console.log(hh)
  // }
      //   for (const events of res.transfers) {
    //     console.log( events.value, " ",);

    // }}
