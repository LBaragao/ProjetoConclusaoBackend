const express = require('express');
const cors = require('cors');
process.env.TZ = 'America/Sao_Paulo';
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

const patientRouter = require('./routes/patientRoutes.js')
app.use('/api/patients', patientRouter)

const vaccineRouter = require('./routes/vaccineRoutes.js')
app.use('/api/vaccines', vaccineRouter)

const vaccinationRouter = require('./routes/vaccinationRoutes.js')
app.use('/api/vaccination', vaccinationRouter)



//testing api

app.get('/', (req, res) => {
  res.json({ message: 'hello from api' })
});


//port

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});