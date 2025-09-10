function formatearMoneda(valor:number):string{
    return valor.toLocaleString("en-US", {currency:"USD", style:"currency"});
}

function formatearFecha(fecha:Date):string{
return fecha.toLocaleDateString("es-es",{weekday:"long",
    day:"2-digit",
    month:"2-digit",
    year:"numeric"
})
}