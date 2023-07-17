
const mongoose = require('mongoose'); // import mongoose


// connect to MongoDB using URL
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/social-networkDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Exporting the connection to the database as a module
module.exports = mongoose.connection