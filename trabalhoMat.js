/**Codigo feito para a cadeira de Matematica Descreta, da faculdade: Unifor.
 * Autores: Gabriel Aderaldo e Breno Colaço. 
 * Problema a ser solucionado --> Foi solicitado um provador de teorias, onde se deveria, resolver teoremas
 * simples de lógica proporcional.
 * Tecnologias ultilizadas: JavaScript e NodeJS.
 * Modulos node Utilizados: "scanf" "https://www.npmjs.com/package/scanf".
 */


 /*Importação do modulo Scanf*/
 const scanf = require("scanf");


 /**Criando a função que dos operadores Logicos que faltam: Já¡ que não precisamos re-enventar a roda
  * Os operadores Logicos -> And,Or,NOT serã£o utilizados...
  */
 
     /**Criando a função que representaria o operador Logico Bicondicional, Que represento neste codigo como: <-->
      * Por conter uma tabela da verdade Igual a da porta lógica Xnor, Apelidei a função de seu nome.
      * Tabela da verdade Utilizada:
      *  A | B | Resultado
      *  0   0       1
      *  0   1       0
      *  1   0       0
      *  1   1       1
      * 
      * A ultilização da função simples...Básicamente ela requer dois paarametros: A e B que são as entradas
      * assim, ela simula a tabela da verdade, obs: São entradas booleanas...
      * Basicamente, ela pega os parametros booleanos e os compara de acordo com a tabela da verdade... retornando um Bool verdairo ou falso.
      * Ex: var exemplo = tabelaXnor(false,false); O que vai ficar salvo na variavel Exemplo Ã© o valor Bool true(Verdadeiro)
      */
     function tabelaXnor(A,B){
         if(A == false && B == false){resumo = true;}
         if(A == false && B == true){resumo = false}
         if(A == true && B == false){resumo = false}
         if(A == true && B == true){resumo = true}
         return resumo;
     }
     /**Mesma logica da função de cima. Segue a tabela da verdade para melhor entendimento da função.
      *Tabela da verdade Utilizada:
      *  A | B | Resultado
      *  0   0       1
      *  0   1       1
      *  1   0       0
      *  1   1       1
      * 
      * Exemplo: var exemplo = tabelaXnor(true,false); O que vai ficar salvo na variavel Exemplo Ã© o valor Bool false(Falso)
      */
     function tabelaCon(A,B){
         if(A == false && B == false){resumo = true;}
         if(A == false && B == true){resumo = true;}
         if(A == true && B ==  false){resumo = false;}
         if(A == true && B ==  true){resumo = true;}
         return resumo;
     }
     
     
 /**começando o código*/
 //Criando as variaveis para ultilizar no codigo...
 var fraseAnalisada = "";
 console.log("Digite a expressÃ£o: ");
 fraseAnalisada = scanf("%S");
  
 fraseAnalisada = fraseAnalisada.replace("^","and");
 /**Trabalhando a leitura de variaveis */
 var resultadoAnd = fraseAnalisada.includes("and");
 var resultadoOr = fraseAnalisada.includes("v");
 var resultadoNot = fraseAnalisada.includes("'");
 var resultadoXnor = fraseAnalisada.includes("<-->");
 var resultadoCond = fraseAnalisada.includes("-->");
 
 //console.log("And: "+resultadoAnd+"Or: "+resultadoOr+"Not: "+resultadoNot+"Xnor: "+resultadoXnor+"Con: "+resultadoCond);
 
 /**Parte 3: função de calculo da expressão*/
 function terceiraParte(){
     var qtdCorte = 6;
     var fraseCortada = fraseAnalisada.split(" ",qtdCorte);
     //Separando semanticamente a String.    
     var A = fraseCortada[0];
     var sim1 = fraseCortada[1];
     var B = fraseCortada[2];
     var sim2 = fraseCortada[3];
     var C = fraseCortada[4];
     var sim3 = fraseCortada[5];
     var D = fraseCortada[6];
     
     var resultado1 = null;
     var resultado2 = null;
     var resultado3 = null;
     
     var aa= null;
     var bb= null;
     var cc= null;
     
     
 
     console.log("Digite o valor da primeira variavel: ");
     aa = scanf("%S");
     console.log("Digite o valor da Segunda variavel: ");
     bb = scanf("%S");
     console.log("Digite o valor da Terceira Variavel: ");
     cc= scanf("%S");
 
     if(aa =="true"){
         aa= true
     }else{
         aa= false;
     }
 
     if(bb == "true"){
         bb= true;
     }else{
         bb= false;
     }
 
 
     if(cc == "true"){
         cc= true;
     }else{
         cc= false;
     }
 
     //Fazendo os calculos booleanos e logicos, da primeira parte da expressão
     if(sim1 == "and"){
         resultado1 = aa&&bb;
             
     }else if(sim1 == "v" ||sim1 == "V"){
         resultado1 = aa||bb;
         
     }else if(sim1 == "'"){
         resultado1 =! bb;
     }else if(sim1 == "<-->"){
         var resumo = tabelaXnor(aa,bb);
         resultado1 = resumo;
         
          
     }else if(sim1 == "-->"){
         var resumo = tabelaCon(aa,bb);
         resultado1 = resumo;
     }else{
         console.log("Simbolo nÃ£o encontrado");
     }
 
     
     //Fazendo os calculos booleanos e logicos, da Segunda parte da expressão, já com os resultados da primeira parte
     if(sim2 == "and"){
         resultado2 = resultado1&&cc;
     }else if(sim2 == "v"){
         resultado2 = resultado1||cc;
     }else if(sim2 == "'"){
         resultado2 =! resultado1;
     }else if(sim2 == "<-->"){
         var resumo = tabelaXnor(resultado1,cc);
         resultado2 = resumo;
         console.log("Resumo 2:",resumo);
     }else if(sim2 == "-->"){
         var resumo = tabelaCon(resultado1,cc);
         resultado2 = resumo;
         
     }else{
         console.log("Simbolo nÃ£o encontrado");
     }
     
     //Mostra para uma resposta de qual o valor da expressão.
     console.log("A resposta da expressÃ£o Ã©: ",resultado2);
     
 }
 
 /**Parte 1 e 2, verificação lexica e sintatica, caso não bata, o codigo se encerra. */
 if(resultadoAnd == true ||resultadoOr == true ||resultadoNot == true ||resultadoXnor == true ||resultadoCond == true){
     console.log("Simbolos Corretos");
     terceiraParte();  
 }else{
     console.log("Simbolos mal estruturados...");
 }
 





