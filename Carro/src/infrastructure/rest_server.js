const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

require('../port/Carros_api')(app);

module.exports = app;