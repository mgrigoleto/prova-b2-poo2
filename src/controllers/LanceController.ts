import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceService from "../services/LanceService";

class LanceController{

    constructor(){}

    async criarLance(req: Request, res: Response){
        const dados: Prisma.LanceCreateInput = req.body;
        
        if(dados.valor){
            const novoLance = await LanceService.criarLance(dados)
            res.status(200).json({
                status: 'OK',
                novoLance: novoLance
            });
        }else{
            res.status(400).json({
                status: 'ERRO',
                message: 'Defina algum valor para os campos obrigatórios!'
            })
        }

    }

    async buscarLances(req: Request, res: Response){
        const lances = LanceService.buscarLances();

        res.status(200).json({
            status: 'OK',
            usuarios: lances
        })
    }

    async atualizarLance(req: Request, res: Response){
        res.send('ATUALIZANDO O LANCE');
    }

    async excluirLance(req: Request, res: Response){
        res.send('EXCLUINDO O LANCE');
    }
}

export default new LanceController;