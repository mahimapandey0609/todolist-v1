const express = require("express");
const bodyparser= require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
let Items =["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
// app.use(date);
app.use(express.static("public"));
// app.use()
 
app.get("/", function(req,res){
    
    let day = date.getDate();
        
  res.render("list",{listTitle: day , newItems: Items});
  //  console.log(listTitle);
});
app.post("/", function(req, res){
 console.log(req.body);
  Item = req.body.AddItem;
  if(req.body.list === "Work"){
    workItems.push(Item);
    res.redirect("/work");
  }else{
  Items.push(Item);
  res.redirect("/");
  }

});

app.get("/work" , function(req, res){
  res.render("list", {listTitle:"Work List" , newItems: workItems});


});
app.get("/about", function(req, res){
res.render("about");
})

// app.post("/work" , function(req,res){
//   let item = req.body.AddItem;
//   workItems.push(item);
//   res.redirect("/work");
// });

app.listen("3000", function(){
    console.log("This port is reday to use");
});