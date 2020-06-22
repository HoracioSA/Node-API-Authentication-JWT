const express = require('express');
const {errors} = require('celebrate')
const port = 3000;
const authRouter = require('./routes/auth');
const AdminRouter = require('./routes/admin')
const app = express();
app.use(errors());
app.use(express.json());
app.use('/api/user', authRouter);
app.use('/api/admin', AdminRouter)
app.listen(port, ()=>{console.log(`Server runing on port ${port}`)})