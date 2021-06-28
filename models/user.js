const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    unique: true,
    required: true,
  },
});

userSchema.plugin(findOrCreate);

mongoose.model('users', userSchema);
