const mongoose = require("mongoose");


const reviewScheam = new mongoose.Schema({
    comment: String,
    rating: {
        type: Number,
        min:1,
        max:5
    },
    createdAt: {
        type: Number,
        default: Date.now()
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Review = mongoose.model("Review",reviewScheam);
module.exports = Review;