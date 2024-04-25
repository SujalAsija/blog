import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    filter: {
        type: String,
        default: "Solo Travel"
    },
    imageUrl: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
}, {
    timestamps: true
});

const Blogs = mongoose.model('blog', blogSchema);

export default Blogs;