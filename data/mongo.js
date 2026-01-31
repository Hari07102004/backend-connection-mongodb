const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Demo_kec")
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((err) => {
    console.log("MongoDB connection failed", err);
});

module.exports = mongoose;