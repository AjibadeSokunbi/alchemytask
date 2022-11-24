const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/evm-utils");
require("dotenv").config();


const MKEY = process.env.MKEY;
const runApp = async () => {
  await Moralis.start({
    apiKey: MKEY,
    // ...and any other configuration
  });
  
  const address = "0xB8c77482e45F1F44dE1745F52C74426C631bDD52";

    const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getTokenTransfers({
        address,
        chain,
    });
  
  console.log((response.raw.value / 1E18).toFixed(2));
  // console.log(response.raw.value);
  
}

runApp();