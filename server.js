// Require dependencies
const express = require('express')
const mongoose = require('mongoose')

// Port variable
const PORT = 3000;

const app = express();

// Use epress to parse url encdoed bodies

app.use(express.urlencoded({ extended: true }));
// express to aprse middleware data to JSON
app.use(express.json());

// Set up static files form the public folder (not on the internet)
app.use(express.static("public"));

// Setup mongoose connection
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

// listener got connections
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});