const {User} = require('../db')
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    if (!username || !password) {
        return res.status(400).send("Username and password are required");
    }

    const user = await User.findOne({username: username, password: password})
    if(!user){
        return res.status(403).json({message:"User does not exist"});
    }
    else next();
}


module.exports = userMiddleware;