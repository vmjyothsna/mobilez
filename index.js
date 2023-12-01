const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1:27017/WheatherApp')
    .then(() => {
        console.log('Connected to WheatherApp database');
    })
    .catch((err) => {
        console.error(err);
    });

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});


const User = mongoose.model('login', UserSchema);

app.use(express.json());
app.use(cors());

app.get('/', async (req, resp) => {
    try {
        const users = await User.find({}, 'name email date');
        resp.json(users);
    } catch (e) {
        console.error(e);
        resp.status(500).send('Failed to retrieve user data');
    }
});


app.get('/getuser', async (req, resp) => {
    try {
        const { email, password } = req.query;
    
        if (!email || !password) {
          return resp.status(400).json({ error: 'Email and password are required parameters.' });
        }
    
        const user = await User.findOne({ email, password }, 'email password');
    
        if (user) {
          resp.json(user);
        } else {
          resp.status(404).json({ error: 'User not found' });
        }
      } catch (e) {
        console.error(e);
        resp.status(500).send('Failed to retrieve user data');
      }
});


app.post('/register', async (req, resp) => {
    console.log(req.body);
    try {
        const user = new User(req.body);
        const result = await user.save();
        const userWithoutPassword = result.toObject();
        delete userWithoutPassword.password;

        resp.send(userWithoutPassword);
        console.log(userWithoutPassword);
    } catch (e) {
        console.error(e);
        resp.status(500).send('Something Went Wrong');
    }
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});