var { PrismaClient } = require('@prisma/client');
var prisma = new PrismaClient();

const insertProfessor =  async function (dadosProf) {
    let sql = `Insert into tbl_Professor (
                nome,
                cpf,
                data_nascimento,
                logradouro,
                bairro,
                cidade,
                estado,
                cep,
                email
            )   values(
                '${dadosProf.nome}',
                '${dadosProf.cpf}',
                '${dadosProf.data_nascimento}',
                '${dadosProf.logradouro}',
                '${dadosProf.bairro}',
                '${dadosProf.cidade}',
                '${dadosProf.estado}',
                '${dadosProf.cep}',
                '${dadosProf.email}'                            
                )`;
    let result = await prisma.$executeRawUnsafe(sql);
    if (result)
        return true
    else
    return false
}
const selectProfessor = async function(){
    let sql = `SELECT * FROM tbl_Professor`
    let rsProfessor = await prisma.$queryRawUnsafe(sql);

    if (rsProfessor.length > 0)
        return rsProfessor
    else
    return false

}
const selectByidProfessor = async function(id){
    let sql = `SELECT * FROM tbl_Professor where id= ${id}`
    let rsProfessor = await prisma.$queryRawUnsafe(sql);

    if (rsProfessor.length > 0)
        return rsProfessor
    else
    return false
}
const updateProfessor =  async function (dadosProf) {
    const dataApenas = new Date(dadosProf.data_nascimento).toISOString().split("T")[0];
    const data_nascimento = dataApenas
    let sql = `update tbl_Professor set 
                    nome = '${dadosProf.nome}',
                    cpf = '${dadosProf.cpf}',
                    data_nascimento = '${dadosProf.data_nascimento}',
                    logradouro = '${dadosProf.logradouro}',
                    bairro = '${dadosProf.bairro}',
                    cidade = '${dadosProf.cidade}',
                    estado = '${dadosProf.estado}',
                    cep = '${dadosProf.cep}',
                    email = '${dadosProf.email}'
                where id = '${dadosProf.id}'
                `;
    let result = await prisma.$executeRawUnsafe(sql);
    if (result)
        return true
    else
    return false
}
const excluirProfessor =  async function (id) {
    
    let sql = `Delete from tbl_Professor
                    where id = '${id}'
                `;
    let result = await prisma.$executeRawUnsafe(sql);
    if (result)
        return true
    else
    return false
}
module.exports = {
    insertProfessor,
    selectProfessor,
    selectByidProfessor, 
    updateProfessor,
    excluirProfessor
}