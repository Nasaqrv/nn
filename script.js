// const idade = 20;

// if (idade < 0 || idade > 120) {
//     console.log("Erro de validação: Idade fora do limite permitido.");
// } else if (idade >= 0 && idade <= 17) {
//     console.log("Cadastro negado: Usuário menor de idade.");
// } else if (idade >= 18 && idade <= 65) {
//     console.log("Cadastro aprovado: Pacote Standard.");
// } else {
//     console.log("Cadastro aprovado: Pacote Sênior (Isento de taxas).");
// }

// const distanciaKm = 100;

// if (distanciaKm < 0) {
//     console.log("Erro do sistema: A distância não pode ser negativa.");
// } else if (distanciaKm <= 50) {
//     console.log("Frete Grátis.");
// } else if (distanciaKm <= 150) {
//     console.log("Custo do frete: R$ 25,00.");
// } else if (distanciaKm <= 300) {
//     console.log("Custo do frete: R$ 50,00.");
// } else {
//     console.log("Área fora de cobertura para entregas.");
// }

// const usoCPU = 75;
// const usoRAM = 60;

// if (usoCPU < 70 && usoRAM < 70) {
//     console.log("Status: Sistema Saudável.");
// } else if ((usoCPU >= 70 && usoCPU < 90) || (usoRAM >= 70 && usoRAM < 90)) {
//     console.log("Alerta: Consumo elevado, monitorar.");
// } else if (usoCPU >= 90 || usoRAM >= 90) {
//     console.log("CRÍTICO: Escalando novos servidores imediatamente!");
// }


// const rendaMensal = 4000;
// const valorParcela = 800;
// const scoreSerasa = 850;

// const porcentagem = (valorParcela / rendaMensal) * 100;

// if (rendaMensal <= 0 || scoreSerasa < 0 || scoreSerasa > 1000) {
//     console.log("Erro: Dados financeiros inválidos.");
// } else if (porcentagem > 30 || scoreSerasa < 400) {
//     console.log("Crédito negado: Risco elevado ou renda comprometida.");
// } else if (porcentagem <= 30 && scoreSerasa >= 400 && scoreSerasa <= 799) {
//     console.log("Crédito aprovado: Taxa de juros padrão.");
// } else if (porcentagem <= 30 && scoreSerasa >= 800) {
//     console.log("Crédito pré-aprovado: Taxa VIP reduzida!");
// }


// const valorBaseCorrida = 20;
// const passageirosAtivos = 6;
// const motoristasDisponiveis = 2;

// const taxaDemanda = passageirosAtivos / motoristasDisponiveis;

// if (motoristasDisponiveis <= 0) {
//     console.log("Indisponível: Nenhum motorista na região.");
// } else if (taxaDemanda < 1.5) {
//     console.log("Tarifa normal: R$ " + valorBaseCorrida);
// } else if (taxaDemanda < 3.0) {
//     console.log("Tarifa dinâmica (1.5x): R$ " + (valorBaseCorrida * 1.5));
// } else {
//     console.log("Alta demanda (2.0x): R$ " + (valorBaseCorrida * 2.0));
// }








// const crachaAtivo = true;
// const horaAtual = 20;
// const temAutorizacaoExtra = false;

// if (horaAtual < 0 || horaAtual > 23) {
//     console.log("Erro no relógio do sistema.");
// } else if (crachaAtivo === false) {
//     console.log("Acesso bloqueado: Crachá inativo ou inválido.");
// } else if (crachaAtivo === true && ((horaAtual >= 8 && horaAtual <= 18) || temAutorizacaoExtra === true)) {
//     console.log("Acesso liberado: Bem-vindo!");
// } else {
//     console.log("Acesso negado: Fora do horário permitido sem autorização.");
// }





// const sensor1 = 26;
// const sensor2 = 28;
// const modoEconomia = false;

// const media = (sensor1 + sensor2) / 2;

// if (Math.abs(sensor1 - sensor2) > 10) {
//     console.log("Alerta de Hardware: Falha na leitura dos sensores.");
// } else if (media < 18) {
//     console.log("Temperatura baixa: Desligando ar-condicionado.");
// } else if (media >= 18 && media <= 24) {
//     console.log("Temperatura ideal: Mantendo ventilação padrão.");
// } else if (media > 24 && modoEconomia === true) {
//     console.log("Aviso: Temperatura alta, mas refrigeração máxima limitada pelo Modo Economia.");
// } else {
//     console.log("Perigo: Ativando resfriamento de emergência!");
// }

// const valorCarrinho = 350;
// const clientePrime = true;

// if (valorCarrinho <= 0) {
//     console.log("Carrinho vazio: Adicione itens para continuar.");
// } else if (valorCarrinho < 100) {
//     console.log("Sem desconto aplicado. Total: R$ " + valorCarrinho);
// } else if (valorCarrinho < 300) {
//     console.log("Desconto de 10%. Total: R$ " + (valorCarrinho * 0.90));
// } else if (valorCarrinho >= 300 && clientePrime === false) {
//     console.log("Desconto de 15%. Total: R$ " + (valorCarrinho * 0.85));
// } else {
//     console.log("Desconto de 25%. Total: R$ " + (valorCarrinho * 0.75));
// }



const kwhConsumido = 200;
const kwhGeradoSolar = 50;
const tarifaBaseKwh = 0.85;
const altoConsumoPico = true;

const saldoLiquido = kwhConsumido - kwhGeradoSolar;

if (kwhConsumido < 0 || kwhGeradoSolar < 0 || tarifaBaseKwh <= 0) {
    console.log("Erro de leitura: Valores de medição ou tarifa inválidos.");
} else if (saldoLiquido <= 0) {
    const credito = Math.abs(saldoLiquido);
    console.log("Crédito gerado: " + credito + " kWh. Fatura mínima: R$ 50,00.");
} else if (saldoLiquido <= 150) {
    const total = (saldoLiquido * tarifaBaseKwh) + 50;
    console.log("Bandeira Verde. Total a pagar: R$ " + total);
} else if (saldoLiquido > 150 && altoConsumoPico === false) {
    const total = (saldoLiquido * tarifaBaseKwh * 1.15) + 50;
    console.log("Bandeira Amarela. Total a pagar: R$ " + total);
} else {
    const total = (saldoLiquido * tarifaBaseKwh * 1.30) + 50;
    console.log("Bandeira Vermelha (Pico). Total a pagar: R$ " + total);
}