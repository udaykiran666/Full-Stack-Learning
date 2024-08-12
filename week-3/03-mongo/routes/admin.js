const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const zod = require("zod");
const router = Router();

const signup_schema = zod.object({
    username: zod.string(),
    password: zod.number()
})

const course_schema = zod.object({
    title: zod.string().min(3).max(100),
    description: zod.string().min(10).max(500),
    imageLink: zod.string().url(),
    price: zod.number().positive()
})

// Admin Routes
router.post('/signup',  async (req, res) => {
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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const authentication_data = signup_schema.safeParse(req.headers);
    const body_data = course_schema.safeParse(req.body);
    const {title, description, price, imageLink} = body_data.data;
    const course = await Course.create({title, description, imageLink, price});
    return res.status(201).json({message: "Course created successfully", courseId: course._id});

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const authentication_data = signup_schema.safeParse(req.headers);
    const data = await Course.find({})
    return res.json({courses: data});
});

module.exports = router;