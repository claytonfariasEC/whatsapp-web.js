
// console.log("Rodando server node.js");


// var express = require('express');

// var app = express();

// app.get('/', function(req, res){
         
//         if(req === true){
//             console.log("Enviando mensagem..."+ res);       
//         }
//         //res.send("Olá aqui é server Node.js ");
//         res.json({name: "Clayton", idade: 27, altura: 1.74});
        
// });


// app.listen(3000, function(){
//         console.log("Executando na porta 3000");
// });

function setName(cliente, newname){   
        cliente.nome = newname;  
    };
    
    console.log("Home world my bitche")
    
    let eusguri = 100000;
    
    let teste = 'Palmeiras não tem mundial'
    
    console.log(teste + " ~~~\n " + eusguri)
    
    let me = 232; 
    me = "teste"
    
    
    //Objeto 
    
    let cliente = {
        nome: 'Claytin',
        idade: 27,
        cpf: 022111222333,
    }; 
    
    
    console.log(cliente)
    
    //array
    
    let array = [true, 45, "teste", 17];
    
    console.log(array)
    console.log(array.length)
    
    setName(cliente);
    
    
    for(let i=0; i < 10; i++){
        setName(cliente, "BBB_"+i)
        console.log("Novo Nome: " + cliente.nome )
    
    
    }
    const resultado = 12
    
    //Constructor Factory
    function criar_celular(marca, tela){
        return{
            marcaCelular: marca, 
            tela: tela,
    
            ligar(){
              console.log("Fazendo ligação .....")
            }
        }
    }
    
    function get_Name(){
        document.body.textContent = "Eita porra meu velho"
        console.log("EEEEE");
        //return ("embeebed in javascript my friendo");
    }
    
    const celular = criar_celular("Iphone", "5.5")
    console.log(celular)
    
    