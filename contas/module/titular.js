class titular {
constructor (nome,cpf,endereco,telefone, email,datanasc,){
this.nome=nome
this.cpf=cpf 
this.endereco=endereco
this.telefone=telefone
this.email=email
this.datanasc=datanasc
  


}


};
function buscarTitulares () {
    
    let titular1 = new titular(
    'cleberson',
    '99999999-00',
    'rua esmeralda',
    '11 930',
    'cleb@gmail.com',
    '11/11/1990',)


let tilutular2 = new titular(
    'ruan',
    '33244557546-01',
    'rua azul',
    '11 931',
    'ru@gmail.com',
    '11/12/1991',)

let tilutular3 = new titular(
    'maria',
    '333338778989-07',
    'rua quadrada',
    '11 098',
    'ma@gmail.com',
    '11/03/1790',)
    let Titulares = [titular1,tilutular2,tilutular3]
    return Titulares
}

export {titular,buscarTitulares};


