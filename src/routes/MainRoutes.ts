import { Router, Request, Response } from "express";

const MainRouter = Router();

MainRouter.get('/', function(req: Request, res: Response){
    res.status(100).json({
        status: 'OK'
    });
});

export default MainRouter;