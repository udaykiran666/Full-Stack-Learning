const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin1:pkzlEBywwV6t6ZOH@cluster0.yuplhry.mongodb.net/To-Do');

const CreateToDoSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    completed: Boolean
});


const CreateToDo = mongoose.model('CreateToDo', CreateToDoSchema);

module.exports = {
    CreateToDo
}