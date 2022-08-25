const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

const itemRouter = require('./src/routes/item-route');
const sellListRouter = require('./src/routes/sell-list-route');

app.use('/category', itemRouter);
app.use('/sell-list', sellListRouter);

app.listen(8888, () => console.log('listening on port 8888...'));