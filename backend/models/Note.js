import mongoose from "mongoose";
// 1st step: Create a schema
// 2nd step: Create a model based off that schema

const noteSchema = new mongoose.Schema(
    {
        title: 
        {
            type: String,
            required: true
        },
        content:
        {
            type: String,
            required: true
        },
        user:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    }, 
    {
        timestamps: true // automatic time update/create
    }
);
const Note = mongoose.model("Note", noteSchema);
export default Note;