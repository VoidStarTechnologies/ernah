const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models/User'); // must stay before passport initialization

mongoose.connect(keys.mongo.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.cookie],
}));

require('./services/passport')(app);

require('./routes/auth')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
