import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LeilaoService {

    constructor(){}

    async buscarLeilao(id?: string){
        try{
            if(id){
                const leilao = await prisma.leilao.findUnique({
                    where: {
                        id: id
                    }
                });
                return leilao;
            }else{
                const leiloes = await prisma.leilao.findMany();
                return leiloes;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }



    async criarLeilao(leilao: Prisma.LeilaoCreateInput){
        try{
            const novoLeilao = await prisma.leilao.create({
                data: leilao
            });
            return novoLeilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }



    async atualizarLeilao(id: string, leilao: Prisma.LeilaoUpdateInput){
        try{
            const leilaoAtualizado = await prisma.leilao.update({
                where: {
                    id: id
                },
                data: leilao
            });

            return leilaoAtualizado;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    

    async excluirLeilao(id: string){
        try{
            const leilaoDeletado = await prisma.leilao.delete({
                where: {
                    id: id
                }
            });

            return leilaoDeletado;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LeilaoService();