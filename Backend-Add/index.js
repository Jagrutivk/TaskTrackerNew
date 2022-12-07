const express = require ("express");
const app = express();
const axios = require('axios');
const cors = require ("cors");
app.use(cors());

app.post("/tasks/add", async (req, res) => {

  try {
    const response = await axios ({
      url: 'http://localhost:5000/tasks',
      method: "get",
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({message:err});
  }
});

const port = 6000;
app.listen(port, () => {
    console.log("Express listening at 6000");
});