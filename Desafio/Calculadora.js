// Função para calcular o saldo e o nível de um jogador
function calcularNivel(vitorias, derrotas) {
    // Cálculo do saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Determinação do nível baseado nas vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Colocar um valor aleatório
const vitorias = 91; 
const derrotas = 23; 
const resultado = calcularNivel(vitorias, derrotas);

// Exibir a mensagem final
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);