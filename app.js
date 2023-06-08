const express = require("express");
const app = express();
const port = 5500;
app.set("view engine","ejs");
app.get("/", (req, res) => {
  res.render(`index.ejs`);
});
app.get("/fp",(req,res)=>{
    res.render("favouritePerson.ejs")
});
app.get("/fc",(req,res)=>{
    res.render("favouriteCities.ejs")
});
app.get("/fts",(req,res)=>{
    res.render("favouriteTouristSpots.ejs")
});
app.get("/contact",(req,res)=>{
    res.render("contact_info.ejs")
});
app.use(express.static('public'))
app.listen(port, () => {
  console.log(`SERVER LISTENING AT PORT ${port}`);
});