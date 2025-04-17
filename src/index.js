const player1 ={
    NOME: "Marion",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTO: 0,
};
const player2 ={
    NOME: "luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTO: 0,
};

async function rolldeice(){
    return Math.floor(Math.random()*6)+1;
}



// LOG dos resultados
// Passa espressoes JS ${} nao somente variaveis , exemplo: calculos 

async function logRollResult(characterName,block,attribute,dieceResult){
    console.log(`${characterName} 🎲 rolou um dado de : ${block} ${dieceResult} + ${attribute} = ${ 
        dieceResult + attribute
    }`)
}

//For das rodadas (rounds)
async function playraceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada: ${round} iniciada ...`);

      //sortear bloco  
      let block =  await getRandomBlock()
      console.log(` Bloco selecionado: ${block}`)
         
      //rolar dados
         let diece1Result = await rolldeice(); 
         let diece2Result = await rolldeice(); 
 
    //teste de habilidade
 
         let totalTestSkill1 = 0;
         let totalTestSkill2 = 0;
 
     if(block === "RETA"){   
             totalTestSkill1 = diece1Result + character1.VELOCIDADE;
             totalTestSkill2 = diece2Result + character2.VELOCIDADE;
 
             await logRollResult(
                 character1.NOME,
                 "VELOCIDADE",
                  diece1Result,
                  character1.VELOCIDADE
                 );
 
             await logRollResult(
                  character2.NOME,
                 "VELOCIDADE",
                  diece2Result,
                  character2.VELOCIDADE
                 );
 
     }
     if(block === "CURVA"){
         totalTestSkill1 = diece1Result + character1.MANOBRABILIDADE;
         totalTestSkill2 = diece2Result + character2.MANOBRABILIDADE;
 
         await logRollResult(
             character1.NOME,
             "MANOBRABILIDADE",
              diece1Result,
              character1.MANOBRABILIDADE
             );
 
         await logRollResult(
              character2.NOME,
             "MANOBRABILIDADE",
              diece2Result,
              character2.MANOBRABILIDADE
             );
 
 
     }
 
     if(block === "CONFRONTO"){
         let powerSkill1 = diece1Result + character1.PODER;
         let powerSkill2 = diece2Result + character2.PODER;
     
        }    
        // verificando  o vencedor
      if(totalTestSkill1 > totalTestSkill2 ){   
             console.log `${character1.NOME}  marcou 1 ponto!`;
             character1.PONTO ++;

      }else if(totalTestSkill2 > totalTestSkill1){
        console.log `${character2.NOME} marcou 1 ponto!`;  
        character2.PONTO ++;

    } else {
        console.log("Empate! \n")
    }

 }
 
 async function getRandomBlock() {
     let random = Math.random();
     let = result = "";
 
     switch (true) { 
         case random < 0.33:
              result = "RETA" 
             break;
         case   random < 0.66:
              result = "CURVA" 
             break;      
         
         default :
              result = "CONFRONTO"
             break;
     } 
     return result
 }   
      
    }

   


//Funcao auto invocada para iniciar o jogo - IIFE (Immediately Invoked Function Expression)
// to passando o nome dos jogadores concatenando com o texto "iniciando..."
(async function main(){
    console.log( ` 🏁🔔 corrida entre ${player1.NOME} e ${player2.NOME} iniciando... \n` );

    await playraceEngine(player1, player2);
}) ();