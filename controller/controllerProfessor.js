var professor = require('../model/Professor.js')

const inserirProfessor = async function (dadosProf) {
    let result  =  await professor.insertProfessor(dadosProf)

    if (result)
        return true
    else
    return false
};

const selectALLprofessor = async function(){
    let dados =  await professor.selectProfessor()
    if (dados)
        return dados
    else
    return false 

}
const buscaProfessor = async function(id){
    let dados =  await professor.selectByidProfessor(id)
    if (dados)
        return dados
    else
    return false 

}
const atualizaProfessor = async function (dadosProf, id) {
    let idproff = id
    dadosProf.id = idproff

    let result  =  await professor.updateProfessor(dadosProf)

    if (result)
        return true
    else
    return false
}
const deletaProfessor = async function(id){
    let dados =  await professor.excluirProfessor(id)
    if (dados)
        return dados
    else
    return false 

}

module.exports = {
    inserirProfessor,
    selectALLprofessor,
    buscaProfessor,
    atualizaProfessor,
    deletaProfessor
}