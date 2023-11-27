import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LeilaoService from "../services/LeilaoService";

class LeilaoController{

    constructor(){}

    async criarLeilao(req: Request, res: Response){
        const dados: Prisma.LeilaoCreateInput = req.body;
        
        if(dados.produto !== "" || dados.preco){
            const novoLeilao = await LeilaoService.criarLeilao(dados)
            res.status(200).json({
                status: 'OK',
                novoLeilao: novoLeilao
            });
        }else{
            res.status(400).json({
                status: 'ERRO',
                message: 'Defina algum valor para os campos obrigatórios!'
            })
        }

    }

    async buscarLeilao(req: Request, res: Response){
        const leiloes = LeilaoService.buscarLeilao();

        res.status(200).json({
            status: 'OK',
            usuarios: leiloes
        })
    }

    async atualizarLeilao(req: Request, res: Response){
        res.send('ATUALIZANDO O LEILÃO');
    }

    async excluirLeilao(req: Request, res: Response){
        res.send('EXCLUINDO O LEILÃO');
    }
}

export default new LeilaoController;