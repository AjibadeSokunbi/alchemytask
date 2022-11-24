const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");
const port = 5000;
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/txs", async (req, res) => {
  
  try {
    const { query } = req;

    const balance =  await Moralis.EvmApi.token.getTokenTransfers({
      address: query.address,
      chain: query.chain,
    });

    const result = balance.raw;
    console.log(result);
    return res.status(200).json({ result });
   
  } catch (e) {
    console.log(e);
    console.log("something went wrong");
    return res.status(400).json();
  }
});



const MKEY = process.env.MKEY;

Moralis.start({
  apiKey: MKEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});