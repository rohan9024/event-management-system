import mongoose from 'mongoose';

const formSchema = mongoose.Schema({
    email: String,
    venue: String,
    venueType: String,
    no_of_guests: Number,
    city: String,
    State: String,
    zip: Number
})

export default mongoose.model('forms', formSchema);
