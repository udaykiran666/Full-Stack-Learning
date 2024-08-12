

// var users = [{
    //     name: 'satish',
    //     kidneys: [
    //         {
    //         healthy:true
    //     }, {healthy:false
    //     }]
    // }]
    
    // app.get("/", function(req, res){
    //     const LengthOfKidneys = users[0].kidneys.length;
    //     const NumberOfHealthyKidneys = users[0].kidneys.filter(user => user.healthy).length;
    //     const NumberOfUnHealthyKidneys = LengthOfKidneys - NumberOfHealthyKidneys;
    //     console.log(users[0])
    //     res.json({
    //         LengthOfKidneys,
    //         NumberOfHealthyKidneys,
    //         NumberOfUnHealthyKidneys
    //     })
    // })
    
    // app.post("/", function(req, res){
    //     const isHealthy = req.body.isHealthy;
    //     users[0].kidneys.push({
    //         healthy: isHealthy
    //     });
    //     res.json({
    //         message: 'Done'
    //     })
    // })
    
    // app.put("/", function(req, res){
    //     for(let i=0; i<users[0].kidneys.length; i++){
    //         users[0].kidneys[i].healthy = true;
    //     }
    //     res.json({});
    // })
    
    // app.delete("/", function(req, res){
    //     users[0].kidneys = users[0].kidneys.filter(user => user.healthy);
    //     res.json(users[0].kidneys);
    
    //     })
    // const arr = [1,2,3];
    // const arr1 = arr.map(i=>i*2);
    // console.log(arr1);
    
    // function oldone(array, callbackfn){
    //     return array.filter(callbackfn);
    // }
    
    // const array = [1,2,3]
    // const callbackfn = num => num>2;
    // console.log(oldone(array, callbackfn));
    
    // function oldone(array, callbackfn){
    //     return array.map(callbackfn);
    // }
    
    // const array = [1,2,3]
    // const callbackfn = num => num*2;
    // console.log(oldone(array, callbackfn));
    // const formatDescription = (description) => {
    //     return description.split('\r\n').map((item, index) => item.trim());
    //   };
      
    //   const description = "MRF Warrior Gold English Willow Cricket Bat Size Men is latest launch bat of Virat Kohli's Golden Era.\r\n    The combination of translucent stickers with gold of MRF Warrior bat make this extremely attractive.\r\n    MRF Warrior Gold bat has thick edges, curved blade and higher sweet spot for destructive hitting.\r\n    Warrior Gold cricket bat can be used for advanced play level.\r\n    MRF Warrior bat is a traditionally shaped and styled for maximum stability while playing shots.\r\n    MRF cricket bat uses round shape short handle.\r\n    MRF bat comes with 1 bat cover, 1 fiber tape and 1 extra grip.\r\n    Country of origin: Made in India.";
      
    //   const formattedDescription = formatDescription(description);
    //   console.log(formattedDescription);
      
      // Outputting the formatted description as HTML elements in a browser environment (for testing in JSFiddle or CodePen)
      //document.body.innerHTML = formattedDescription.map((item) => `<p>${item}</p>`).join('');
// function sum(n){
//     let count = 0;
//     for(let i=0; i<=n; i++){
//         count += i;
//     }
//     return count;
// }

// // req and res => stands for requets and response
// app.get("/", function(req, res) {
//     const n = req.query.n;
//     const ans = sum(n);
//     //res.send({answer : ans});
//     res.send('Hey you answer is ' + ans);

// creating express server
// node default library => no
// res.send(for sending string and html things) res.json(for sendinf josn things)
//mongodb --. dveeloper instance pass -iXNgviWJxdYKxEVo or pkzlEBywwV6t6ZOH
// postgress cloud db : postgresql://test_owner:Y8ZDPFbx2hiJ@ep-little-violet-a517ldem.us-east-2.aws.neon.tech/test?sslmode=require
// mongo cloud db : mongodb+srv://admin1:pkzlEBywwV6t6ZOH@cluster0.yuplhry.mongodb.net/

const express = require("express"); //This line imports the Express module, which is a web framework for Node.js. 
                                    //It simplifies the process of handling HTTP requests and responses.

const app = express(); // this will create an instance where we can use this in middlewares and routes

app.use(express.json()); // When a client sends a request to an Express.js server, the body of the request may contain 
                        // JSON data. However, by default, Express.js does not automatically parse this JSON data. 
                        // To handle this, you need to use middleware that can read the request body and parse it into 
                        // a JavaScript object.


// we need to use next in express when we're using middlewares or prechecks else our site will be hung out...
//the next middleware or route handler. If next() is not called, the server does not know to proceed, and the request is left hanging.
//This is because Express is designed to wait for the middleware to finish before moving on to the next middleware or route handler.
//If next() is not called, the server does not know to proceed, and the request is left hanging.

app.get("/health-checkup", function(req, res){
    console.log("hi from fn1");
    // next();
    return res.send("came from fn1");
},function(req, res){
    console.log("hi from fn2");
    res.send("Hey we have stopped the hung of the server")
});

app.listen(3001);