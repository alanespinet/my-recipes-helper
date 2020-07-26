const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://root:recipes.2020@ds227119.mlab.com:27119/recipes-helper', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;