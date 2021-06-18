import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
import forms from "./formsSchema.js";
import feedback from "./feedbackSchema.js";
import userdetails from "./userSchema.js";

const app = express();

const CONNECTION_URL = 'mongodb+srv://admin:ROAoddakgAvwhR9Y@cluster0.pqoz5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5004


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}....`)))
    .catch((error) => console.log(error.message))
mongoose.set('useFindAndModify', false);




app.get('/', (req, res) => {
    res.send('THIS WORKS!');
})


app.post('/forms', (req, res) => {
    const form = req.body;

    forms.create(form, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })

})


app.get('/forms', (req, res) => {
    forms.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

app.post('/feedback', (req, res) => {
    const feed = req.body;

    feedback.create(feed, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })

})

app.get('/feedback', (req, res) => {
    feedback.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})


app.post('/user', (req, res) => {
    const userDetails = req.body;

    userdetails.create(userDetails, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })

})

app.get('/user', (req, res) => {
    userdetails.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

// ROAoddakgAvwhR9Y