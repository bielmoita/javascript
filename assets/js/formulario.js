function mostrar() 
{
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    var nascimento = document.getElementById("nascimento").value
    // Arrumando a data para o PT-BR, Data aparece: 
    // 2020/02/27 - Ele gera como String
    // 0123456789 --> posição da String Data
    var dia = nascimento.substring(8,10)
    var mes = nascimento.substring(5,7)
    var ano = nascimento.substring(0,4)
    nascimento = dia+"/"+mes+"/"+ano

    var observacao = document.getElementById("observacao").value
    var estados = document.getElementById("estados").value
    var senha = document.getElementById("senha").value
    var genero = document.querySelector('input[name="sexo"]:checked').value
    // var opcao = document.getElementById("almocoOuTransporte").checkbox
    
    var almoco=document.getElementById("almoco").checked
    if (almoco==true)
    {   
        almoco = "sim"
    }
    else {
        almoco="não"
    }

    var transporte=document.getElementById("transporte").checked
    if (transporte==true)
    {   
        transporte = "sim"
    }
    else {
        transporte="não"
    }



    alert ("Nome: "+nome+ "\nIdade: "+idade +"\nNascimento: "+nascimento+ "\n Observacao: "+observacao+ "\nEstado: "+estados+ "\n Senha: "+senha+ "\nGenero: "+genero+ "\nOpção de Almoço: "+almoco+ "\nOpção de Vale transporte: "+transporte)

}