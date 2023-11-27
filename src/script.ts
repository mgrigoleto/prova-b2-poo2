import { PrismaClient } from '@prisma/client'
import UserService from './services/UserService'
import LeilaoService from './services/LeilaoService'

const prisma = new PrismaClient()

async function main() {
    // const novoUsuario = await UserService.criarUsuario({
    //     nome: "Saci Pererê",
    //     email: "saci@sitio.com.br"
    // })

    // console.log(novoUsuario)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })