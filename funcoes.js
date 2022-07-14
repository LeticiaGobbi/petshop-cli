const cachorros = require('./database/cachorros.json');
const fs= require('fs');
const path = require ('path');


function salvar(){



    let arquivo = path.resolve(__dirname + '/../database/cachorros.json');
    let json =JSON.stringify(cachorros, null ,4);

    fs.writeFileSync(arquivo, json);
};

function buscar(id){
    let cachorroBusca = cachorros.find(cachorroBusca =>{
       return cachorroBusca.id == id;
    });
    return cachorroBusca ? cachorroBusca : `Não existe cachorro com o id ${id}`;
 }

 let funcoes ={
      


    
    listar: function(){
        console.table(cachorros)
     },
    //listar()
     
     
    descrever: function(id){
       let cachorroBusca = this.buscar(id);
       
       if (cachorroBusca == false) {
           return 'Cachorro não cadastrado';
       } else {
           return cachorroBusca;
       }
    },
    
    //console.log(descrever())
    
    adicionar: function(cachorro){
       
       let ultimoCachorro=cachorros[cachorros.length-1]
       cachorro.id= ultimoCachorro.id+1
       cachorro.vacinas=[]
       cachorro.servicos=[]
       //console.log(cachorros.length)
       cachorros.push(cachorro)
       this.salvar(cachorros)
    },
    // Testando
    //let novoCachorro = {
    //  nome: "Bethoven",
    //  sexo: "m",
    //  castrado: false,
    //  dataDeNascimento:"2018-02-15",
    //  peso: 7},
    //(adicionar(novoCachorro))
       
    vacinar: (id, nomeDaVacina, dataDaVacina) => {
          let cachorroBuscado = buscar(id);
          dataDaVacina = new Date
          //dataDaVacina = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
    
          if (cachorroBusca.id){
           cachorroBusca.vacinas.push({nome: nomeDaVacina, data: dataDaVacina});
             }else{
                console.log("Cachorro não existe");
          }
             salvar()
       },
     
     
     
     
       atribuirServico: (id, nome, data) =>{
          let cachorroBusca = buscar(id);
          //data = new Date;
          //dataDoServico = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
          if (cachorroBusca.id){
              cachorroBusca.servicos.push({nome: nome, data: data})
             }else{
             console.log("Cachorro não existe")
          }
          salvar()
        },
    
        
    
    
        remover: function (id){
          let cachorroBusca= this.buscar(id)
          if(cachorroBusca.id){
             let index = cachorros.findIndex(cachorro =>cachorro == cachorroBusca)
             cachorros.splice(index,1)
             this.salvar()
          }else{
             console.log("Cachorro não existe")
          }
          }
       };
 
    
        module.exports = funcoes; 
