const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
  origin: '*',

  methods: [
    'GET',
    'POST',
    'PUT',
    'DELETE'
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};


//middleware

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// routers

const router = require('./routes/patientRoutes.js')
app.use('/api/patients', router)


//testing api

app.get('/', (req, res) => {
  res.json({ message: 'hello from api' })
});


//port

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});