var express=require('express');

app=express();

//Simple String Response
// res.send()--> response Body
// res.end()---> reponse ending point...
app.get("/one",function (req,res) {
    res.end("This is simple string response ");
});


// Response Status Code
app.get("/three",function (req,res) {
    res.status(201).end();
})



app.get("/test",function (req,res){
    res.end("This is the sample response!");
})



// JSON Response
app.get("/four",function (req,res){

    let MyJsonArray=[
        {
            name:"Zahed Hasan",
            department:"CSE",
            company:"Syscomatic",
            role:"CTO"
        },

        {
            name:"Rakib Ullah",
            department:"CSE",
            company:"Syscomatic",
            role:"CBO"
        },
    ]
    res.json(MyJsonArray);
});


app.get("/status_code",function (req,res){
    res.status(401).end("Unauthorized");
})


app.listen(8000,function () {
    console.log("Server Run Success")
})