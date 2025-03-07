const { DateTime } = require("luxon");
const gerarDiasUteisMesAtual = require('../helpers/gerarDiasUteisMesAtual')
const gerarSeteDiasUteisProximoMes = require('../helpers/gerarSeteDiasUteisProximoMes')

const calendarioSemanal = () => { 
    const diasUteis = gerarDiasUteisMesAtual().concat(gerarSeteDiasUteisProximoMes());

    const umaSemanaFromToday = []

    const hoje = DateTime.local().setLocale("pt-BR") 
   
   const hojeDiaNumero = hoje.day
   const hojeDiaSemana = hoje.toFormat('cccc')
   const hojeMesExtenso = hoje.toFormat("LLLL")
        

    for(let i = 0; i < diasUteis.length; i++) {
        if(diasUteis[i].dia == hojeDiaNumero && diasUteis[i].diaSemana == hojeDiaSemana && diasUteis[i].mesAtual == hojeMesExtenso) { 
            for(let b = i;  b < i + 6; b++) {
                umaSemanaFromToday.push(diasUteis[b])                
            }
            
        }
    }

    return umaSemanaFromToday
}

module.exports = calendarioSemanal