const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models/user');

mongoose.connect(keys.mongo.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
}));

require('./services/passport')(app);

require('./routes/default')(app);
require('./routes/auth')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
