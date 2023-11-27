import UserController from "../controllers/UserController";
import { Router } from "express";

const UserRouter = Router();

UserRouter.get('/find-users', UserController.buscarUsuario)

UserRouter.post('/create-user', UserController.criarUsuario);

UserRouter.put('/update-user', UserController.atualizarUsuario);

UserRouter.delete('/delete-user', UserController.excluirUsuario);

export default UserRouter;