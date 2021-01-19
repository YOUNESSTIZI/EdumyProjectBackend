const express = require('express');
const body = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.port || 3000;
const app = express();
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const commentRoute = require('./routes/commentRoutes');
const path = require('path');
const connectionUrl = 'mongodb://localhost:27017/nodeDB';

/* Connect to MongoDB */
mongoose
    .connect(connectionUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("Connected to the database");
    })
    .catch(() => {
        console.log("Connection failed!");
    });





app.use(cors());
app.use(logger('dev'));

app.use(express.json());

app.use(body.json());


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use(userRouter);
app.use(postRouter);
app.use(commentRoute);
app.use(categoryRouter);
app.use('/Files', express.static(path.join(__dirname, 'Files')));
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});
