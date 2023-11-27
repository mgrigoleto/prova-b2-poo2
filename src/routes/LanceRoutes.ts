import LanceController from "../controllers/LanceController";
import { Router } from "express";

const LanceRouter = Router();

LanceRouter.get('/find-lances', LanceController.buscarLances)

LanceRouter.post('/create-lance', LanceController.criarLance);

LanceRouter.put('/update-lance', LanceController.atualizarLance);

LanceRouter.delete('/delete-lance', LanceController.excluirLance);

export default LanceRouter;