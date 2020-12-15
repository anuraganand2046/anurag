const express= require('express');
const hbs= require("hbs");
const app= express();
const path= require('path');
const port= 8000;
const staticpath= path.join(__dirname, "../public");
const templatepath= path.join(__dirname, "../template/views");
const partialspath= path.join(__dirname, "../template/partials");
app.set('view engine', 'hbs');
app.set("views", templatepath);
hbs.registerPartials(partialspath);
app.get("/", (req, res)=>{
    res.render("index");
});
//app.use(express.static(staticpath));
app.get("/", (req, res) => {
    res.send("Anurag Anand sucks");
});
app.get("*", (req, res) => {
    res.render("404", {
        errorcomment: "Page not found",
    });
})
app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
});