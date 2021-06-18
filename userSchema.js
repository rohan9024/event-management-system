import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    useremail: String

})

export default mongoose.model('userdetails', userSchema);
