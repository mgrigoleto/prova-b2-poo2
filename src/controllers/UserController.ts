import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController{

    constructor(){}

    async criarUsuario(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;
        
        if(dados.nome !== ""){
            const novoUsuario = await UserService.criarUsuario(dados)
            res.status(200).json({
                status: 'OK',
                novoUsuario: novoUsuario
            });
        }else{
            res.status(400).json({
                status: 'ERRO',
                message: 'Defina algum valor para os campos obrigatórios!'
            })
        }

    }

    async buscarUsuario(req: Request, res: Response){
        const usuarios = UserService.buscarUsuarios();

        res.status(200).json({
            status: 'OK',
            usuarios: usuarios
        })
    }

    async atualizarUsuario(req: Request, res: Response){
        res.send('ATUALIZANDO O USUÁRIO');
    }

    async excluirUsuario(req: Request, res: Response){
        res.send('EXCLUINDO O USUÁRIO');
    }
}

export default new UserController;