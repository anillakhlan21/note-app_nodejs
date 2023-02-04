import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    heading: {
        type: String,
        require: true,
    },
    description: String,
    created_at: Date,
    updated_at: Date,
    author: {
        type: String,
        require: true
    },
    tag: String
})

export const NoteModel = mongoose.model('note', noteSchema);