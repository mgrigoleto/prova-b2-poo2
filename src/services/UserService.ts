import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UserService {

    constructor(){}

    async buscarUsuarios(id?: string){
        try{
            if(id){
                const usuario = await prisma.usuario.findUnique({
                    where: {
                        id: id
                    }
                });
                return usuario;
            }else{
                const usuarios = await prisma.usuario.findMany();
                return usuarios;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }



    async criarUsuario(user: Prisma.UsuarioCreateInput){
        try{
            const novoUsuario = await prisma.usuario.create({
                data: user
            });
            return novoUsuario;
        }catch(error){
            console.log(error);
            return null;
        }
    }



    async atualizarUsuario(id: string, usuario: Prisma.UsuarioUpdateInput){
        try{
            const usuarioAtualizado = await prisma.usuario.update({
                where: {
                    id: id
                },
                data: usuario
            });

            return usuarioAtualizado;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    

    async excluirUsuario(id: string){
        try{
            const usuarioDeletado = await prisma.usuario.delete({
                where: {
                    id: id
                }
            });

            return usuarioDeletado;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new UserService();