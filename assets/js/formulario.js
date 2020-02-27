function mostrar() 
{
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    var nascimento = document.getElementById("nascimento").value
    var observacao = document.getElementById("observacao").value
    var estado = document.getElementById("estados").value
    var senha = document.getElementById("senha").value
    var genero = document.querySelector('input[name="sexo"]:checked').value
    // var opcao = document.getElementById("almocoOuTransporte").checkbox
    
    var almoco=document.getElementById("almoco").value
    if (almoco.checked)
    {   
        almoco = "sim"
    }
    else {
        almoco="não"
    }

    var transporte=document.getElementById("transporte").value
    if (transporte.checked)
    {   
        transporte = "sim"
    }
    else {
        transporte="não"
    }



    alert ("Nome: "+nome+ "\nIdade: "+idade +"\nNascimento: "+nascimento+ "\n Observacao: "+observacao+ "\nEstado: "+estados+ "\n Senha: "+senha+ "\nGenero: "+genero+ "\nOpções: "+almoco+ "\nOpções: "+transporte)

}