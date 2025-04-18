import mongoose,{Schema} from "mongoose";
const courseSchema = new Schema({
    title:{
        required: true,
        type: String
    },
    subtitle:{
        type: String,
        default: "subtitle",
    },
    description:{
        required: true,
        type: String
    },
    thumbnail:{
        type: String
    },
    modules:[{  type: Schema.ObjectId, ref: "Module" }],
    price:{
        required: true,
        default: 0,
        type: Number
    },
    active:{
        required: true,
        default: false,
        type: Boolean
    },   
    category:{  type: Schema.ObjectId, ref: "Category" },
    instructor:{  type: Schema.ObjectId, ref: "User" },
    testimonials:[{  type: Schema.ObjectId, ref: "Testimonial" }],
    quizSet:{
        type: Schema.ObjectId
    },
    learning:{
        required: true,
        type: [String]
    },  
    createdOn:{
        required: true,
        default: Date.now(),
        type: Date
    },    
    modifiedOn:{
        required: true,
        default: Date.now(),
        type: Date
    },
});
export const Course = mongoose.models.Course ?? mongoose.model("Course",courseSchema);