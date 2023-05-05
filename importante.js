function
let diaDaSemana = data.toLocaleString("pt-PT",{weekday:"long"}) // segunda-feira
let diaDoAno = data.toLocaleString("pt-PT",{day:"numeric"}) // 2
let mes = data.toLocaleString("pt-PT",{month:"long"}) // março
let ano = data.toLocaleString("pt-PT",{year:"numeric"}) // 1999

------------------------
return:
esta maneira:
  return mapaDaSemana.get(diaDasemana) + ", " + dia + " " + mapaDosMeses.get(mes) + " " + ano
}
OU
return `${diaDaSemana}, ${dia} de ${mes} de ${ano}`
-----------------------------

SE O RETURN É A PRIMEIRA LETRA GRANDE E AS OUTRAS PEQUENAS /// Segunda-feira 

function mesPorExtensoBilingue(data, lingua){
let mesPt = data.toLocaleString("pt-PT",{month:"long"})
let mesIng = data.toLocaleString("en-US",{month:"long"})
if ( lingua === "en"){
    return mesIng.charAt(0).toUpperCase() + mesIng.substr(1)
}
if ( lingua === "pt"){
    return mesPt.charAt(0).toUpperCase() + mesPt.substr(1)
}
} 
