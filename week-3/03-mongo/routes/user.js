const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db");
const zod = require("zod");

const signup_schema = zod.object({
    username: zod.string(),
    password: zod.number()
})
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const result = signup_schema.safeParse(req.body);
    const { username, password } = result.data;
    const existinguser = await User.findOne({username: username, password:password});
    
    if(existinguser){
        res.status(403).json({message: "User already exists"})
    }
    else await User.create({username: username, password:password});
    return res.json({ message: 'User created successfully' })

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const authentication_data = signup_schema.safeParse(req.headers);
    const data = await Course.find({})
    return res.json({courses: data});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const authentication_data = signup_schema.safeParse(req.headers);
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({username: username}, {$push: { purchasedCourses: courseId}})
    return res.status(201).json({ message: 'Course purchased successfully' })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    // const authentication_data = signup_schema.safeParse(req.headers);
    // const {username, password} = authentication_data.data;
    const username = req.headers.username;
    const password = req.headers.password;
    const user = await User.findOne({username: username, password: password});
    const courses = await Course.find({_id: {$in: user.purchasedCourses}})
    return res.status(200).json({
        purchasedCourses: courses
    })

});

module.exports = router