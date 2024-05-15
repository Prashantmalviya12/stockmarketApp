const express = require("express");
const server = express();
const axios = require("axios");
const router = express.Router();
const cors = require('cors');

server.get("/", (req, res) => {
  res.json({ msg: "Server Here" });
});

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true
};
server.use(cors(corsOptions));

server.use(express.json());

router.get("/search", async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${query}&outputsize=full&apikey=1D929UECPWWI159Q`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});




router.get("/stocks/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}.BSE&outputsize=full&apikey=XIIB8DLSVGZYQ75U`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: error.message });
  }
});

server.use('/api', router);

server.listen(4000, () => {
  console.log("Server started");
});

//1D929UECPWWI159Q
//J2ROZWF12E1J9I1N
//XIIB8DLSVGZYQ75U