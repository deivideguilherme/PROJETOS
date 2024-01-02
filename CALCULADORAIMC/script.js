/*
Resultados do calculo de IMC: 

IMC menor que 18,5, está abaixo do peso;
IMC entre 18,5 e 24,9, o peso é considerado normal;
IMC entre 25 e 29,9, existe um possível sobrepeso;
IMC entre 30 e 34,9, trata-se de obesidade grau 1;
IMC entre 35 e 39,9, obesidade grau 2;
*/

const calculate = document.getElementById("calculate");

function imc() {
    /*Nesse momento eu declaro as 3 primeiras variáveis com o 
    atributo valor dele, pois é o que me interessa e naõ o elemento em si. 
    Já no resultado eu quero o elemento todo, pois será atribuído um valor a ele.*/
    const name = document.getElementById("name").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    if (name.value !== '' && height !== '' && weight !== '') {
        
        //formúla para calcular IMC = peso / altura²
        const valorIMC = (weight / (height * height)).toFixed(2); //Definindo apenas duas casas decimais após a virgula

        let classification = "";

        if (result < 18.5) {
            classification = "Abaixo do Peso";
         } else if (valorIMC <= 24.9) {
            classification = "com Peso Normal";
         } else if (valorIMC <= 29.9) {
            classification = "com Possível Sobrepeso";
         } else if (valorIMC <= 34.9) {
            classification = "com Obesidade Grau 1";
         } else if (valorIMC <= 39.9) {
            classification = "com Obesidade Grau 2";
         }

        result.textContent = `${name} seu IMC é ${valorIMC}, e você está ${classification}`;

        } else {
            result.textContent = "Preencha todos os campos!";
        }

}

calculate.addEventListener("click", imc);
