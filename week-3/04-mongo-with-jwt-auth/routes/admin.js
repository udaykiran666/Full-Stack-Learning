const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin} = require("../db/index");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const router = Router();

const signup_schema = zod.object({
    username: zod.string(),
    password: zod.number()
})
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const result = signup_schema.safeParse(req.body);
    const { username, password } = result.data;
    const existinguser = await Admin.findOne({username: username, password:password});
    
    if(existinguser){
        res.status(403).json({message: "User already exists"})
    }
    else await Admin.create({username: username, password:password});
    return res.json({ message: 'Admin created successfully' })
    
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const auth_data = signup_schema.safeParse(req.body);
    const {username, password} = auth_data.data;
    const isValidated = await Admin.findOne({username, password});
    if(!isValidated){
        return res.status(401).json({message: "Invalid credentials"})
    }
    const token = jwt.sign({username}, JWT_SECRET);
    res.json({"token":token});
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;