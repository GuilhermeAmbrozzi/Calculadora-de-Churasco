incremento();
decremento();
calcularChurrasco();

function calcularChurrasco() {
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const homens = parseInt(document.getElementById('homens').value);
    const criancas = parseInt(document.getElementById('criancas').value);

    //Quantidade de carne bovina em gramas por pessoa.
    const bovinaHomem = 0.500;
    const bovinaMulher = 0.300;
    const bovinaCrianca = 0.200;

    //Quantidade de carne de frango em gramas por pessoa.
    const frangoHomem = 0.200;
    const frangoMulher = 0.200;
    const frangoCrianca = 0.100;

    //Quantidade de linguiça em gramas por pessoa.
    const linguicaHomem = 0.200;
    const linguicaMulher = 0.200;
    const linguicaCrianca = 0.200;

    // calcular o total de carnes.
    const totalCarneBovina = (mulheres * bovinaMulher) + (homens * bovinaHomem) + (criancas * bovinaCrianca);

    const totalCarneFrango = (mulheres * frangoMulher) + (homens * frangoHomem) + (criancas * frangoCrianca);

    const totalLinguica = (mulheres * linguicaMulher) + (homens * linguicaHomem) + (criancas * linguicaCrianca);

    //Quantidade de refrigerante por pessoa.
    const refrigeranteHomem = 0.300;
    const refrigeranteMulher = 0.400;
    const refrigeranteCrianca = 0.200;

    //Quantidade de cerveja por pessoa.
    const cervejaHomem = 0.800;
    const cervejaMulher = 0.500;
    const cervejaCrianca = 0;

    const totalCerveja = (homens * cervejaHomem) + (mulheres * cervejaMulher) + (criancas * cervejaCrianca);

    //Calcular o total de refrigerante.
    const totalRefrigerante = (homens * refrigeranteHomem) + (mulheres * refrigeranteMulher) + (criancas * refrigeranteCrianca);

    // exibir os resultados
    document.getElementById('bovina').innerText = `${(totalCarneBovina).toFixed(1)}kg de carne bovina.`;
    document.getElementById('frango').innerText = `${(totalCarneFrango).toFixed(1)}kg de carne frango.`;
    document.getElementById('linguica').innerText = `${(totalLinguica).toFixed(1)}kg de linguiça.`;
    document.getElementById('refrigerante').innerText = `${(totalRefrigerante).toFixed(1)}l de refrigerante.`;
    document.getElementById('cerveja').innerText = `${(totalCerveja).toFixed(1)}l de cerveja.`;
}

function decremento(id) {
    const input = document.getElementById(id);
    let value = parseInt(input.value);
    const min = parseInt(input.min);
    if (value > input.min) {
        value--;
        input.value = value;
    }
}

function incremento(id) {
    const input = document.getElementById(id);
    let value = parseInt(input.value);
    const max = parseInt(input.max);
    if (value < input.max) {
        value++;
        input.value = value;
    }
}
