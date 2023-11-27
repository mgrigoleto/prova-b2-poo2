import LeilaoController from "../controllers/LeilaoController";
import { Router } from "express";

const LeilaoRouter = Router();

LeilaoRouter.get('/find-leiloes', LeilaoController.buscarLeilao)

LeilaoRouter.post('/create-leilao', LeilaoController.criarLeilao);

LeilaoRouter.put('/update-leilao', LeilaoController.atualizarLeilao);

LeilaoRouter.delete('/delete-leilao', LeilaoController.excluirLeilao);

export default LeilaoRouter;