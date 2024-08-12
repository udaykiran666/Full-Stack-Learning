// creating express server
// node default library => no
// res.send(for sending string and html things) res.json(for sendinf josn things)
//mongodb --. dveeloper instance pass -iXNgviWJxdYKxEVo or pkzlEBywwV6t6ZOH
// postgress cloud db : postgresql://test_owner:Y8ZDPFbx2hiJ@ep-little-violet-a517ldem.us-east-2.aws.neon.tech/test?sslmode=require
// mongo cloud db : mongodb+srv://admin1:pkzlEBywwV6t6ZOH@cluster0.yuplhry.mongodb.net/

const express = require("express"); //This line imports the Express module, which is a web framework for Node.js. 
                                    //It simplifies the process of handling HTTP requests and responses.

const app = express(); // this will create an instancfiltere where we can use this in middlewares and routes

app.use(express.json());// Middleware to parse JSON bodies 
                        // When a client sends a request to an Express.js server, the body of the request may contain 
                        // JSON data. However, by default, Express.js does not automatically parse this JSON data. 
                        // To handle this, you need to use middleware that can read the request body and parse it into 
                        // a JavaScript object.


//basically globalcatches we can use in so many ways like while running any fucntion if any things fails globalcathe will catch and 
//--thorw error right..but this zod only check the inpu validation with the defined schema
const zod = require("zod");

const schema = zod.array(zod.number());

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (!(username == "uday" && password == "pass")){
        return res.status(400).json({message : "User does not exist"})
    }
    else{
        next();
    }
}


function kidenyMiddleware(req, res, next){
    console.log(req.body)
    const {kidneyId, kidneyId1} = req.body;  //app.user(express.json()); is required as to destructure the json object
    console.log(kidneyId, kidneyId1)

    if (!(kidneyId == "uday" || kidneyId1 == "kiran")){
        return res.status(400).json({message: "Something wrong woth your inputs"})
    }
    else{
        next();
    }
}
app.get("/health-checkup", userMiddleware, kidenyMiddleware, function(req, res){
    console.log("after middle wares")
    res.status(200).json({message: "Your Kidneys are fine!!!"})
});

app.get("/kidney-checkup", (req, res)=>{
    const kidneys = req.body.kidneys;
    console.log(kidneys);
    const kidneyLength = kidneys.length;

    res.send("you have " +  kidneyLength + "kidneys");
})

app.get("/kidney-status", (req, res)=>{
    const kidneysStatus = req.body.kidneys;
    const response = schema.safeParse(kidneysStatus)
    res.send({
        response
    })
})


// global catches.(global error handler)   (u can add this once in your code base and u can forget..cause for all it works like input validation)
// app.use((err, req, res, next)=>{
//     console.log(err.message)
//     res.status(500).json({message: "Somthing went wrong"})
// })
app.listen(3000);