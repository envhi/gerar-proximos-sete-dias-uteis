const { DateTime } = require("luxon");

const seteDiasUteisProximoMes = () => {

    const hoje = DateTime.local().setLocale("pt-BR") 

    const diasDoProximoMes = [];

    for (let dia = 1; dia <= 7; dia++) {
        let data = DateTime.local(hoje.year, hoje.plus({ months: 1 }).month + 1, dia).setLocale("pt-BR");
        diasDoProximoMes.push({ dia, diaSemana: data.toFormat("cccc"), proximoMes: data.toFormat("LLLL") })
    }

    const diasUteisProximoMes = diasDoProximoMes.filter(dia => dia.diaSemana != "sábado" && dia.diaSemana != "domingo")

    return diasUteisProximoMes
}

module.exports = seteDiasUteisProximoMes