const { DateTime } = require("luxon");

const gerarDiasUteisMesAtual = () => {

    const hoje = DateTime.local().setLocale("pt-BR")

    const primeiroDiaMesAtual = DateTime.local(hoje.year, hoje.day, 1);

    const ultimoDiaMesAtual = primeiroDiaMesAtual.endOf("month").day;

    let diasDoMesAtual = [];

    for (let dia = 1; dia <= ultimoDiaMesAtual; dia++) {
        let data = DateTime.local(hoje.year, hoje.month, dia).setLocale("pt-BR");
        diasDoMesAtual.push({ dia, diaSemana: data.toFormat("cccc"), mesAtual: data.toFormat("LLLL") });
    }

    const diasUteisMesAtual = diasDoMesAtual.filter(dia => dia.diaSemana != "sábado" && dia.diaSemana != "domingo")

    return diasUteisMesAtual
}

module.exports = gerarDiasUteisMesAtual