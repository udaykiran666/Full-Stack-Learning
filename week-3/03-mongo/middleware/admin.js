const {Admin} = require('../db');
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    if (!username || !password) {
        return res.status(400).send("Username and password are required");
    }

    const admin = await Admin.findOne({username: username, password: password})
    if(!admin){
        return res.status(403).json({message:"Admin User does not exist"});
    }
    else next();
}

module.exports = adminMiddleware;