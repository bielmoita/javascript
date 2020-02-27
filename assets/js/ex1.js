var textoH1 = document.getElementById("titulo");
alert (textoH1.textContent)
// Mudando cores e elemento pelo JavaScript, desde que tenha a classe no CSS
textoH1.className = "vermelha"
//Muda o conteudo do H1 com para o texto em Aspas
// textoH1.textContent = "Texto alterado pelo JS"

/*Lembrar que no caso do ha2 poderiamos ter pego o conteudo pelo id subtitulo*/
var textoH2 = document.getElementsByTagName("h2")[0]
alert (textoH2.textContent)

var textoLi = document.getElementsByTagName("li")[3]
alert (textoLi.textContent)

var textoClasseVerde = document.getElementsByClassName("verde")
// /*Cria-se um array
// o array tem um tamanho -> propriedade length*/
for (var posicao=0; posicao<textoClasseVerde.length; posicao++) {
     alert (textoClasseVerde[posicao].textContent)
 }

var textoLiVerde = document.querySelectorAll("li.verde")
/*Cria-se um array
o array tem um tamanho -> propriedade length*/
for (var i=0; i<textoLiVerde.length; i++) {
    alert ("Conteúdo pego querySelector - " + textoLiVerde[i].textContent)
}

