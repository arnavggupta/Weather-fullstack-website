const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");


app.set("view engine","hbs");
const staticpath=path.join(__dirname,"/public");


const port=process.env.PORT || 3000;
app.use(express.static(staticpath));


// app.get("/",(req,res)=>{
   
// res.sendFile(path.join(staticpath, "index.html"));
// });

app.get("/home",(req,res)=>{
res.render("index1");
});
app.get("/about",(req,res)=>{
    // console.log("hyy about");
    res.render("about1");
});
app.get("/Weather",(req,res)=>{
res.sendFile(staticpath+"/weathery.html");
});
app.get("*",(req,res)=>{
    res.render("eroor404",{
        eroorMsg:"Oops ! Page Not Found",
    });
});
app.listen(port,()=>{
    console.log(`Server is started at ${port}`);
})