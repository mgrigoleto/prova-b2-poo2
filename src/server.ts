import express from 'express';
import MainRouter from './routes/MainRoutes';
import UserRouter from './routes/UserRoutes';
import LeilaoRouter from './routes/LeilaoRoutes';
import LanceRouter from './routes/LanceRoutes';

const app = express();
app.use(express.json());

app.use(MainRouter);
app.use(UserRouter);
app.use(LeilaoRouter);
app.use(LanceRouter);

app.listen(3000, function(){
    console.log("Server running on port 3000");
})