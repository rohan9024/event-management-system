import mongoose from 'mongoose'

const feedbackSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    feedback: String
})

export default mongoose.model('feedback', feedbackSchema);
