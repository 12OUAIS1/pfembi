const express = require("express");
const app = express();
const auth = require("./routes/auth");
const card = require("./routes/carte");
const offre = require("./routes/offre");
const reclamation = require("./routes/reclamation");
const cors = require('cors'); 

require("./cnx/cnx");
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("hello")
});
 
app.use("/api/v1", auth);
app.use("/api/v2",card);
app.use("/api/v3",offre);
app.use("/api/v4",reclamation);
app.listen(1000,() => {
  console.log("started");
}
);