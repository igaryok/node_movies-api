'use strict';

const express = require('express');

const route = require('./router');

const port = process.env.PORT || 5000;

const app = express();

app.use('/movies', route);
app.use('/', (req, res) => res.send("REST API MOVIES"));

app.listen(port, () => console.log(`Start server on port ${port}`));
