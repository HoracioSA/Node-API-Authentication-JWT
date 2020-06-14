const express = require('express');
const port = 3000;
const authRouter = require('./routes/auth');

const app = express();
app.use(express.json());
app.use('/api/user', authRouter);
app.listen(port, ()=>{console.log(`Server runing on port ${port}`)})