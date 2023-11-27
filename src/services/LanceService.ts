import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LanceService {

    constructor(){}

    async buscarLances(id?: string){
        try{
            if(id){
                const lance = await prisma.lance.findUnique({
                    where: {
                        id: id
                    }
                });
                return lance;
            }else{
                const lances = await prisma.lance.findMany();
                return lances;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }



    async criarLance(lance: Prisma.LanceCreateInput){
        try{
            const novoLance = await prisma.lance.create({
                data: lance
            });
            return novoLance;
        }catch(error){
            console.log(error);
            return null;
        }
    }



    async atualizarLance(id: string, lance: Prisma.LanceUpdateInput){
        try{
            const lanceAtualizado = await prisma.lance.update({
                where: {
                    id: id
                },
                data: lance
            });

            return lanceAtualizado;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    

    async excluirLance(id: string){
        try{
            const lanceDeletado = await prisma.lance.delete({
                where: {
                    id: id
                }
            });

            return lanceDeletado;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LanceService();